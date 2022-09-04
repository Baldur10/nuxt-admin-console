import getUserService from '../services/user/get'
import postUserService from '../services/user/post'
import deleteUserService from '../services/user/delete'
import putUserService from '../services/user/put'

export const fetchUsers = async(req,res) => {
    try {
        res.status(200).json(await getUserService.all())
        console.log("Successfully Retrieved Users.")
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUser = async(req,res) => {
    try {
        console.log("Successfully Fetched Specific Users.")
        res.status(200).json(await getUserService.byId(req.params.id))
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const {
            sellerId,
            name,
            email,
            password
        } = req.body
        const newUser = await postUserService.create({
            sellerId,
            name,
            email,
            password
        })
        res.status(200).json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const updateUser = async(req,res) => {
    try {
        console.log("hm..")
        const {
            name,
            email,
            password
        } = req.body
        // console.log()
        let result = await putUserService.byId(req.params.id, {
            name,
            email,
            password
        })
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const deleteUser = async(req,res) => {
    try {
        let result = await deleteUserService.byId(req.params.id)
        res.status(200).json({ result })
    } catch (e) {
        res.status(500).json(e)
    }
}

export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const loggedin = await getUserService.byEmailAndPassword(
            email,
            password
        )
        // await client.set(email, loggedin)
       
        res.status(200).json(loggedin)
    }
    catch (e) {
        res.status(500).json(e)
    }
}
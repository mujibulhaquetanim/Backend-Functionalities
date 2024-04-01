const home = async (req, res) => {
    try {
        res.status(200).json({message:'Welcome to the User Auth page'});
    } catch (error) {
        res.status(400).json({message:'Page not found: ' + error.message});
    }
}

const register = async (req, res) => {
    try {
        res.status(200).json({message:'Welcome to the User Register page' + req.body});
    } catch (error) {
        res.status(400).json({message:'Page not found: ' + error.message});
    }
}
const login = async (req, res) => {
    try {
        res.status(200).json({message:'Welcome to the User Login page' + req.body});
    } catch (error) {
        res.status(400).json({message:'Page not found: ' + error.message});
    }
}

export { home, register, login }
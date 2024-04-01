const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to the User Auth page');
    } catch (error) {
        res.status(400).send('Page not found: ' + error.message);
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send('Welcome to the User Register page');
    } catch (error) {
        res.status(400).send('Page not found: ' + error.message);
    }
}
const login = async (req, res) => {
    try {
        res.status(200).send('Welcome to the User Login page');
    } catch (error) {
        res.status(400).send('Page not found: ' + error.message);
    }
}

export { home, register, login }
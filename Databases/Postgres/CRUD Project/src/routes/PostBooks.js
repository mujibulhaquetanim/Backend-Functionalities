async function createCollection(req, res) {
    const { name, description } = req.body;
    try {
        res.status(201).json({ msg: `Books added successfully. They are: ${name} and ${description}` });
    } catch (error) {
        res.status(500).json({ msg: error.message });

    }
}

module.exports = { createCollection };
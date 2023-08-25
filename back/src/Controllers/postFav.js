const { Favorite } = require('../DB_connection');


module.exports = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send('faltan datos')
        }

        await Favorite.findOrCreate({
            where: { name, origin, status, image, species, gender }
        });

        const allFavs = await Favorite.findAll();
        return res.json(allFavs)

    } catch (error) {
        return res.status(500).json(error.message)
    }
};
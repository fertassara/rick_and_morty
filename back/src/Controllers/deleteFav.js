const { Favorite } = require('../DB_connection');


module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        await Favorite.destroy({ where: { id } })

        const allFavs = await Favorite.findAll();
        return res.json(allFavs);
    } catch (error) {
        return res.status(500).json(error.message)
    }
};

const Articles = require('../database/schemas/Articles');

const articlesRoute = async (req, res) => {
    try {
        const articles = await Articles.find();
        res.status(200).send({
            message: "Articles fetched successfully",
            data: articles,
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: "Error fetching articles",
            success: false
        });
}
};


module.exports = articlesRoute;
const postService = require('../service/postService')

async function getAll(req, res) {
    let posts = await postService.getAll()
    res.json({ data: posts} )
}

async function newScrape(req, res) {
    const customLimit = req.query.limit

    let result = await postService.scrapeAndSave(customLimit);
    res.json({ message: `process completed successfully. Total new posts added: ${result}`, total: result} )
}

module.exports = {
    getAll,
    newScrape
}
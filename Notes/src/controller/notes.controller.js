async function homePage(req, res) {
    res.render(`index`)
}

async function createNotes(req, res) {
    res.render(`createnotes`)
}

async function allNotes(req, res) {

    console.log(req.body)
    res.render(`allnotes`)
}
module.exports = {homePage, createNotes, allNotes}
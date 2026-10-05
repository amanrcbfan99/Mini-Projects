const notesModel = require("../model/notes.model");

async function homePage(req, res) {
    res.render("index");
}

async function createNotesPage(req, res) {
    res.render("createnotes");
}

async function createNotes(req, res) {

    console.log(req.body);

    const { title, description } = req.body;

    await notesModel.create({
        title,
        description
    });

    res.redirect("/allnotes");
}

async function allNotes(req, res) {

    const notes = await notesModel.find();

    res.render("allnotes", {
        notes
    });
}

module.exports = {
    homePage,
    createNotesPage,
    createNotes,
    allNotes
};
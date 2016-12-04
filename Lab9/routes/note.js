
const express = require('express');
const router = express.Router();
const fileDate = require("../data/file");
const xss = require('xss');
const path = require("path");
let notFound = "misc/debug";


router.get("/", (req, res) => {
    var noteList = fileDate.getAllNote().then((noteList) => {
        for(var note in noteList) {
       //     noteList[note].NoteSummary = xss(noteList[note].NoteSummary);
        //    noteList[note].NoteBody = xss(noteList[note].NoteBody);
        }
        res.render("examples/noteList", {noteList: noteList});
    }).catch(() => {
        res.render("misc/debug",{err:e});
    });
});
router.get("/add", (req, res) => {
        res.render("examples/newNote");
});

router.post("/new", (req, res) => {   

    fileDate.addNote(req.body).then((newNote) => {
       res.json({"status":"success","id":newNote.id});
    }).catch((e) => {
        res.render("misc/debug",{err:e});
    });
});

router.get("/:note", (req, res) => {
    fileDate.getNoteById(req.params.note).then((note) => {
        
        res.render("examples/note", {note: note});
    }).catch((e) => {
        console.log('err when get"note/:note');
        console.log(e);
        res.render("misc/debug",{err:e});
    });
});

router.get("/:note/next", (req, res) => {
    var noteList = fileDate.getAllNote().then((noteList) => {
        for(var index in noteList) {
            if(noteList[index].id.toString() === req.params.note) {
                if(index == noteList.length-1){
                    res.json({"status":"fail"});
                    return;
                }else{
                    noteList[parseInt(index)+1].NoteSummary = xss(noteList[parseInt(index)+1].NoteSummary);
                    noteList[parseInt(index)+1].NoteBody = xss(noteList[parseInt(index)+1].NoteBody);
                    res.json({"status":"success", "note": JSON.stringify(noteList[parseInt(index)+1])});
                    return;
                }
            }
        }

    }).catch(() => {
        res.render("misc/debug",{err:e});
    });
});
module.exports = router;
const express = require('express');
const fs = require('fs');
const xss = require('xss');
const Path = './data/note.json';

function cmp(a, b) {
    return new Date(a.NoteDueDate).getTime() - new Date(b.NoteDueDate).getTime();
}

function isdate(intYear,intMonth,intDay){
    if(isNaN(intYear)||isNaN(intMonth)||isNaN(intDay)) return false;
    if(intMonth>12||intMonth<1) return false;
    if ( intDay<1||intDay>31)return false;
    if((intMonth==4||intMonth==6||intMonth==9||intMonth==11)&&(intDay>30)) return false;
    if(intMonth==2){
        if(intDay>29) return false;
        if((((intYear%100==0)&&(intYear%400!=0))||(intYear%4!=0))&&(intDay>28))return false;
    }
    return true;
}


let exportedMethods = {
    getAllNote: () => {
        var obj = JSON.parse(fs.readFileSync(Path));
        obj.sort(cmp);
        return Promise.resolve(obj);
    },
    getNoteById: (noteid) => {

        var obj = JSON.parse(fs.readFileSync(Path, 'utf8'));        
        let note = obj.filter(x => x.id == noteid).shift();
        if(!note){
            console.log(`No note found by id ${noteid}`);
            return Promise.reject("No note found");     
        }
       // note.NoteSummary = xss(note.NoteSummary);
       // note.NoteBody = xss(note.NoteBody);
        return Promise.resolve(note);   
        
    },
    addNote: (newNote) => {

        if (!newNote) {
            return Promise.reject("You must provide data to create a new Note");
            
        }
        if (!newNote.NoteTitle || typeof newNote.NoteTitle !== "string") {
            return Promise.reject("You must provide a NoteTitle and as string type");
        }

        if (!newNote.NoteDueDate || typeof newNote.NoteDueDate !== "string") {
            return Promise.reject("You must provide a DueDate in yyyy/mm/dd form");
        } else {
            var matchArray = newNote.NoteDueDate.match(/^([0-9]{4})\/([0-1][0-9])\/([0-3][0-9])$/);
            if (matchArray == null) {
            return Promise.reject("You must provide a DueDate in yyyy/mm/dd form");
            } else {
                if (!isdate(matchArray[1], matchArray[2], matchArray[3])) {
                    return Promise.reject("You must provide a DueDate in yyyy/mm/dd form");
                }
            }
        }

        if (!newNote.NoteSummary || typeof newNote.NoteSummary !== "string") {
            return Promise.reject("You must provide a NoteSummary and as string type");
        }
        if (!newNote.NoteBody || typeof newNote.NoteBody !== "string") {
            return Promise.reject("You must provide a NoteSummary and as string type");
        }
        var obj = JSON.parse(fs.readFileSync(Path, 'utf8'));

        newNote.id = obj.length?obj[obj.length - 1].id+1:0;
        obj.push(newNote);         
               
        fs.writeFile(Path, JSON.stringify(obj,null,4), function(err) {
            if (err) 
                return Promise.reject(err);       
            return Promise.resolve(newNote);
            
        });
        return Promise.resolve(newNote);
    }
};

module.exports = exportedMethods;

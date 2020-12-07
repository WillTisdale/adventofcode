$(document).ready(function(){
    "use strict";

    const puzzle = $('#puzzle')

    let puzzleStr = puzzle.html()

    // console.log(puzzleStr);

    let puzzStr = puzzleStr.replace(/&gt;/g, ">")

    let puzzString = puzzStr.replace(/&lt;/g, "<")

    // console.log(puzzString);

    let puzzArr = puzzString.split("")

    console.log(puzzArr);


    let count = 1

})
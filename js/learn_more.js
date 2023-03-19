let learn_more_lit = document.getElementById("learn_more_lit");
let intro_lit =  document.getElementById("intro_lit");
learn_more_lit.addEventListener("click", (e) =>{
    document.getElementById("intro_lit").innerHTML ="<p>This page features books written by women and for women, books and essays about feminism, poems, plays, and bios of female writers.</p>"
});

let learn_more_his = document.getElementById("learn_more_his");
let intro_his =  document.getElementById("intro_his");
learn_more_his.addEventListener("click", (e) =>{
    document.getElementById("intro_his").innerHTML ="<p>This page features bios of important women in history and women currently in Congress or otherwise politically involved.</p>"
});

let learn_more_fem = document.getElementById("learn_more_fem");
let intro_fem =  document.getElementById("intro_fem");
learn_more_fem.addEventListener("click", (e) =>{
    document.getElementById("intro_fem").innerHTML ="<p>This page features a collection of important feminist terminology that might make reading easier. These will include formal definitions and my own understandings of the terms.</p>"
});



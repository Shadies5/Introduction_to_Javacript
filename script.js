let pNode = document.createElement("p");
let addBox_Note = document.querySelector(".addBoxnote");
let articles = document.querySelectorAll('article');
let addBtn_Note = document.querySelector(".addBtnnote"); document.querySelector("main");
let counter=0;
let articleLength = articles.length;
let textNode = `you have ${counter + articleLength} note(s)`;
let main = document.querySelector("main");

//console.log(counter);
//console.log(counter + articleLength);

// functionality to display number of notes when the page loads.
window.addEventListener('load', () => {
    addBox_Note.appendChild(pNode).innerText = textNode; 
});

// functionality to prompt user for note and title.
function prompter() {
    let title = prompt('Title of Note');
    let bodyOfNote = prompt('Write body of note');

    return {title, bodyOfNote};
}

function noteCreator (titleOfNote, bodyOfNote) {
    let pNote = document.createElement("p");
    let h2Note = document.createElement('h2');
    let divNote = document.createElement('div');
    let articleNote = document.createElement('article');
    let title = titleOfNote;
    let body = bodyOfNote;

    h2Note.innerText = titleOfNote;
    pNote.innerText = bodyOfNote;

    divNote.appendChild(h2Note);
    divNote.appendChild(pNote);
  
    articleNote.appendChild(divNote);

    main.insertBefore(articleNote, articles[0]);
    
}

// functionality to add note to the webpage.
addBtn_Note.addEventListener("click", () => {
    counter++;
    let {title, bodyOfNote} = prompter();

    // call function that creates and displays note using input
    noteCreator(title, bodyOfNote);   
    pNode.textContent = `you have ${counter + articleLength} note(s)`        
});

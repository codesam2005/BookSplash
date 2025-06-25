var box = document.querySelector(".popup-box");
var overlay = document.querySelector(".popup-overlay")

document.getElementById('add-popup-button').addEventListener("click", function () {
    box.style.display = "block";
    overlay.style.display = "block";
})

document.getElementById("cancel-book").addEventListener("click",function(event){ 
    event.preventDefault();
    box.style.display = "none";
    overlay.style.display = "none";
})

document.getElementById("add-book").addEventListener("click",function(event){ 
    event.preventDefault();
    box.style.display = "none";
    overlay.style.display = "none";
})

var container = document.querySelector('.container');
var addBook = document.getElementById('add-book');
var titleInput = document.getElementById('book-title-input');
var authorInput = document.getElementById('book-author-input');
var descInput = document.getElementById('book-description-input');

addBook.addEventListener("click",function(){ 
    var div = document.createElement('div');
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${titleInput.value}</h2><h5>${authorInput.value}</h5><p>${descInput.value}</p><button onclick="deleteBook(event)">Delete</button>`;
    container.append(div);
})


function deleteBook(event){ 
    event.target.parentElement.remove();
}
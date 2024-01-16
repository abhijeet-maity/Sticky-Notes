// let textArea = document.querySelector(".area").children[0].value;
// let colorValue = document.querySelector(".area").children[1].children[0].value;
let btn = document.querySelector(".btn-addnote");
btn.addEventListener("click", () => {
    let textArea = document.querySelector("#textarea");
    let data = textArea.value;
    let colorValue = document.querySelector(".area").children[1].children[0].value;
    if (textArea.value === "") {
        alert("Please enter some text");
        return;
    } else {
        makeStickNotes(data, colorValue);
        textArea = "";
        document.querySelector(".no-notes").style.display = "none";
        removeStickyNotes();
    }
});

function removeStickyNotes() {
    let btn2  = document.querySelectorAll(".btn2");
    
    btn2.forEach((individualBtn) => {
        individualBtn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
    })
}

let note = document.querySelector(".each-notes");
function makeStickNotes(text, color) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${text}</p><button class = "btn2">X</button`;
    div.style.backgroundColor = color;
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.display = "inline-block";
    div.style.marginLeft = "10px";
    div.style.marginTop = "10px";
    div.style.borderRadius = "5px";
    let btn2  = document.querySelectorAll(".btn2");
    note.appendChild(div);

}
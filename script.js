
function addNewField() {

let newNode = document.createElement('textarea')
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute('placeholder','Enter here....');
newNode.setAttribute("rows",3);

let weOb= document.getElementById("we");

let weAddButton = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButton);
}


function addNewSkill() {

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('skills');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here....');
    newNode.setAttribute("rows",3);
    
    let skillOb= document.getElementById("skills");
    
    let skillAddButton = document.getElementById("skillAddButton");
    
    skillOb.insertBefore(newNode, skillAddButton);
    }
    
    
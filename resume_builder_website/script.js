function addNewField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here....");
  newNode.setAttribute("rows", 3);

  let weOb = document.getElementById("we");

  let weAddButton = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButton);
}

function addNewSkill() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skills");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here....");
  newNode.setAttribute("rows", 3);

  let skillOb = document.getElementById("skills");

  let skillAddButton = document.getElementById("skillAddButton");

  skillOb.insertBefore(newNode, skillAddButton);
}

//build resume

function buildResume() {
  //name---------------
  let nameB = document.getElementById("nameB").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameB;
  document.getElementById("nameT2").innerHTML = nameB;
  //contact-------------
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactB").value;
  //address------------
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressB").value;
  //linkedinlink-------------
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinB").value;
  //github link------------
  document.getElementById("gitT").innerHTML =
    document.getElementById("gitB").value;
  // objective----------
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveB").value;
//work experience--------

let workEx =document.getElementsByClassName("weField")

let str=''

for(let e of workEx){
    str = str + `<li> ${e.value} </li>`;
}

document.getElementById("workExperienceT").innerHTML = str;


//skills----------
let skill = document.getElementsByClassName("skills");

let str2 ="";

for(let e of skill){
    str2 += str2 + `<li> ${e.value} </li>`;

}
document.getElementById("skillsT").innerHTML = str2;

//first to hide template--------
document.getElementById("resumeForm").style.display ='none';
//then to hide form------------
document.getElementById("resumeTemplate").style.display ='block'


}


function printResume() {
    window.print();
}
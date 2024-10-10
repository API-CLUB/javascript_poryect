const companyData = {
  name: "Acme Corporation",
  primaryColor: "Red",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};


//! VARIABLES

const htmlAll = document.documentElement;
const headTitle = document.getElementById('headTitle');
const logoPage = document.getElementById('companyName');
const imagePage = document.getElementById('companyImage');
const dataCompany = document.getElementById('companyClaim');
const textCompany = document.getElementById('companyText');
const bodyTag = document.body;
const formBtn = document.getElementById("editCompanyBtn")
const showCompanyForm = document.getElementById("companyForm")
const closeCompanyForm = document.getElementById("closeCompanyFormBtn")
const bottonSaveForm = document.querySelectorAll('button');
const bottonSaveForm2 = document.getElementById('button_save');
console.log(bottonSaveForm[bottonSaveForm.length-1]);
console.log(bottonSaveForm2);


//¿   DOM MANIPULATE
function updateDOM(){
  headTitle.textContent = companyData.name;
  logoPage.textContent = companyData.name;
  imagePage.src = companyData.imageUrl;
  dataCompany.textContent = companyData.claim;
  textCompany.textContent = companyData.text;
  htmlAll.style.setProperty('--primary-color', companyData.primaryColor);
}
updateDOM();
//EVENTOS

formBtn.addEventListener('click', showFormAction);
closeCompanyForm.addEventListener('click', closeFormAction);
window.addEventListener('load', formDefault());
let boton1 = bottonSaveForm[bottonSaveForm.length-1]
boton1.addEventListener('click', saveFomrChanges());
bottonSaveForm2.addEventListener('click', saveFomrChanges());
//FUNCTION

function showFormAction(){
  showCompanyForm.classList.remove("hidden")
}

function closeFormAction(){
  showCompanyForm.classList.add("hidden")
}

function formDefault (){
  document.getElementById("companyNameInput").value = companyData.name
  document.getElementById("primaryColorInput").value = companyData.primaryColor
  document.getElementById("backgroundColorInput").value = companyData.backgroundColor
  document.getElementById("companyClaimInput").value = companyData.claim
  document.getElementById("companyImageURLInput").value = companyData.imageUrl
  document.getElementById("companyTextInput").value = companyData.text
}

function saveFomrChanges(){
companyData.name= document.getElementById("companyNameInput").value; 
updateDOM();
closeFormAction();
}
console.log(companyData);
console.log(companyData.name);
console.log(document.getElementById("companyNameInput").value);




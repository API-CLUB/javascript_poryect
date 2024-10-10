let companyData = {
  name: "Acme Corporation",
  primaryColor: "#FF0000",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};
console.log(companyData);

if (localStorage.getItem("companyData")) {
  companyData = JSON.parse(localStorage.getItem("companyData"));
  console.log(companyData);
}


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
let boton1 = bottonSaveForm[bottonSaveForm.length-1]

//¿   DOM MANIPULATE FUNCTION

function updateDOM(){
  headTitle.textContent = companyData.name;
  console.log (headTitle.textContent)
  logoPage.textContent = companyData.name;
  imagePage.src = companyData.imageUrl;
  dataCompany.textContent = companyData.claim;
  textCompany.textContent = companyData.text;
  htmlAll.style.setProperty('--primary-color', companyData.primaryColor);

  formDefault()

}

updateDOM();

//¡  EVENTOS
formBtn.addEventListener('click', showFormAction);
closeCompanyForm.addEventListener('click', closeFormAction);
window.addEventListener('load', formDefault);
boton1.addEventListener('click', saveFomrChanges);

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
  bodyTag.style.backgroundColor = companyData.backgroundColor;
}

function saveFomrChanges(event){

  event.preventDefault();

  companyData.name = document.getElementById("companyNameInput").value;
  companyData.primaryColor = document.getElementById("primaryColorInput").value;
  companyData.backgroundColor = document.getElementById("backgroundColorInput").value;
  companyData.claim = document.getElementById("companyClaimInput").value;
  companyData.imageUrl = document.getElementById("companyImageURLInput").value;
  companyData.text = document.getElementById("companyTextInput").value;

  localStorage.setItem("companyData", JSON.stringify(companyData));

  updateDOM();
  closeFormAction();
  localStorage.clear();
}


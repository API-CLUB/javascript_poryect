const companyData = {
  name: "Acme Corporation",
  primaryColor: "Red",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

console.log(companyData);

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
console.log (showCompanyForm);


//¿   DOM MANIPULATE

headTitle.textContent = companyData.name;
logoPage.textContent = companyData.name;
imagePage.src = companyData.imageUrl;
dataCompany.textContent = companyData.claim;
textCompany.textContent = companyData.text;
htmlAll.style.setProperty('--primary-color', companyData.primaryColor);


//EVENTOS

formBtn.addEventListener('click', showFormAction);
closeCompanyForm.addEventListener('click', closeFormAction);


//FUNCTION

function showFormAction(){
  showCompanyForm.classList.remove("hidden")
}

function closeFormAction(){
  showCompanyForm.classList.add("hidden")
}




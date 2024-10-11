const companyData = {
  name: "Acme Corporation",
  primaryColor: "#FF0000",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};
console.log(companyData);

const oferta1 = {
 imagenOf: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600",
 productName: "Camara Cannon",
 priceOf: "9.99€"
  
};

const oferta2 = {
 imagenOf: "https://images.unsplash.com/photo-1536632087471-3cf3f2986328?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600",
 productName:"Camara Hp",
 priceOf:"99.99€"
  
};

const oferta3 = {
 imagenOf: "https://images.unsplash.com/photo-1460134846237-51c777df6111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 productName:"Camara Nikkon",
 priceOf:"999.99€"
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
const boton1 = bottonSaveForm[bottonSaveForm.length-2]
const editOfertBtn = document.getElementById("editOfertBtn")
const closeOferFormBtn = document.getElementById("closeOferFormBtn")
const ofertForm = document.getElementById("ofertForm")
const imagenOf1 = document.getElementById("idIamgeOferta1")
const productName1 = document.getElementById("idProductName1")
const priceOf1 = document.getElementById("idPriceProduct1")
const imagenOf2 = document.getElementById("idIamgeOferta2")
const productName2 = document.getElementById("idProductName2")
const priceOf2 = document.getElementById("priceProduct2")
const imagenOf3 = document.getElementById("idIamgeOferta3")
const productName3 = document.getElementById("idProductName3")
const priceOf3 = document.getElementById("idPriceProduct3")

const DOMimagenOf1 = document.getElementById("cardImg1")
const DOMproductName1 = document.querySelector(".product-info1")
const DOMpriceOf1 = document.querySelector(".product-info1 p")
const DOMimagenOf2 = document.getElementById("cardImg2")
const DOMproductName2 = document.querySelector(".product-info2")
const DOMpriceOf2 = document.querySelectorAll(".product-info2 p")
const DOMimagenOf3 = document.getElementById("cardImg3")
const DOMproductName3 = document.querySelector(".product-info3")
const DOMpriceOf3 = document.querySelector(".product-info3 p")



console.log(DOMpriceOf2)
console.log(imagenOf2)
console.log(imagenOf3)

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

function updateDOMof(){
  DOMimagenOf1.src = oferta1.imagenOf;
  DOMimagenOf2.src = oferta2.imagenOf;
  DOMimagenOf3.src = oferta3.imagenOf;
  DOMproductName1.textContent = oferta1.productName;
  DOMproductName2.textContent = oferta2.productName;
  DOMproductName3.textContent = oferta3.productName;
  DOMpriceOf1.textContent = oferta1.priceOf;
  DOMpriceOf2.textContent = oferta2.priceOf;
  DOMpriceOf3.textContent = oferta3.priceOf;


  formDefault()
  console.log(DOMpriceOf3.textContent)
}

updateDOM();
updateDOMof();


//¡  EVENTOS
formBtn.addEventListener('click', showFormAction);
closeCompanyForm.addEventListener('click', closeFormAction);
window.addEventListener('load', formDefault);
boton1.addEventListener('click', saveFormChanges);
editOfertBtn.addEventListener('click', showFormOfert);
closeOferFormBtn.addEventListener('click', closeOferBtn)

function showFormAction(){
  showCompanyForm.classList.remove("hidden")
}

function showFormOfert(){
  ofertForm.classList.remove("hidden")
  console.log('abrir')
}


function closeFormAction(){
  showCompanyForm.classList.add("hidden")
}

function closeOferBtn(){
  ofertForm.classList.add("hidden")
  console.log('abrir')
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

function saveFormChanges(event){

  event.preventDefault();

  companyData.name = document.getElementById("companyNameInput").value;
  companyData.primaryColor = document.getElementById("primaryColorInput").value;
  companyData.backgroundColor = document.getElementById("backgroundColorInput").value;
  companyData.claim = document.getElementById("companyClaimInput").value;
  companyData.imageUrl = document.getElementById("companyImageURLInput").value;
  companyData.text = document.getElementById("companyTextInput").value;


  updateDOM();
  closeFormAction();
}


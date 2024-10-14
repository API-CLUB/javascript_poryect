//'  OBJECTS

const companyData = {
  name: "Acme Corporation",
  primaryColor: "#2c5545",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

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
  //  FORM COMPANY
const formBtn = document.getElementById("editCompanyBtn")
const showCompanyForm = document.getElementById("companyForm")
const closeCompanyForm = document.getElementById("closeCompanyFormBtn")
const bottonSaveForm = document.querySelectorAll('button');
const boton1 = bottonSaveForm[bottonSaveForm.length-2]
const editOfertBtn = document.getElementById("editOfertBtn")
const closeOferFormBtn = document.getElementById("closeOferFormBtn")
const ofertForm = document.getElementById("ofertForm")
  //  DOM COMPANY
const DOMcompanyNameInput = document.getElementById("companyNameInput")
const DOMprimaryColorInput = document.getElementById("primaryColorInput")
const DOMbackgroundColorInput = document.getElementById("backgroundColorInput")
const DOMcompanyClaimInput = document.getElementById("companyClaimInput")
const DOMcompanyImageURLInput = document.getElementById("companyImageURLInput")
const DOMcompanyTextInput = document.getElementById("companyTextInput")
  //  FORM OFERS
const imagenOf1 = document.getElementById("idIamgeOferta1")
const productName1 = document.getElementById("idProductName1")
const priceOf1 = document.getElementById("idPriceProduct1")
const imagenOf2 = document.getElementById("idIamgeOferta2")
const productName2 = document.getElementById("idProductName2")
const priceOf2 = document.getElementById("idPriceProduct2")
const imagenOf3 = document.getElementById("idIamgeOferta3")
const productName3 = document.getElementById("idProductName3")
const priceOf3 = document.getElementById("idPriceProduct3")
  // DOM OFERTAS 
const DOMimagenOf1 = document.getElementById("cardImg1")
const DOMproductName1 = document.querySelector(".product-info1 h3")
const DOMpriceOf1 = document.querySelector(".product-info1 p")
const DOMimagenOf2 = document.getElementById("cardImg2")
const DOMproductName2 = document.querySelector(".product-info2 h3")
const DOMpriceOf2 = document.querySelector(".product-info2 p")
const DOMimagenOf3 = document.getElementById("cardImg3")
const DOMproductName3 = document.querySelector(".product-info3 h3")
const DOMpriceOf3 = document.querySelector(".product-info3 p")
const DOMsaveBtn = document.getElementById('saveOferts')

// PERSISTENCIA A TRAVES DE LOCAL STORAGE

window.addEventListener('load', () => {
  const storedCompanyData = localStorage.getItem('companyData');
  const storedOfertas = localStorage.getItem('ofertas');

  if (storedCompanyData) {
    Object.assign(companyData, JSON.parse(storedCompanyData));
  }

  if (storedOfertas) {
    const ofertas = JSON.parse(storedOfertas);
    Object.assign(oferta1, ofertas.oferta1);
    Object.assign(oferta2, ofertas.oferta2);
    Object.assign(oferta3, ofertas.oferta3);
  }

  updateDOM();
  updateDOMof();
});

//¡  EVENTOS

formBtn.addEventListener('click', showFormAction);
closeCompanyForm.addEventListener('click', closeFormAction);
window.addEventListener('load', formDefault);
window.addEventListener('load', formOfertsDefault);
boton1.addEventListener('click', saveFormChanges);
DOMsaveBtn.addEventListener('click', saveFormChangesOF);
editOfertBtn.addEventListener('click', showFormOfert);
closeOferFormBtn.addEventListener('click', closeOferBtn)

//¿  FUNCTION: DOM MANIPULATE 

function updateDOM(){
  headTitle.textContent = companyData.name;
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
  DOMpriceOf1.textContent = '';
  DOMpriceOf2.textContent = '';
  DOMpriceOf3.textContent = '';
  DOMpriceOf1.textContent = oferta1.priceOf;
  DOMpriceOf2.textContent = oferta2.priceOf;
  DOMpriceOf3.textContent = oferta3.priceOf;

  formDefault()
}

//¿  FUNCTIONS

function showFormAction(){
  showCompanyForm.classList.remove("hidden")
}

function showFormOfert(){
  ofertForm.classList.remove("hidden")
}


function closeFormAction(){
  showCompanyForm.classList.add("hidden")
}

function closeOferBtn(){
  ofertForm.classList.add("hidden")

}


function formDefault (){
  DOMcompanyNameInput.value = companyData.name
  DOMprimaryColorInput.value = companyData.primaryColor
  DOMbackgroundColorInput.value = companyData.backgroundColor
  DOMcompanyClaimInput.value = companyData.claim
  DOMcompanyImageURLInput.value = companyData.imageUrl
  DOMcompanyTextInput.value = companyData.text
  bodyTag.style.backgroundColor = companyData.backgroundColor;
}


function formOfertsDefault (){
  imagenOf1.value = oferta1.imagenOf
  productName1.value = oferta1.productName
  priceOf1.value = oferta1.priceOf
  imagenOf2.value = oferta2.imagenOf
  productName2.value = oferta2.productName
  priceOf2.value = oferta2.priceOf
  imagenOf3.value = oferta3.imagenOf
  productName3.value = oferta3.productName
  priceOf3.value = oferta3.priceOf
  
  bodyTag.style.backgroundColor = companyData.backgroundColor;

 
}

function saveFormChanges(event){

  event.preventDefault();

  companyData.name = DOMcompanyNameInput.value;
  companyData.primaryColor = DOMprimaryColorInput.value;
  companyData.backgroundColor = DOMbackgroundColorInput.value;
  companyData.claim = DOMcompanyClaimInput.value;
  companyData.imageUrl = DOMcompanyImageURLInput.value;
  companyData.text = DOMcompanyTextInput.value;

  localStorage.setItem('companyData', JSON.stringify(companyData));

  updateDOM();
  closeFormAction();
}

function saveFormChangesOF(event){

  event.preventDefault();

  oferta1.imagenOf = imagenOf1.value
  oferta1.productName = productName1.value
  oferta1.priceOf = priceOf1.value
  oferta2.imagenOf = imagenOf2.value
  oferta2.productName = productName2.value
  oferta2.priceOf = priceOf2.value
  oferta3.imagenOf = imagenOf3.value
  oferta3.productName = productName3.value
  oferta3.priceOf = priceOf3.value
  
  localStorage.setItem('ofertas', JSON.stringify({ oferta1, oferta2, oferta3 }));
 

  updateDOMof()
  closeOferBtn()
}

//localStorage.clear();
// var animals = document.getElementById("animals");

// animals.addEventListener('click', ()=>{
//     alert('hello');
// });
var buttonM = document.querySelector(".next-model");
var animals = document.getElementById("animals");
var flowers = document.getElementById("flowers");
var scenes = document.getElementById("scenes");
var text = document.getElementById("text");
var qoutes = document.getElementById("qoutes");
var imageUpload = document.querySelector(".sq-upload");
var imageFile = document.getElementById("image");
var imageUploadButton = document.querySelector(".button-upload");
var imgFile;
var xs = 0;
// Main Page Model Select
buttonM.addEventListener("click", () => {
  let textContainer = document.querySelector(".text-classification");
  let textContTitle = document.getElementById("textContTitle");
  let popUp = document.querySelector(".popup-details");
  if (animals.checked) {
    popUp.classList.add("popup-c-show");
    xs = 1;
  } else if (flowers.checked) {
    popUp.classList.add("popup-c-show");
    xs = 2;
  } else if (scenes.checked) {
    popUp.classList.add("popup-c-show");
    xs = 3;
  } else if (text.checked) {
    textContainer.classList.add("text-c-show");
    textContTitle.innerText = text.value;
  }else if(qoutes.checked){
    textContainer.classList.add("text-c-show");
    textContTitle.innerText = qoutes.value;
  }
});

// Popup BTN
let popBTN = document.querySelector(".goModel");
popBTN.addEventListener('click', ()=>{
  let imageContainer = document.querySelector(".image-classification");
  let imgContTitle = document.getElementById("imgContTitle");
  let popUp = document.querySelector(".popup-details");
  if(xs==1){
    popUp.classList.remove("popup-c-show");
    imageContainer.classList.add("img-c-show");
    imgContTitle.innerText = animals.value;
  }else if(xs==2){
    popUp.classList.remove("popup-c-show");
    imageContainer.classList.add("img-c-show");
    imgContTitle.innerText = flowers.value;
  }else if(xs==3){
    popUp.classList.remove("popup-c-show");
    imageContainer.classList.add("img-c-show");
    imgContTitle.innerText = scenes.value;
  }
});
// Close Image Container
document.getElementById("crossImage").onclick = function(){
  let imageContainer = document.querySelector(".image-classification");
  imageContainer.classList.remove("img-c-show");
};
// Close Text Container
document.getElementById("crossText").onclick = function(){
  let textContainer = document.querySelector(".text-classification");
  textContainer.classList.remove("text-c-show");
};
// Upload Function of Image
imageUpload.addEventListener('click', function(){
  imageFile.click();
});
imageFile.onchange = ({target})=>{
  imgFile = target.files[0];
  if(imgFile){
    var sq1 = document.querySelector(".sq1");
    var sq2 = document.querySelector(".sq2");
    let img = document.querySelector(".uploadedImage");
    let fileName = imgFile.name;
    let imgURI = URL.createObjectURL(imgFile);
    sq1.style.display = "none";
    sq2.style.display = "block";
    img.src = imgURI;
  }else{
    sq1.style.display = "block";
    sq2.style.display = "none";
    return;
  }
}

// Upload image button
imageUploadButton.addEventListener('click', ()=>{
  if(imgFile){
    alert("Found");
  }else{
    alert("Not Found");
  }
});
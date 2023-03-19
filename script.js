function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

var nclick= document.getElementById("next");
var pclick= document.getElementById("prev");
var Pjhead= document.getElementsByClassName("pjhead");
var Pjdesc= document.getElementsByClassName("pjdec");
const Lev1 ={
  head:"Fantasy Island",
  desc:"Hello everyone, nice to meet you all. Let me explain about the process of making this project. At first, I sulpted raw landscape in Unity with terrain tool.After that place some cubes and sphere for blockout . Then find references for stylized world assets . Like stylized stones,tree and skybox. After that Sculpted in Zbrush, decimated and UV unwrapped. And Exported to Substance Painter and bake some normal maps. Exported normal maps and import all the assets and baked data to Unity. In Unity, I created landscape material first and then place assets on level. For grasses, made two panes crossing each other and UV unwrapped. Exported UV map layout to photoshop and paint grass alpha map in it . Go back to Unity and created gradient material with grass alpha texture and then apply on object . For spreading grasses on level, I used Unity vegitation tool to paint . After done painting grasses, add some lights and adjust for good looking environment. All the lighting setup are done, place post process volume and adjust some data like exposure, shadow and contrast. Post processing is really important for final process. So, you need to give alot of time on it . After all these process, you need to add recorder on unity package. Using recorder you can move your camera around the map and create some animation sequences. This is the workflow that I used in this Project. I hope Everyone understand it. Have fun, Stay creative and stay safe. Bye... :)"
}
const Lev2 ={
  head:"Mystery Crystal",
  desc:"I made that in Unreal Engine4"
}
const Lev3 ={
  head:"M4 Sherman E8 Fury",
  desc:"I made that in Maya and Substance painter"
}

const pjarr=[Lev1,Lev2,Lev3];
var ccount=0;
Pjhead[0].textContent= pjarr[ccount].head;
Pjdesc[0].textContent= pjarr[ccount].desc;
function insert() {
  Pjhead[0].textContent= pjarr[ccount].head;
  Pjdesc[0].textContent= pjarr[ccount].desc;
}
// nc for next click
// pc for prev click
function pc(){
  ccount--;
  insert();
}
function nc(){
  ccount++;
  insert();
}
nclick.addEventListener("click", nc);
pclick.addEventListener("click", pc);
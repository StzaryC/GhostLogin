let input = document.querySelector("#key")
let ghost = document.querySelector(".ghost")
let layout_one = document.querySelector(".one")
let layout_two = document.querySelector(".two")
let layout_three = document.querySelector(".three")

let ok_sound = document.querySelector("#passed")
let access_auth = document.querySelector("#lyok")

input.addEventListener("keyup" , ()=>{
if (input.value === "Admin"){
  ghost.classList.add("passState")
  ok_sound.play();  
  input.value=""
  access();
}
if (input.value === "Stzary"){
    layout_one.classList.add("passState")
    ok_sound.play(); 
    input.value=""
    access();
}
  if (input.value === "Carmesi"){
    layout_two.classList.add("passState")
    ok_sound.play(); 
    input.value=""
    access();
}
  if (input.value === "220692"){
    layout_three.classList.add("passState")
    // input.value=""
    ok_sound.play(); 
    access();
    
}
  function access(){
    let keys = document.querySelectorAll(".passState")
    console.log(keys.length)
    if (keys.length == 4){
      input.setAttribute("type","button")
      input.setAttribute("value", "Login")
      input.setAttribute("onclick","window.location.href = 'welcome.html'")
    }
  }

  function loginBtn(){
    window.location.href = "welcome.html"
  }
})
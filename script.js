var li_items = document.querySelectorAll(".sideBar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");

// aplicando uma evento para quando entrar no elemento com o mouse
li_items.forEach((li_item) => {
  li_item.addEventListener("mouseenter", ()=>{
   // ação de remover a class 'hover_collapse' 
   li_item.closest(".wrapper").classList.remove("hover_collapse")
  })
})
// aplicando uma evento para quando sair do elemento o mouse
li_items.forEach((li_item) => {
  li_item.addEventListener("mouseleave", ()=>{
    // ação de adicionar a class 'hover_collapse'
    li_item.closest(".wrapper").classList.add("hover_collapse")
  })
})
// adicionando um evendo click no elemento
hamburger.addEventListener("click", ()=>{
  hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})



// const itemMenu = document.getElementById("menu");
// let viewSideBar = true;

// const btnMenu = document.getElementById("opMenu");



// itemMenu.addEventListener("click", () => {
//   const sideBar = document.querySelector(".sideBar");

//   //btnMenu.classList.remove('hamburger');
//   btnMenu.classList.add('hamburger1');
//   sideBar.classList.add('hamburger1');

//   // sideBar.setAttribute(
//   //   "style",
//   //   !viewSideBar ? "display: block;" : "display: none;"
//   // );
//   // viewSideBar = !viewSideBar;
// });


// // function viewBar(){
// //     const sideBar = document.querySelector(".sideBar");

// //       sideBar.setAttribute(
// //         "style",
// //         !viewSideBar ? "display: block;" : "display: none;"
// //       );
// //       viewSideBar = !viewSideBar;
// // }


const hamburger = document.getElementById("menu");
let viewSideBar = true;

hamburger.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");

  sideBar.setAttribute(
    "style",
    !viewSideBar ? "display: block;" : "display: none;"
  );
  viewSideBar = !viewSideBar;
});

// function viewBar(){
//     const sideBar = document.querySelector(".sideBar");

//       sideBar.setAttribute(
//         "style",
//         !viewSideBar ? "display: block;" : "display: none;"
//       );
//       viewSideBar = !viewSideBar;
// }


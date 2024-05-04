//Select the element Hamburger icon to select on mobile
const openIcon = document.querySelector(".open-icon");

// hide icon
const hideIcon = document.querySelector(".close");

//.mobile-selected-item

const mainContainer = document.querySelector(".mobile-selected-item");
//drop-main-head
const titleHead = document.querySelectorAll(".drop-title");
//ent.querySelectorAll(".dropdown");
const dropDown = document.querySelectorAll(".dropdown");

function openIconToSelect() {
  console.log("click");
  mainContainer.style.display = "block";
  openIcon.style.display = "none";
  hideIcon.style.display = "block";
}

function hideIconToClose() {
  mainContainer.style.display = "none";
  openIcon.style.display = "block";
  hideIcon.style.display = "none";
}
for (let i = 0; i < titleHead.length; i++) {
  const headTitle = titleHead[i];
  const dropDownList = dropDown[i];
}

hideIcon.addEventListener("click", hideIconToClose);
openIcon.addEventListener("click", openIconToSelect);

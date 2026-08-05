const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.querySelector(".hamburger");

// 背景（余白）をクリックしたら閉じる
mobileMenu.addEventListener("click", function(e) {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
  }
});

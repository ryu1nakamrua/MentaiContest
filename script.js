// ==========================
// ハンバーガーメニュー
// ==========================

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// ボタンを押したら開閉
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
});

// メニュー内リンクを押したら閉じる
function closeMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
}

// メニュー外を押したら閉じる
document.addEventListener("click", (e) => {
    if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        closeMenu();
    }
});

// Escキーでも閉じる
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// ==========================
// リサイズ時の処理
// ==========================

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

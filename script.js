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
    if (e.target === mobileMenu) {
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


const ENTRY_API_URL =
  'https://script.google.com/macros/s/AKfycbzgaf4LPH4GEjNsZ3tiGQF5uHKcEZk74stYrsidr1pgHkfkIsXWwO5TjScocJaNNWCx_g/exec';

const entryForm = document.getElementById('entryForm');

if (entryForm) {
  entryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton =
      entryForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = '送信中...';

    const formData = new FormData(entryForm);
    // ★ 送信前のデータを確認
console.log("===== FORM DATA =====");
for (const [key, value] of formData.entries()) {
  console.log(key, "=", value);
}
    const params = new URLSearchParams(formData);
console.log("===== URLSearchParams =====");
console.log(params.toString());

    fetch(ENTRY_API_URL, {
        method: 'POST', 
        body: params,
        mode: 'no-cors'
    })

      .then(() => {
        alert(
          'エントリーを受け付けました。\n' +
          '確認メールが届くまでしばらくお待ちください。'
        );

        entryForm.reset();

        submitButton.disabled = false;
        submitButton.textContent = '申込を送信';
      })
      .catch((error) => {
        console.error(error);

        alert(
          '送信に失敗しました。\n' +
          '時間をおいてもう一度お試しください。'
        );

        submitButton.disabled = false;
        submitButton.textContent = '申込を送信';
      });
  });
}

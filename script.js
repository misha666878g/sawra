document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    const counterElement = document.getElementById("counter");
    const coinElement = document.getElementById("coin");

    coinElement.addEventListener("click", () => {
        counter++;
        counterElement.textContent = counter;
    });

    // Подключаем Telegram Web App API
    const tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем приложение на весь экран
});
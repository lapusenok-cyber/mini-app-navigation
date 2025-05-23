// Получаем объект Telegram Web App
const tg = window.Telegram.WebApp;

// Получаем кнопки
const coursesButton = document.getElementById("coursesButton");
const subscriptionButton = document.getElementById("subscriptionButton");
const userInfoDiv = document.getElementById("userInfo");

// Получение информации о пользователе
tg.ready(); // Signal that the Mini App is ready - call this first!

// Обработчики нажатий на кнопки
coursesButton.addEventListener("click", () => {
    // Действия при нажатии на кнопку "Курсы"
    tg.showAlert("Вы нажали кнопку 'Курсы'"); // Пример
    // Здесь можно реализовать отправку данных в бот или другие действия
});

subscriptionButton.addEventListener("click", () => {
    // Действия при нажатии на кнопку "Подписка"
    tg.showAlert("Вы нажали кнопку 'Подписка'"); // Пример
    // Здесь можно реализовать отправку данных в бот или другие действия
});

// Отправка данных в бот (пример)
function sendDataToBot(data) {
    tg.sendData(JSON.stringify(data));
}


const userInfo = tg.initDataUnsafe || {user: {}};

let userInfoText = `User ID: ${userInfo.user.id}\n`;
userInfoText += `First Name: ${userInfo.user.first_name}\n`;
userInfoText += `Last Name: ${userInfo.user.last_name || ''}\n`;
userInfoText += `Username: ${userInfo.user.username || ''}\n`;

userInfoDiv.innerText = userInfoText;

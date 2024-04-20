// елемент з класом js-links
const navBarLinks = document.querySelector(".js-links");

// Створюю перше посилання
const firstNavBarLink = document.createElement("a");
firstNavBarLink.setAttribute("href", "#");
firstNavBarLink.textContent = "electric skateboards";

// Створюю перший пункт меню навігації
const firstNavElement = document.createElement("li");
firstNavElement.appendChild(firstNavBarLink);
navBarLinks.prepend(firstNavElement);

// Клоную останній пункт меню.
const lastNavElement = firstNavElement.cloneNode(true);

// Змінюю текст посилання у клонованому елементі
const secondNavBarLink = lastNavElement.querySelector("a");
secondNavBarLink.textContent = "more info";

// Вставляю клонований елемент в кінець
navBarLinks.append(lastNavElement);

// Встановлюю стиль списку
navBarLinks.style.listStyle = 'none';

// Додаю клас list-element до кожного пункту
const allNavElements = navBarLinks.querySelectorAll("li");
allNavElements.forEach(function(navElement) {
    navElement.classList.add("list-element");
});

// беру посилання на елемент з класом profile
const profileImages = document.querySelector(".profile");

// Створюю елемент зображення
const cartElement = document.createElement("img");
cartElement.src = "./img/cart.svg";
cartElement.alt = "this is cart";

// Вставляю елемент зображення
profileImages.appendChild(cartElement);

// Створюю заголовок h1
const createHeaderTextEl = document.createElement("h1");
createHeaderTextEl.textContent = "Welcome to Boosted USA";
createHeaderTextEl.classList.add("main_text");

// Знаходжу контейнер для тексту
const containerElementForText = document.querySelector(".first_layer__content");

// Вставляю заголовок перед елементом first_layer__btns
containerElementForText.insertBefore(createHeaderTextEl, containerElementForText.querySelector('.first_layer__btns'));

// Створюю параграф для опису.
const createDescTextEl = document.createElement("p");
createDescTextEl.textContent = "The Holy Grail of Electric Skateboards and One REVolutionary Scooter";
createDescTextEl.classList.add("desc_text");

// Вставляю параграф перед елементом first_layer__btns
containerElementForText.insertBefore(createDescTextEl, containerElementForText.querySelector('.first_layer__btns'));

// Створюю кнопку BOOSTED REVS
const createBtn = document.createElement("button");
createBtn.type = "button";
createBtn.textContent = "BOOSTED REVS";

// Знаходжу контейнер для кнопок першого рівня.
const containerForBtns = document.querySelector(".first_layer__btns");

// Додаю кнопку до контейнера.
containerForBtns.appendChild(createBtn);

// Додаю клас first до кожної кнопки
const allBtnElements = containerForBtns.querySelectorAll("button");
allBtnElements.forEach(function(btnsElement) {
    btnsElement.classList.add("first");
});

// Клонуюю першу кнопку
const createSecondBtn = createBtn.cloneNode(true);

// Змінюю текст клонованої кнопки на BOOSTED BOARDS
createSecondBtn.textContent = "BOOSTED BOARDS";

// Додаю клоновану кнопку
containerForBtns.appendChild(createSecondBtn);

// беру посилання на контент

const secondContentContainer = document.querySelector(".second_layer__content");

// Створюю кнопку магазину
const shopButton = document.createElement("button");
shopButton.type = "button";
shopButton.innerHTML = "Shop Now";

secondContentContainer.appendChild(shopButton)
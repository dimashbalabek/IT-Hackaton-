function darkMode() {
  let element = document.querySelector("main");
  element.classList.remove("sun"); // Удаляем класс sun, если есть
  element.classList.add("dark"); // Добавляем класс dark
}

function sunMode() {
  let element = document.querySelector("main");
  element.classList.remove("dark"); // Удаляем класс dark, если есть
  element.classList.add("sun"); // Добавляем класс sun
}

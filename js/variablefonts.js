// Ищем элемент по id и сохраняем его в переменную
let myTextElement = document.getElementById("text");

// Параметры
const minWidth = 100;
const maxWidth = 850;
const minWeight = 100;
const maxWeight = 850;
const minItalic = 1;
const maxItalic = 6;

function updateText(e) {
    // UV
    const uvX = e.offsetX / window.innerWidth;
    const uvY = e.offsetY / window.innerHeight;

    // расчет
    const weight = Math.round(uvX * (maxWeight - minWeight) + minWeight);
    const width = Math.round(uvY * (maxWidth - minWidth) + minWidth);
    const italic = Math.round(uvY * (maxItalic - minItalic) + minItalic);

    // Применяем стили
    const fontVariationSettings = `"wght" ${weight}, "wdth" ${width}, "ital" ${italic}`;
    console.log(fontVariationSettings);
    myTextElement.style.fontVariationSettings = fontVariationSettings;
}

window.addEventListener("mousemove", e => {
    // Для оптимизации - откладываем отрисовку до следующего кадра бразуера
    window.requestAnimationFrame(() => {
        updateText(e)
    })
});

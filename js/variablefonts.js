// Ищем элемент по id и сохраняем его в переменную
let myTextElement = document.getElementById("text");

// Параметры
const minWidth = 100;
const maxWidth = 1000;
const minWeight = 100;
const maxWeight = 1000;
const minItalic = -10;
const maxItalic = 0;

function updateText(e) {
    // UV
    const uvX = Math.max(Math.min(e.clientX / window.innerWidth, 1), 0);
    const uvY = Math.max(Math.min(e.clientY / window.innerHeight, 1), 0);

    // расчет
    const weight = Math.round(uvX * (maxWeight - minWeight) + minWeight);
    const width = Math.round(uvX * (maxWidth - minWidth) + minWidth);
    const italic = Math.round(uvY * (maxItalic - minItalic) + minItalic);

    // Применяем стили
    const fontVariationSettings = `"wght" ${weight}, "wdth" ${width}, "slnt" ${italic}`;
    //console.log(fontVariationSettings);
    // console.log({ x: e.clientX, y: e.clientY, w: window.innerWidth, h: window.innerHeight });
    myTextElement.style.fontVariationSettings = fontVariationSettings;
}

window.addEventListener("mousemove", e => {
    // Для оптимизации - откладываем отрисовку до следующего кадра бразуера
    window.requestAnimationFrame(() => {
        updateText(e)
    })
});

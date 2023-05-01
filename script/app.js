const rootStyle = document.documentElement.style;
const ranges = document.querySelectorAll("input[type=range]");
const guessBtn = document.querySelector("#guess");
const resultValuesHtml = document.querySelectorAll(".result-value");

const rgbProperties = ["--r", "--g", "--b"];

var targetColor = randomColor();
var guessingColor = randomColor();

var successRates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var timesGuessed = 0;

updateTargetColorView();
updateGuessingColorView();

ranges.forEach((range, index) => {
    range.value = guessingColor[index];
    rootStyle.setProperty(rgbProperties[index], range.value);
    range.addEventListener("input", () => {
        guessingColor[index] = range.value;
        updateGuessingColorView();
        rootStyle.setProperty(rgbProperties[index], range.value);
    });
});

guessBtn.addEventListener("click", () => {
    successRates[0] = calcSuccess(guessingColor[0], targetColor[0]);
    successRates[1] = calcSuccess(guessingColor[1], targetColor[1]);
    successRates[2] = calcSuccess(guessingColor[2], targetColor[2]);
    successRates[3] = Math.floor(
        (successRates[0] + successRates[1] + successRates[2]) / 3
    );

    timesGuessed += 1;

    successRates[8] += successRates[0];
    successRates[9] += successRates[1];
    successRates[10] += successRates[2];
    successRates[11] += successRates[3];

    successRates[4] = Math.floor(successRates[8] / timesGuessed);
    successRates[5] = Math.floor(successRates[9] / timesGuessed);
    successRates[6] = Math.floor(successRates[10] / timesGuessed);
    successRates[7] = Math.floor(successRates[11] / timesGuessed);

    resultValuesHtml.forEach((resultValueHtml, index) => {
        resultValueHtml.innerHTML = successRates[index];
    });

    targetColor = randomColor();
    updateTargetColorView();
});

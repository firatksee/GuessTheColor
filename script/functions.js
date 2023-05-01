function updateTargetColorView() {
    rootStyle.setProperty(
        "--target-color",
        `rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`
    );
}

function updateGuessingColorView() {
    rootStyle.setProperty(
        "--guessing-color",
        `rgb(${guessingColor[0]}, ${guessingColor[1]}, ${guessingColor[2]})`
    );
}

function randomColor() {
    return [random255(), random255(), random255()];
}

function random255() {
    return Math.floor(Math.random() * 256);
}

function calcSuccess(m, n) {
    return 100 - Math.floor((Math.abs(m - n) * 100) / 255);
}

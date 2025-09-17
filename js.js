var health = document.getElementById("range");
var text = document.getElementById("text");
// var sen = document.getElementById("sen");
function textf() {
    text.innerHTML = health.value;
}

const tab = [38, 22, 17, 12, 7, 4];



let d1 = 38 / 360;
let d2 = 22 / 360;
let d3 = 17 / 360;
let d4 = 12 / 360;
let d5 = 7 / 360;
let d6 = 4 / 360;

// Brak czasu – 38%

// Zbyt dużo obowiązków rodzinnych – 22%

// Brak motywacji – 17%

// Problemy zdrowotne – 12%

// Brak dostępu do siłowni/boisk – 7%

// Inne – 4%
const sen = {
    brakczasu: [
        { p: 38 }
    ],
    zbytduzo: [
        { p: 22 }
    ],
    brakmotywacji: [
        { p: 17 }
    ],
    problemyzdrowotne: [
        { p: 12 }
    ],
    brakdostepu: [
        { p: 7 }
    ],
    inne: [
        { p: 4 }
    ]
}
let wykreskolo = document.getElementById("sen");

let brakczasu = sen.brakczasu[0].money;
let zbytduzo = sen.zbytduzo[0].money;
let brakmotywacji = sen.brakmotywacji[0].money;
let problemyzdrowotne = sen.problemyzdrowotne[0].money;
let brakdostepu = sen.brakdostepu[0].money;
let inne = sen.inne[0].money;

let sum = brakczasu + zbytduzo + brakmotywacji + problemyzdrowotne + brakdostepu + inne;
let procentowanie = 360 / sum;

let rDeg = brakczasu * procentowanie;
let wDeg = zbytduzo * procentowanie + rDeg;
let lDeg = brakmotywacji * procentowanie + wDeg;
let bDeg = problemyzdrowotne * procentowanie + lDeg;
let aDeg = brakdostepu * procentowanie + bDeg;
let cDeg = inne * procentowanie + aDeg;

wykreskolo.style.backgroundImage = `conic-gradient(
    red 0deg ${rDeg}deg, 
    yellow ${rDeg}deg ${wDeg}deg, 
    green ${wDeg}deg ${lDeg}deg, 
    blue ${lDeg}deg ${bDeg}deg,
    pink ${aDeg}deg ${bDeg}deg,
    violet${cDeg}deg ${aDeg}
)`;
textf();
// let userData = [];


// const weightInput = document.getElementById("weightInput");
// const printWeight = document.getElementById("weight");
// const weightButton = document.getElementById("WeightButton");

// const weightValue2 = weightInput.value;
// const weightValue3= parseFloat(weightValue2);



// weightButton.onclick = function(){
// const weightValue = weightInput.value;

// printWeight.innerHTML = weightValue + "kg";
// userData.push(weightValue);
// }


// const heightInput = document.getElementById("heightInput");
// const printHeight = document.getElementById("height");
// const heightButton = document.getElementById("heightButton");

// const heightValue2 = heightInput.value;
// const heightValue3= parseFloat(heightValue2);

// heightButton.onclick = function(){



// const  height = parseFloat(heightInput);

//   const heightValue = heightInput.value; 
//   printHeight.innerHTML = heightValue + "m";
//   userData.push(heightValue);

//    const BMI = weightValue3 / heightValue3 ** 2;
//    const bmiPrint = document.getElementById("bmiPrint");
//    bmiPrint.innerHTML = BMI;
// }

const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');
    const weightDisplay = document.getElementById('weightDisplay');
    const heightDisplay = document.getElementById('heightDisplay');
    const bmiResult = document.getElementById('bmiResult');

    function calculateBMI() {
      // Zamień przecinki na kropki (jeśli wpisano "1,74")
      const weight = parseFloat(weightInput.value.replace(',', '.'));
      const height = parseFloat(heightInput.value.replace(',', '.'));

      // Wyświetl aktualne wartości pod inputami
      if (!isNaN(weight)) {
        weightDisplay.textContent = `${weight} kg`;
      } else {  
        weightDisplay.textContent = "–";
      }

      if (!isNaN(height)) {
        heightDisplay.textContent = `${height} m`;
      } else {
        heightDisplay.textContent = "–";
      }

      // Oblicz BMI tylko jeśli dane są poprawne
      if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        bmiResult.textContent = bmi.toFixed(2);
      } else {
        bmiResult.textContent = "NaN";
      }
    }

    // Obliczaj BMI i aktualizuj dane przy każdej zmianie
    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);
 




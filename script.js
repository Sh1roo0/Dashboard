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
        weightDisplay.textContent = "0 kg";
      }

      if (!isNaN(height)) {
        heightDisplay.textContent = `${height} m`;
      } else {
        heightDisplay.textContent = "0 m";
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
 
     


    const piesubmit = document.getElementById("pie-submit").onclick = function(){
      
    Pievalue1 = parseInt(document.getElementById("Pie-value1").value);
     Pievalue2 = parseInt(document.getElementById("Pie-value2").value);
     Pievalue3 = parseInt(document.getElementById("Pie-value3").value);
     Pievalue4 = parseInt(document.getElementById("Pie-value4").value);

      
    // valuep1 = parseFloat(Pievalue1.value);
    // valuep2 = parseFloat(Pievalue2.value);
    // valuep3 = parseFloat(Pievalue3.value);
    // valuep4 = parseFloat(Pievalue4.value);

     console.log(Pievalue1,Pievalue2,Pievalue3,Pievalue4);
    pieChart = document.getElementById("pieChart").style.backgroundImage = `conic-gradient(
    #a0e870  90%,
    #459818 0  30%,
    #2a4e19 0 68%,
    #e1f8cf 0 
    );`
    }

    

    




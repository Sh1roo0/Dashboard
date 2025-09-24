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

      const weight = parseFloat(weightInput.value.replace(',', '.'));
      const height = parseFloat(heightInput.value.replace(',', '.'));


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


     const validInput = !isNaN(weight) && !isNaN(height) && height > 0;

      bmiResult.textContent = validInput
        ? (weight / (height ** 2)).toFixed(2)
        : "NaN";
    }

 
    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);
 
     


    const piesubmit = document.getElementById("pie-submit").onclick = function(){
      
    Pievalue1 = document.getElementById("Pie-value1").value;
     Pievalue2 = document.getElementById("Pie-value2").value;
     Pievalue3 = document.getElementById("Pie-value3").value;
     Pievalue4 = document.getElementById("Pie-value4").value;

     PieTab = [
      {
        Pievalue1
      },
      {
        Pievalue2
      },
      {
        Pievalue3
      },
      {
        Pievalue4
      }
     ];

     console.log(PieTab[0]);
      
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

    const line1 = document.getElementById("line1")
    line1.onclick = function(){
      line1.style.backgroundColor = "#7dd942";
    }
    const line2 = document.getElementById("line2")
    line2.onclick = function(){
      line2.style.backgroundColor = "#5dbf23";
    }
    const line3 = document.getElementById("line3")
    line3.onclick = function(){
      line3.style.backgroundColor = "#459818";
    }
    const line4 = document.getElementById("line4")
    line4.onclick = function(){
      line4.style.backgroundColor = "#367417";
      
    }
    
    const line5 = document.getElementById("line5")
    line5.onclick = function(){
      line5.style.backgroundColor = "#2e5c18";
    }


    const barChart = [
      {
        name:'Bar1' ,value: 130
      },
      {
         name:'Bar2' ,value: 180,
      },
      {
        name:'Bar3' ,value: 70,
      },
      {
         name:'Bar4' ,value: 250,
      },
      {
        name:'Bar5' ,value: 190,
      }
      
    ];


     const bar1 = document.getElementById("bar1");
    bar1.style.height = barChart[0].value + "px";


    const bar2 = document.getElementById("bar2");
    bar2.style.height = barChart[1].value + "px";

   const bar3 = document.getElementById("bar3");
    bar3.style.height = barChart[2].value + "px";

    const bar4 = document.getElementById("bar4");
    bar4.style.height = barChart[3].value + "px";

    const bar5 = document.getElementById("bar5");
    bar5.style.height = barChart[4].value + "px";


    const PieDonut = [
     {
        name:'pie1' ,value: 130
      },
      {
         name:'pie2' ,value: 180,
      },
      {
        name:'pie3' ,value: 70,
      },
      {
         name:'pie4' ,value: 250,
      }
    
    ];

    const piedonut = document.getElementById("pieChart");

    const pieSubmit = document.getElementById("pie-submi");

    pieSubmit.onclick = function(){
       piedonut.style.backgroundImage = `conic-gradient( #a0e870  ${PieTab[0]}%,#459818 0 ${PieDonut[1].value} , #2a4e19 0 ${PieDonut[2].value}, #e1f8cf 0  );`

    }

   

    


    

    




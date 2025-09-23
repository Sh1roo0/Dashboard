
// const tablicaBMI = 0;
 const WeightButton = document.getElementById("WeightButton");

// WeightButton.onclick = function(){
    
    
//     const wagaUser = document.getElementById("weightInput");
//     const wagaPush = document.getElementById("weight");
    

//     // wagaUser.addEventListener("keypress", function(e){
//     //     if (!/[0-9]/.test(e.key)){
//     //         e.preventDefault();
//     //     }
//     // });

//         const wagaValue = wagaUser.value;
//         wagaPush.innerHTML  = wagaValue + "kg";

//         tablicaBMI = wagaValue;


// }

  const tablica = [];

  WeightButton.onauxclick =  function()  {
    const input = document.getElementById("weightInput").value;

    // Sprawdzamy, czy input nie jest pusty
    if (input.trim() !== "") {
      tablica.push(input); // Dodajemy do tablicy
      document.getElementById("weightInput").value = ""; // Czyścimy input
      aktualizujWynik(); // Aktualizujemy widok
    }
  }

  function aktualizujWynik() {
    document.getElementById("wynik").textContent = tablica.join(", ");  
  }
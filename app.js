"use strict"

const kg = document.getElementById("kg");
const gram = document.getElementById("gram");
const meter = document.getElementById("meter");
const feet = document.getElementById("feet");
const cBtn = document.getElementById("submit");
const wAlert = document.querySelector(".weight-alert");
const hAlert = document.querySelector(".height-alert");
const result = document.querySelector(".result");
const image = document.querySelector(".result .image img");
const r_display = document.querySelector(".result .image h4");
const r_display2 = document.querySelector(".result .image span");
const close = document.querySelector('.result i');
const main = document.querySelector('main');

var form_validation = function () {
      
     let h = false;
     let w = false;
     

     // FOR WEIGHT FIELDS VALIDATION

     if (kg.value.trim() === "" && gram.value.trim() === "") {
          wAlert.innerHTML = "Please give your weight in Kg's or Gram's";
          wAlert.style.display = "block";

     } else if (kg.value.trim() !== "" && gram.value.trim() !== "") {
          wAlert.innerHTML = "Please give your weight in Kg's or Gram's. Just fill one. "
          wAlert.style.display = "block";
     } else {
          wAlert.style.display = "none";
          w = true;
     }

     // FOR HEIGHT FILEDS VALIDATION

     if (meter.value.trim() === "" && feet.value.trim() === "") {
          hAlert.innerHTML = "Please give your height in Meter's or Feet's";
          hAlert.style.display = "block";
     } else if (meter.value.trim() !== "" && feet.value.trim() !== "") {
          hAlert.innerHTML = "Please give your height in Meter's or Feet's. Just fill one. "
          hAlert.style.display = "block";
     } else {
          hAlert.style.display = "none";
          h = true; 
     }

     return [h, w];
}



var calculate = () => {
     let func = form_validation();

     if(func[0] && func[1]){
        let value_in_kg = Number((kg.value.trim()) || (gram.value.trim() / 1000));
        let value_in_meter = Number((meter.value.trim()) || (feet.value.trim() * 0.3048));
        let final_result = value_in_kg / Math.pow(value_in_meter, 2);
       
        main.style.pointerEvents = 'none';
        main.style.opacity = '0.3';

        result.classList.remove('show-hide');
        r_display2.innerHTML = `Your BMI is: ${final_result.toFixed(1)}`;
          
             switch(true){
                  case final_result < 18.5:
                       r_display.innerHTML = "You are skinny";
                       image.src = "./images/man1.png";
                  break;

                  case final_result >= 18.5 && final_result < 25:
                    r_display.innerHTML = "Perfect body";
                    image.src = "./images/man2.png";
                  break;

                  case final_result >= 25 && final_result < 30:
                    r_display.innerHTML = "You are fat";
                    image.src = "./images/man3.png";
                  break;

                  case final_result >= 30:
                    r_display.innerHTML = "To much fat";
                    image.src = "./images/man4.png";
                  break;
             }
        }

}


// Make the result card hide in click of the close button
close.onclick = function(e){
     result.classList.add('show-hide');
     main.style.pointerEvents = 'auto';
            main.style.opacity = '1';
 }
   



cBtn.addEventListener("click", calculate);


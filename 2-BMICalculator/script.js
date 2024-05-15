const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height == '' || height <= 0 || isNaN(height) ){
        result.innerHTML = `please give a valid height. ${height} is not a valid input`
    } 
    else if (weight == '' || weight <= 0 || isNaN(weight) ){
        result.innerHTML = `please give a valid weight. ${weight} is not a valid input`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let bmiCondition="";
        if(bmi<18.6){
            bmiCondition="Under weight";
        }
        else if(bmi>=18.8 && bmi<=24.9){
            bmiCondition="normal";
        }
        else {
            bmiCondition="over weight";
        }
        result.innerHTML = `<spanp>BMI: ${bmi}, you are ${bmiCondition}</span>`;
    }

})
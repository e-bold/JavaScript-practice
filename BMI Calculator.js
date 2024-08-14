//BMI calculator = weight(kg) / height m squared (m2)

function bmiCalc (weight, height) {
    let bmi = Math.round(weight/(Math.pow(height, 2)));

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi > 24.9) {
        return "Your BMI is " + bmi + ", so you are overweight."
    }
    else {
        return "Your BMI is " + bmi + ", so you have a normal weight."
    }
};


bmiCalc(90, 1.9);
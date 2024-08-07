//BMI calculator = weight(kg) / height m squared (m2)

function bmiCalc (w, h) {

    console.log(Math.round(w/(Math.pow(h, 2))));
};


bmiCalc(90, 1.9);
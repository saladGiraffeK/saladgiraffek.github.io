document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        calculateMultiplication();
    });

    function calculateMultiplication() {
        var input1 = parseFloat(document.getElementById("inputNumber1").value);
        var input2 = parseFloat(document.getElementById("inputNumber2").value);
        var input3 = parseFloat(document.getElementById("inputNumber3").value);

        var result = input1 * input2 * input3;
        document.getElementById("result").innerHTML = "Multiplication result: " + result;
    }
});

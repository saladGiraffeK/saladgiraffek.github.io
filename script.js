document.addEventListener("DOMContentLoaded", function() {
    var gridContainer = document.getElementById("gridContainer");
    var calculateButton = document.getElementById("calculateButton");

    // Create 6x6 grid of textboxes
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            var input = document.createElement("input");
            input.type = "number";
            input.id = "input_" + i + "_" + j;
            gridContainer.appendChild(input);
        }
        gridContainer.appendChild(document.createElement("br")); // Add line break after each row
    }

    calculateButton.addEventListener("click", function() {
        calculate();
    });

    function calculate() {
        var total = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                var inputValue = parseInt(document.getElementById("input_" + i + "_" + j).value);
                total += inputValue;
            }
        }
        document.getElementById("result").innerHTML = "Total: " + total;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        calculateMultiplication();
    });

    function calculateMultiplication() {
        var product = 1;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 5; j++) {
                var inputValue = parseFloat(document.getElementById("input_" + i + "_" + j).value);
                product *= inputValue;
            }
        }
        document.getElementById("result").innerHTML = "Multiplication result: " + product;
    }

    // テキストボックスを縦10横5の表に追加する
    var gridContainer = document.getElementById("gridContainer");
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.type = "number";
            input.id = "input_" + i + "_" + j;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
});

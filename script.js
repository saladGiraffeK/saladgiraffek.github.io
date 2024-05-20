document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        calculateAddition();
    });

    function calculateAddition() {
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 5; j++) {
                var inputValue = parseFloat(document.getElementById("input_" + i + "_" + j).value) || 0;
                sum += inputValue;
            }
        }
        document.getElementById("result").innerHTML = "Addition result: " + sum;
    }

    // テキストボックスを縦10横5の表に追加する
    var gridContainer = document.getElementById("gridContainer");
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            var cell = document.createElement("td");
            if (j > 0) {
                var select = document.createElement("select");
                for (var k = 1; k <= 20; k++) { // 1から20の値を追加する
                    var option = document.createElement("option");
                    option.text = k * 1000;
                    option.value = k * 1000;
                    select.appendChild(option);
                }
                select.id = "input_" + i + "_" + j;
                cell.appendChild(select);
            } else {
                var input = document.createElement("input");
                input.type = "number";
                input.id = "input_" + i + "_" + j;
                input.setAttribute("min", "0"); // 最小値を0に設定
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
});

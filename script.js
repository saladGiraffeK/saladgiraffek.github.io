document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        calculateProbability();
    });

    function calculateProbability() {
        var inputValue = document.getElementById("inputNumber").value;
        // ここに計算処理を追加
        var result = "計算結果: " + inputValue; // 仮の結果
        document.getElementById("result").innerHTML = result;
    }
});

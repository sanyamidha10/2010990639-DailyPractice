function myFun() {
    let num = document.getElementById("input_number").value;

    if (num == "" || num == null || num == " ") {
        alert("Enter any Value");
    } else {
        num = Number(num);
        let digitCounting = num.toString().length;
        if (!isNaN(num) && digitCounting == 5) {
            var digits = num.toString().split("");
            var realDigits = digits.map(Number);
            let sum = 0;
            for (let i = 0; i < realDigits.length; i++) {
                sum += realDigits[i];
            }
            document.getElementById("square").style.width = sum + "px";
            document.getElementById("square").style.height = sum + "px";
            document.getElementById("square").style.backgroundColor = "black";
            document.getElementById("square").style.borderRadius = sum / 5 + "px";

        } else {
            alert("Enter a 5-digit Number");
        }
    }


}
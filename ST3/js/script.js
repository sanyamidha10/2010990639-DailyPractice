function earth() {
    var weight = document.getElementById("name").value;

    var earth = weight * 1;
    document.getElementById("uc").innerHTML = "Your weight On Earth is: " + earth + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function jupiter() {
    var weight = document.getElementById("name").value;

    var jupiter = weight * 2.34;
    document.getElementById("la").innerHTML = "Your weight On Jupiter is: " + jupiter + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function mars() {
    var weight = document.getElementById("name").value;

    var mars = weight * 0.38;
    document.getElementById("ud").innerHTML = "Your weight On Mars  is: " + mars + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function mercury() {
    var weight = document.getElementById("name").value;

    var mercury = weight * 0.37;
    document.getElementById("ua").innerHTML = "Your weight On Mercury is: " + mercury + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function neptune() {
    var weight = document.getElementById("name").value;

    var neptune = weight * 1.19;
    document.getElementById("ld").innerHTML = "Your weight On Neptune is: " + neptune + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function saturn() {
    var weight = document.getElementById("name").value;

    var saturn = weight * 1.06;
    document.getElementById("lb").innerHTML = "Your weight On Saturn is: " + saturn + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function uranus() {
    var weight = document.getElementById("name").value;

    var uranus = weight * 0.92;
    document.getElementById("lc").innerHTML = "Your weight On Uranus is: " + uranus + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}

function venus() {
    var weight = document.getElementById("name").value;

    var venus = weight * 0.91;
    document.getElementById("ub").innerHTML = "Your weight On Venus is: " + venus + " Kg";
    let user = document.querySelector('.span');
    user.classList.add("show");
}
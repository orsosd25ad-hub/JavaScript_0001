//alert("Hello World!");

function Gomb() {
    document.getElementById("szoveg").innerHTML = "Hi!"
}

function osszead() {
    var szam1 = parseInt(document.getElementById("szam1").value);
    var szam2 = parseFloat(document.getElementById("szam2").value);
    var eredmeny = szam1 + szam2;
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
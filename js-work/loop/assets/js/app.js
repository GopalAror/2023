let count = "";

for (let x = 0;  x < 10; x++) {
    console.log(x * 2+2)
    count += + x * 2+2   + "<br>";
}

document.getElementById("table").innerHTML = count;

document.querySelector("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Please insert name/names");
        return;
    }

    var lovePercentage = Math.random() * 100;
    lovePercentage = Math.floor(lovePercentage) + 1;

    document.querySelector("h1").innerHTML= "The Loverate between " + name11 + " and " + name22 + " is " + lovePercentage + "%!";
    console.log("The Loverate between " + name11 + " and " + name22 + " is " + lovePercentage + "%!");

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
});

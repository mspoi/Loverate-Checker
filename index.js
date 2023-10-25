document.querySelector("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    var firstChar1 = name1.slice(0,1);
    var firstChar2 = name2.slice(0,1);
    var upperCaseFirstChar1 = firstChar1.toUpperCase();
    var upperCaseFirstChar2 = firstChar2.toUpperCase();
    var re

    if (name1 === "" || name2 === "") {
        alert("Please insert name/names");
        return;
    }

    var lovePercentage = Math.random() * 100;
    lovePercentage = Math.floor(lovePercentage) + 1;

    document.querySelector("h1").innerHTML= "The Loverate between " + name1 + " and " + name2 + " is " + lovePercentage + "%!";
    console.log("The Loverate between " + name1 + " and " + name2 + " is " + lovePercentage + "%!");

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
});

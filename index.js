document.querySelector("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    var firstChar1 = name1.slice(0,1);
    var firstChar2 = name2.slice(0,1);
    var upperCaseFirstChar1 = firstChar1.toUpperCase();
    var upperCaseFirstChar2 = firstChar2.toUpperCase();
    var restOfName1 = name.slice(1,name1.length);
    var restOfName2 = name.slice(1,name2.length);
    restOfName1 = restOfName1.toLowerCase();
    restOfName2 = restOfName2.toLowerCase();
    var name11 = upperCaseFirstChar1 + restOfName1;
    var name22 = upperCaseFirstChar2 + restOfName2;

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

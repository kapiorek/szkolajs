function funkcja() {
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    gender = document.getElementById("gender").value;
    dob = document.getElementById("dob").value;
    children = document.getElementById("children").value;
    shoe_size = document.getElementById("shoe_size").value;
    color = document.getElementById("color").value;
    level = document.getElementById("level").value;
    var error;
    error = { name: false, surname: false, shoe_size: false, children: false, dob: false, gender: false, color: false, level: false }

    rexNumber = /^[0-9]+$/.test(name);
    rexTekst = /^[a-zA-Z]+$/.test(name);
    rexTekstNumber = /^[a-z0-9]+$/.test(name);
    rexPoziom = /^[0-9]+$/.test(level);
    rexDob = /^\d{4}-\d{2}-\d{2}$/.test(dob); 
    rexShoeSize = /^[0-9]+$/.test(shoe_size);
    rexChildren = /^[0-9]+$/.test(children);

    if (name.length <= 3) { error["name"] = true }
    if (surname.length <= 3) { error["surname"] = true }
    if (!rexShoeSize) { error["shoe_size"] = true }
    if (!rexChildren) { error["children"] = true }
    if (!rexDob) { error["dob"] = true }
    if (gender !== "Male" && gender !== "Female") { error["gender"] = true }
    if (!rexTekst) { error["color"] = true }
    if (rexPoziom > 50) { error["level"] = true } 

    console.log("rexPoziom" + rexPoziom);
    console.log("rexNumber" + rexNumber);
    console.log("rexTekst" + rexTekst);
    console.log("rexTekstNumber" + rexTekstNumber);
    console.log("rexDob" + rexDob);
    console.log("rexShoeSize" + rexShoeSize);
    console.log("rexChildren" + rexChildren);
    console.log("error", error);
}

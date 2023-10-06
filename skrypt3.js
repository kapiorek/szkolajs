
let f = document.getElementById("form");
let w = document.getElementById("wypluwacz");


let osoba = {
    imie: "marcin",
    nazwisko: "anula",
    wiek: 35,
    zestawDane: function() {
        return "imię: " + this.imie + "<br> nazwisko: " + this.nazwisko;
    },
};

f.name.disabled = false;


function Valid(v) {
    if (v.value.length > 3) {
        v.style.color = "#fff";
        v.style.backgroundColor = "blue";
    } else {
        v.style.color = "#fff";
        v.style.backgroundColor = "red";
    }
}


f.name.addEventListener("input", function(e) {
    Valid(this);
});
f.surname.addEventListener("input", function(e) {
    Valid(this);
});
f.dob.addEventListener("input", function(e) {
    Valid(this);
});
f.gender.addEventListener("input", function(e) {
    Valid(this);
});
f.children.addEventListener("input", function(e) {
    Valid(this);
});
f.shoe_size.addEventListener("input", function(e) {
    Valid(this);
});
f.level.addEventListener("input", function(e) {
    Valid(this);
});

w.innerHTML = osoba.zestawDane();


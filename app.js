var boton = document.querySelector("button");
var body = document.querySelector("body");
var nombre = document.querySelector("#name");
var colors = [
    "Red", "Green", "Yellow", "Black", "Orange", "Blue", "Purple", "Brown", "Pink", "Grey", "Lime", "Aqua", "Navy",
    "Coral", "Silver", "Violet", "Maroon", "Orchid", "Chocolate", "Turquoise", "Aquamarine",
    "Skyblue", "Fuchsia", "Olive", "Teal", "Hotpink", "Bisque", "IndianRed", "Azure", "Cadetblue", "Chartreuse",
    "Cyan", "Darkgoldenrod", "Aliceblue", "Magenta", "Antiquewhite", "Beige", "Burlywood", "Crimson",
    "DarkSeaGreen", "DarksLateBlue", "Gold", "GreenYellow", "Indigo", "Khaki", "Olivedrab", "OrangeRed", "Peru",
    "Plum", "Rosybrown", "Sienna", "Tan", "Thistle", "Tomato"
];
boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", pickRandom);
function pickRandom() {
    var randomcolor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomcolor];
    if (nombre) {
        nombre.textContent = colors[randomcolor];
    }
}

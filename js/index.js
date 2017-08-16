var romance = [
    "I love your eyes.",
    "Your hair looks stunning under the moonlight.",
    "I wish I could kiss those lips.",
    "You and your bewitching smile."
];

var friend = [
    "You look fantastic. Have you been going to the gym?",
    "You know how to have good fun.",
    "I enjoyed the evening with you."
];

var food = [
    "This meal is delicious.",
    "I enjoyed your food very much.",
    "Ambrosial"
];

var house = [
    "You have a lovely house.",
    "I love your living room layout.",
    "You have a good colour taste."
];

fonts = [
    "Just Another Hand",
    "Gloria Hallelujah",
    "Caveat Brush",
    "Cookie",
    "Shadows Into Light Two",
    "Caveat",
    "Nothing You Could Do",
    "Rancho",
    "Reenie Beanie",
    "Mr Dafoe",
    "Schoolbell",
    "Annie Use Your Telescope",
    "Sue Ellen Francisco",
    "La Belle Aurore",
    "Loved by the King",
    "Over the Rainbow",
    "Just Me Again Down Here",
    "Swanky and Moo Moo",
    "Dr Sugiyama",
    "Mr Bedfort"
];

var red = "#F44336";
var green = "#8BC34A";
var blue = "#03A9F4";
var orange = "#FF9800";
var purple = "#7E57C2";

var timeoutTime = 500;

function triggerFadeAnim() {
    var element = document.getElementById("compliment");
    element.classList.remove("fade");
    element.offsetWidth;
    element.classList.add("fade");
}

function getRandomFromArray(array) {
    document.getElementById("compliment").innerHTML =
        array[Math.floor(Math.random() * array.length)];
    document.getElementById("compliment").style.fontFamily =
        fonts[Math.floor(Math.random() * fonts.length)] + ", cursive";
}

function triggerButtonClick(array, col) {
    triggerFadeAnim();
    document.getElementsByTagName("BODY")[0].style.background = col;
    setTimeout(
        function () {
            getRandomFromArray(array);
        }.bind(array),
        timeoutTime
    );
}

document.getElementById("romance-button").addEventListener("click", function () {
    triggerButtonClick(romance, red);
});

document.getElementById("friend-button").addEventListener("click", function () {
    triggerButtonClick(friend, purple);
});

document.getElementById("food-button").addEventListener("click", function () {
    triggerButtonClick(food, green);
});

document.getElementById("house-button").addEventListener("click", function () {
    triggerButtonClick(house, blue);
});

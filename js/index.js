let romance = [
	"I love your eyes.",
	"Your hair looks stunning under the moonlight.",
	"I wish I could kiss those lips.",
	"You and your bewitching smile.",
	"You have the best laugh.",
	"On a scale from 1 to 10, you're an 11.",
	"You're even more beautiful on the inside than you are on the outside.",
	"You’re irresistible when you blush.",
	"Somehow you make time stop and fly at the same time.",
	"Giving you my heart is the best thing I ever could have done.",
	"Whenever you hug me, I never want to let go.",
	"Saying goodnight to you is so hard for me to do.",
	"You make me want to be the best I can be.",
	"Our story is one that I would love to tell our future children and grandchildren one day.",
	"You always know how to make me smile.",
	"You could never bore me.",
	"My heart belongs to you and only you.",
	"Every little thing you do makes me fall deeper in love with you.",
	"While we are not perfect people, I do think that we are perfect for each other.",
	"When god made you, he was thinking of the perfect companion for me.",
	"I thank god that we found our way to each other.",
	"You got away with the perfect crime when you stole my heart.",
	"Out of all the love stories out there, I like ours the most.",
	"When I look at you, I know that everything will be okay.",
	"You remind me that there is a lot of good in this world.",
	"You are the only person that I want to go on adventures with.",
	"You are the peanut butter to my jelly.",
	"We couldn’t be a better pairing if we were milk and cookies.",
	"Your eyes sparkle like the brightest stars.",
	"I love it when you say my name.",
	"You are the cutest thing I’ve ever seen.",
	"Your happiness is my happiness.",
	"What is better than being together with your best friend for the rest of your life?",
	"I think we make a really cute couple.",
	"Now that I have found you, I never want to lose you.",
	"You have shown me what true love feels like.",
	"We are meant to be together.",
	""
];

let friend = [
	"You look fantastic. Have you been going to the gym?",
	"You know how to have good fun.",
	"I enjoyed the evening with you.",
	"I like your style.",
	"I appreciate you.",
	"You are the most perfect you there is.",
	"You're an awesome friend.",
	"You light up the room.",
	"You deserve a hug right now.",
	"You should be proud of yourself.",
	"You have a great sense of humor.",
	"Is that your picture next to “charming” in the dictionary?",
	"Aside from food, you're my favorite.",
	"You're like sunshine on a rainy day.",
	"You bring out the best in other people.",
	"How is it that you always look great, even in sweatpants?",
	"You smell really good.",
	"Being around you makes everything better!",
	"When you're not afraid to be yourself is when you're most incredible.",
	"Colors seem brighter when you're around.",
	"You're wonderful.",
	"You're better than a triple-scoop ice cream cone. With sprinkles.",
	"You're one of a kind!",
	"You’re inspiring.",
	"You’re a candle in the darkness.",
	"You’re a great example to others.",
	"You could survive a Zombie apocalypse.",
	"The people you love are lucky to have you in their lives.",
	"Actions speak louder than words, and yours tell an incredible story.",
	"There’s ordinary, and then there’s you.",
	"You’re someone’s reason to smile.",
	"You’re really something special.",
	"You’re a gift to those around you."
];

let food = [
	"This meal is delicious.",
	"I enjoyed your food very much.",
	"Ambrosial",
	"That’s the best meal I’ve ever had.",
	"Well, it’s gone, isn’t it?",
	"Do you eat like this all the time?",
	"I need the recipe for this...",
	"That is the best thing that I have ever put it my mouth!",
	"Just like my mamma's",
	"You should open up a restaurant",
	"When are you going to open a café?",
	"This is one God-worthy meal right here",
	"You can make something good out of anything!",
	"For some reason, I am not surprised by how delicious this is",
	"Wow...",
	"Sublime",
	"Yummy",
	"A feast",
	"How delectable",
	"I could eat this forever"
];

let house = [
	"You have a lovely house.",
	"I love your living room layout.",
	"You have a good colour taste.",
	"It's so cozy and it's so you. I wanna live here."
];

let fonts = [
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

let bf = 10;
let mf = 10;
let sf = 5;

let fontSizes = [sf, bf, sf, bf, bf, bf, bf, bf, bf,
	mf, mf, mf, mf, mf, mf, mf, mf, mf, bf, bf, bf];

let red = "#F44336";
let green = "#8BC34A";
let blue = "#03A9F4";
//let orange = "#FF9800";
let purple = "#7E57C2";

let timeoutTime = 500;

function triggerFadeAnim() {
	let element = document.getElementById("compliment");
	element.classList.remove("fade");
	element.offsetWidth;
	element.classList.add("fade");
}

function getRandomFromArray(array) {
	document.getElementById("compliment").innerHTML =
		array[Math.floor(Math.random() * array.length)];
	let fontIndex = Math.floor(Math.random() * fonts.length);
	document.getElementById("compliment").style.fontFamily =
		fonts[fontIndex] + ", cursive";
	document.getElementById("compliment").style.fontSize = fontSizes[fontIndex] + "vh";
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

const quotesArray = [
    {
        quote: "You must be the change you wish to see in the world.",
        author: "- Mahatma Gandhi"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "- Mother Teresa"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "- Franklin D. Roosevelt"
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "- Martin Luther King Jr."
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "- Eleanor Roosevelt"
    },
    {
        quote: "Well done is better than well said.",
        author: "- Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "- Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "- Aristotle"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "- Ralph Waldo Emerson"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "- Oscar Wilde"
    }
];

let textSpan = document.getElementById("text");
let authorSpan = document.getElementById("author");
let displayingQuote = false;
let speed = 40;

function removeQuote() {
    textSpan.innerHTML = "";
    authorSpan.innerHTML = "";
}

function randomQuote() {
    const newQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    return newQuote;
}

// This function types the entire quote including the author then sets displayingQuote to false
function typeQuote(currentQuote, i) {
    setTimeout(function() {
        if (authorSpan.innerHTML == currentQuote.author) {
            displayingQuote = false;
        } else if (textSpan.innerHTML != currentQuote.quote) {
            textSpan.innerHTML += currentQuote.quote.charAt(i);
        }
        i -= currentQuote.quote.length;
        authorSpan.innerHTML += currentQuote.author.charAt(i);
    }, speed * i)
}

function getNewQuote(randomQuote) {
    if (displayingQuote == true) return
    displayingQuote = true;

    removeQuote();
    for (let i = 0; i <= randomQuote.quote.length + randomQuote.author.length; i++) {
        typeQuote(randomQuote, i);
    }
}

$(document).ready(function() {
    getNewQuote(randomQuote());

    $("#new-quote").click(function() {
        getNewQuote(randomQuote());
    });
});
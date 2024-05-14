// Variable Declaration //

const textSpan = document.getElementById("text");
const authorSpan = document.getElementById("author");
let displayingQuote = false;
let speed = 40;

// Function Declaration //

async function fetchRandomQuote() {
    if (displayingQuote === true) return
    displayingQuote = true;

    try {
        const res = await fetch("https://api.quotable.io/quotes/random");
        const data = await res.json();
        data[0].author = "- " + data[0].author;
        displayingQuote = false;
        return data[0];
    } catch (error) {
        alert("Unable to get random quote");
        displayingQuote = false;
    }
}

function removeOldQuote(placeholder = "") {
    textSpan.innerHTML = placeholder;
    authorSpan.innerHTML = "";
}

// This function displays the entire quote including the author then sets displayingQuote to false
function displayQuote(currentQuote, i) {
    setTimeout(function() {
        if (authorSpan.innerHTML == currentQuote.author) {
            displayingQuote = false;
        } else if (textSpan.innerHTML != currentQuote.content) {
            textSpan.innerHTML += currentQuote.content.charAt(i);
        }
        i -= currentQuote.content.length;
        authorSpan.innerHTML += currentQuote.author.charAt(i);
    }, speed * i)
}

function getNewQuote(randomQuote) {
    if (displayingQuote === true) return
    displayingQuote = true;

    let currentQuote = randomQuote.content;
    let currentAuthor = randomQuote.author;

    removeOldQuote();
    tweetQuote(currentQuote, currentAuthor)
    for (let i = 0; i <= currentQuote.length + currentAuthor.length; i++) {
        displayQuote(randomQuote, i);
    }
}

function tweetQuote(quote, author) {
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent('"' + quote + '" ' + author)
    );
}

// Event Handling //

$(document).ready(function() {
    removeOldQuote("...");
    fetchRandomQuote().then((randomQuote) => getNewQuote(randomQuote));

    $("#new-quote").click(function() {
        if (displayingQuote === true) return

        removeOldQuote("...");
        fetchRandomQuote().then((randomQuote) => getNewQuote(randomQuote));
    });

    $(".credits").click(function() {
        window.open("https://github.com/Speakiez");
    });

    $(".secret").click(function() {
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    });
});
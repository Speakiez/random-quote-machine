const quotes = [
    {
        text: "You must be the change you wish to see in the world.",
        author: "- Mahatma Gandhi"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "- Mother Teresa"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "- Franklin D. Roosevelt"
    },
    {
        text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "- Martin Luther King Jr."
    },
    {
        text: "Do one thing every day that scares you.",
        author: "- Eleanor Roosevelt"
    },
    {
        text: "Well done is better than well said.",
        author: "- Benjamin Franklin"
    },
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "- Helen Keller"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "- Aristotle"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "- Ralph Waldo Emerson"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "- Oscar Wilde"
    }
];

const getRandomQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return newQuote;
}

let running = false;

const displayQuote = (quote) => {
    let i = 0;
    let j = 0;
    let speed = 40;
    running = true;

    function typeText() {
        setTimeout(function() {
            document.getElementById("text").innerHTML += quote.text.charAt(i);
            i++;
            if (i < quote.text.length) {
                typeText();
            } else {
                typeAuthor();
            }
        }, speed)
    }

    function typeAuthor() {
        setTimeout(function() {
            document.getElementById("author").innerHTML += quote.author.charAt(j);
            j++;
            if (j < quote.author.length) {
                typeAuthor();
            } else {
                running = false;
            }
        }, speed + 10)
    }

    typeText();
}

window.onload = () => {
    displayQuote(getRandomQuote());
}

document.querySelector(".new-quote").addEventListener("click", function() {
    if (running == false) {
        document.getElementById("text").innerHTML = "";
        document.getElementById("author").innerHTML = "";
        displayQuote(getRandomQuote());
    }
});
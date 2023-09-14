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

let running = false;

const getRandomQuote = () => {
    const newQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    return newQuote;
}

const displayQuote = (currentQuote) => {
    if (running == true) return

    let i = 0;
    let j = 0;
    let speed = 40;
    running = true;

    document.getElementById("text").innerHTML = "";
    document.getElementById("author").innerHTML = "";

    function typeText() {
        setTimeout(function() {
            document.getElementById("text").innerHTML += currentQuote.quote.charAt(i);
            i++;
            if (i < currentQuote.quote.length) {
                typeText();
            } else {
                typeAuthor();
            }
        }, speed)
    }

    function typeAuthor() {
        setTimeout(function() {
            document.getElementById("author").innerHTML += currentQuote.author.charAt(j);
            j++;
            if (j < currentQuote.author.length) {
                typeAuthor();
            } else {
                running = false;
            }
        }, speed + 10)
    }

    typeText();
}

$(document).ready(function() {
    displayQuote(getRandomQuote());

    $("#new-quote").click(function() {
        displayQuote(getRandomQuote());
    });
});
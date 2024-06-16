const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  -  " + author.innerHTML, "Tweet Window", "with=600,height=300");
}

/*copy quote*/
function copyQuote() {
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");

    var quoteText = quoteElement.innerText || quoteElement.textContent;
    var authorText = authorElement.innerText || authorElement.textContent;

    var quoteWithAuthor = '"' + quoteText + '" - ' + authorText;

    navigator.clipboard.writeText(quoteWithAuthor)
        .then(function () {
            alert("The quote by " + authorText + " has been copied!");
        })
        .catch(function (error) {
            console.error('Failed to copy quote: ', error);
        });
}


// Function to save the quote to local storage
function saveQuote() {
    var quoteInput = document.getElementById("quoteInput");
    var quote = quoteInput.value;

    if (quote.trim() !== "") {
        var quotes = localStorage.getItem("quotes");
        quotes = quotes ? JSON.parse(quotes) : [];
        quotes.push(quote);
        localStorage.setItem("quotes", JSON.stringify(quotes));
        quoteInput.value = "";
        displayQuotes();
        alert("Quote saved successfully!");
    } else {
        alert("Please enter a quote!");
    }
}


function deleteQuote(index) {
    // Prompt the user for confirmation
    var confirmDelete = confirm("Are you sure you want to delete this quote?");

    if (confirmDelete) {
        // Proceed with the deletion
        var quotes = localStorage.getItem("quotes");
        quotes = quotes ? JSON.parse(quotes) : [];

        if (index >= 0 && index < quotes.length) {
            quotes.splice(index, 1);
            localStorage.setItem("quotes", JSON.stringify(quotes));
            displayQuotes();
            alert("Quote deleted successfully!");
        }
    } else {
        // Do nothing if the user cancels the deletion
        alert("Deletion canceled.");
    }
}

// Function to display the saved quotes
function displayQuotes() {
    var quotes = localStorage.getItem("quotes");
    quotes = quotes ? JSON.parse(quotes) : [];

    var quoteList = document.getElementById("quoteList");
    quoteList.innerHTML = "";

    quotes.forEach(function (quote, index) {
        var li = document.createElement("li");
        li.className = "quote-item";

        var quoteText = document.createElement("span");
        quoteText.className = "quote-text";
        quoteText.textContent = quote;

        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.border = "none";
        deleteButton.style.margin = "10px 20px 10px 550px";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.width = "100px";
        deleteButton.onclick = function () {
            deleteQuote(index);
        };

        li.appendChild(quoteText);
        li.appendChild(deleteButton);
        quoteList.appendChild(li);
    });
}
displayQuotes();



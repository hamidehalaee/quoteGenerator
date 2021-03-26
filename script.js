const quoteContainer = document.getElementById('qoute-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
//GET quotes
let apiQuotes = [];

function NewQuote(){
    //pick one quete from all
    const quote = apiQuotes [Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author){
        authorText.textContent = 'unknown';
    }else{
        authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
}
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        NewQuote();
    }catch(error){
        console.log(error);
    }
}
//twitter
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
//event listeners
newQuotebtn.addEventListener('click',NewQuote);
twitterbtn.addEventListener('click',tweetQuote);
getQuotes();
import React from "react";
import "./styles.css"

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#fff");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = ["#808080", "#A9A9A9", "#696969", "#C0C0C0", "#DCDCDC", "#D3D3D3"];
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5 custom-container">
        <div className="jumbotron" id="quote-box">
          <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body text-center">
              {randomQuote ? (
                <>
                  <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
                  <h5 id="author" className="card-title mb-4">~ {randomQuote.author || "Anonymous"}</h5>
                </>
              ) : (
                <h2>Loading...</h2>
              )}
                  <div className="flex">
                    <div className="child1">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote ? randomQuote.text : "")}`}
                        className="btn btn-primary btn-block"
                        target="_blank"
                        id="tweet-quote"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div className="child2">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        className="btn btn-primary btn-block"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="facebook-quote"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="child3">
                          <button id="new-quote" onClick={getNewQuote} className="btn btn-success btn-block">New Quote</button>
                    </div>
                  </div>
            </div>
          </div>
          <div className="text-center pt-5"><b>By Kalutu Daniel</b></div>
        </div>
      </div>
    </div>
  );
}




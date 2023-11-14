import React from "react";
import "./styles.css"
import SocialMedia from "./Components/SocialMedia";
import Button from "./Components/Button";
import Owner from "./Components/Owner";
import Title from "./Components/Title";

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
            <Title/>
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
                    <SocialMedia quote={randomQuote}/>
                    <Button action={getNewQuote}/>
                  </div>
            </div>
          </div>
          <Owner/>
        </div>
      </div>
    </div>
  );
}




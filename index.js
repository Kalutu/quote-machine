function App(){

    const [quotes, setQuotes]= React.useState([]);
    const [randomQuote, setRandomQuote]= React.useState("");
    const [color, setColor] = React.useState("#fff")

    React.useEffect(()=> {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuotes(data);
            let randIndex = Math.floor(Math.random()* data.length);
            setRandomQuote(data[randIndex]); 
        }
        fetchData();
    },[])

    const getNewQuote = ()=>{
        const colors = ['#808080', '#A9A9A9', '#696969', '#C0C0C0', '#DCDCDC', '#D3D3D3'];
        let randIndex = Math.floor(Math.random()* quotes.length);
        let randColorIndex = Math.floor(Math.random()* colors.length);
            setRandomQuote(quotes[randIndex]); 
            setColor(colors[randColorIndex]);
    }

    return (
        <div  style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote? (
                            <>
                                <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                                <h5 className="card-title">~ {randomQuote.author || "Anonymous"}</h5>
                            </>
                        ):
                        (
                            <h2>Loading</h2>
                        )}

                        <div className="row">
                            <button onClick={getNewQuote} className="btn btn-primary al-3">New Quote</button>
                            <a href="https://twitter.com/" className="btn btn-warning" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.tumblr.com/" className="btn btn-danger" target="_blank"><i className="fa fa-tumblr"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

ReactDOM.render(<App/>,document.getElementById("app"));

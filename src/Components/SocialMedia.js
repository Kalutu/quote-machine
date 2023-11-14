export default function SocialMedia({quote}){
    return(
        <>
            <div className="child1">
                <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote ? quote.text : "")}`}
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
        </>
        
    )
}
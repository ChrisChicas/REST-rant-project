const React = require("react")
const Def = require("../default.jsx")

function Index(data){
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6" key={index}>
                <h2>
                    <a href={`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p>
                    {place.cuisines}
                </p>
                <img className="img-thumbnail" src={place.pic} alt={place.name}/>
                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Index Page!</h1>
                <div className="row">
                    {placesFormatted}
                </div>
                <div>
                    H-Thai-ML Photo by <a href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Liverani</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <div>
                    Coding Cat Cafe Photo by <a href="https://unsplash.com/@herlifeinpixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hannah Wei</a> on <a href="https://unsplash.com/s/photos/cat-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = Index
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
            </main>
        </Def>
    )
}

module.exports = Index
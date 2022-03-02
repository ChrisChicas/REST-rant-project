const React = require("react")
const Def = require("../default.jsx")

function show(data){
    return (
       <Def>
            <main>
                <section>
                    <img className="img-thumbnail" src={data.place.pic} alt="" />
                    <h3>Located in {data.place.city}, {data.place.state}</h3>
                </section>
                <h1>{data.place.name}</h1>
                <section>
                    <h2>Rating</h2>
                    <h3>Not Rated</h3>
                </section>
                <section>
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </section>
                <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">Edit</a>
                <form action={`/places/${data.place._id}?_method=DELETE`} method="POST">
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </main>
        </Def> 
    )
}

module.exports = show
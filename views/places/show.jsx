const React = require("react")
const Def = require("../default.jsx")

function show(data){
    return (
       <Def>
            <main>
                <section>
                    <img className="img-thumbnail" src={data.place.pic} alt="" />
                </section>
                <h1>{data.place.name}</h1>
                <section>
                    <h2>Rating</h2>
                    <h3>Not Rated</h3>
                </section>
                <section>
                    <h2>Description</h2>
                    <h3>{`Located in ${data.place.city}, ${data.place.state} and serving ${data.place.cuisines}`}</h3>
                </section>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
            </main>
        </Def> 
    )
}

module.exports = show
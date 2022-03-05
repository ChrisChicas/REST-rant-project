const React = require("react")
const Def = require("../default.jsx")

function show(data){
    let comments = (
        <h3 className="inactive">No comments yet!</h3>
    )
    if (data.place.comments.length){
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4" key={c._id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form action={`/places/${data.place._id}/${c._id}?_method=DELETE`} method="POST">
                        <button type="submit" className="btn btn-danger">Delete Comment</button>
                    </form>
                </div>
            )
        })
    }
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
                    <div className="col d-flex justify-content-center">
                       <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">Edit</a>
                        <form action={`/places/${data.place._id}?_method=DELETE`} method="POST">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form> 
                    </div>
                    <h2>Comments</h2>
                    <div className="row">
                        {comments}
                    </div>
                    <h2>Have a rant? Got a rave?</h2>
                    <form action={`/places/${data.place._id}/comment`} method="POST">
                    <div className="row d-flex justify-content-center">
                        <div className="form-group col-sm-5">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" type="text" name="author" id="author"/>   
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="content">Content</label>
                            <input className="form-control" type="text" name="content" id="content"/>   
                        </div>
                        <div className="form-check col-sm-1">
                            <label htmlFor="rant">Rant?</label>
                            <input className="form-check-input" type="checkbox" name="rant" id="rant" value="on"/>    
                        </div>                         
                        <div className="form-group col-sm-6">
                            <label htmlFor="stars">Star Rating</label>
                            <input className="form-range" type="range" min="1" max="5" step="0.5" name="stars" id="stars"/>    
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
                </section>
            </main>
        </Def> 
    )
}

module.exports = show
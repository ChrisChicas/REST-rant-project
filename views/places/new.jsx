const React = require("react")
const Def = require("../default.jsx")

function new_form(data){
    let message = ""
    if(data.message){
        message = (
            <h4 className="alert-danger">{data.message}</h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form action="/places" method="POST">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" type="text" name="name" id="name" required/>   
                        </div>                    
                        <div className="form-group col-sm-6">
                                <label htmlFor="pic">Place Picture</label>
                                <input className="form-control" type="url" name="pic" id="pic"/>   
                        </div>                    
                        <div className="form-group col-sm-6">
                                <label htmlFor="city">City</label>
                                <input className="form-control" type="text" name="city" id="city"/>    
                        </div>
                        <div className="form-group col-sm-6">
                                <label htmlFor="state">State</label>
                                <input className="form-control" type="text" name="state" id="state"/>    
                        </div>
                        <div className="form-group col-sm-6">
                                <label htmlFor="cuisines">Cuisines</label>
                                <input className="form-control" type="text" name="cuisines" id="cuisines" required/>    
                        </div>
                        <div className="form-group col-sm-6">
                                <label htmlFor="founded">Founded Year</label>
                                <input className="form-control" type="number" name="founded" id="founded" defaultValue={new Date().getFullYear()}/>    
                        </div>  
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
const React = require("react")
const Def = require("./default.jsx")

function Error404(){
    return (
        <Def>
            <h1>404: PAGE NOT FOUND</h1>
            <main className="d-flex justify-content-center">
                <img className="img-thumbnail text-center" src="/images/404-cat.jpg" alt="Cat in a box" />
            </main>
            <p className="d-flex justify-content-center">Oops, sorry, we can't find this page!</p>
            <div className="d-flex justify-content-center">
                    Photo by <a href="https://unsplash.com/@jiaweizhao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jiawei Zhao</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </Def>
    )
}

module.exports = Error404
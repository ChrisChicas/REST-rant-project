const React = require("react")
const Def = require("./default.jsx")

function Home(){
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img className="img-thumbnail" src="/images/chai-fruit-drink.jpg" alt="Chai Fruit Drink" />
                </div>
                <div>Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home
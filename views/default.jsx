const React = require("react")

function Def(html){
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><a href="/places">Places</a></li>
                    <li><a href="/places/new">Add Place</a></li>
                </ul>
            </nav>
            {html.children}
        </body>
        </html>
    )
}

module.exports = Def
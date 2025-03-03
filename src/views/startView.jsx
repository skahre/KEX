import "/src/style.css"

export function StartView(props){
    function startACB(){
        window.location.hash = "/test"
    }
    return (
        <div>
            <h1>Välkommen till testet!</h1>
            <p>Du kommer presenteras med ett ord. I nästkommande text ska du då leta efter ordet och klicka
                på det så fort du hittat det. Tiden det tar för dig att hitta ordet kommer att noteras. Vi
                rekommenderar att inte läsa hela texten utan att fokusera på att leta efter det specifika ordet.
            </p>
            <button onClick={startACB}>Start</button>
        </div>
    )
}
import "/src/style.css"

export function A2(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Vid årsskiftet blev det olagligt att slänga trasiga lakan, noppriga t-tröjor, strumpor och andra tyger i soppåsen. Nu är säcken full igen, det går snabbt, säger arbetsledaren 
            Jesper Schoultz som på nytt tvingas fälla ner luckan med lappen "Fullt" på när vi besöker Lövsta återvinningscentral. Här har textilåtervinning funnits sedan 2012, men aldrig 
            har folk slängt kläder och tyger som nu. Inlämningen av textiler ökade med 70 procent <button className="word-btn" onClick={wordFoundACB}>under</button> januari jämfört med samma period i fjol, säger Jesper Schoultz. Rapporterna om de 
            fuldumpningarna av kläder, pådrivet av fast fashion-industrin, har gjort många mer uppmärksamma, tror Jesper Schoultz. På Lövsta har personalen märkt att många besökare tar med 
            sig textilierna i stora påsar, för att sedan felaktigt lyfta ur allt och proppa ned kläderna löst huller om buller i behållarna. Personalen hinner inte stoppa alla som gör fel. 
            All textilavfall i Stockholm skickas just nu till stadens samarbetsaktör Human Bridge. Organisationen väljer vad som ska skickas till återvinning och vad som kan återanvändas. 
            Mycket går till behövande i andra länder. Om bara några år kan dock allmänheten tvingas lära sig ett helt nytt återvinningssystem. "Ett producentansvar förväntas vara på plats 
            inom några år (från EU:s sida) och då kommer ansvarsfrågan att förtydligas om textil ska vara ett kommunalt ansvar eller om det är kläd- och textulföretagens ansvar", skriver 
            Helena Strömer, kommunikatör på Stockholm vatten och avfall, i ett mejl.
            </p>
        </div>
    )
}


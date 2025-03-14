import "/src/style.css"

export function B4(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Vilobänkar i Älvsjöskogen, fladdermusholkar, trädplanteringar och sorteringskärl i parker. Hägersten-Älvsjö har fått 8 miljoner kronor till satsningar på miljö, folkhälsa och 
            klimat. Pengarna går till en stor knippe åtgärder. Nu ska det bli lättare för äldre att motionera och göra utflykter i Älvsjöskogen. Vilobänkar ska placeras längs motionsspåren, 
            <button className="word-btn" onClick={wordFoundACB}>liksom</button> handledare att gripa tag i. Dessutom ska skyltar sättas upp, som tydligt ska visa sträckning och längd på motionsspåren. Säkert kan även yngre få nytta av dessa investeringar 
            i "äldrevänlig natur". De kostar en halv miljon kronor och ingår i den summa på 8 miljoner kronor som Hägersten-Älvsjö stadsdelsförvaltning nu får från Stockholms stads centrala 
            pott för satsningar som rör miljö och klimat. Stadsdelsnämnderna kan söka pengar ur potten i olika sökomgångar, sedan avgör kommunstyrelsen om de får dem eller inte. Hägersten-Älvsjö 
            stadsdelsnämnd har beviljats pengar till en rad olika åtgärder. En av dem är öppna strandzoner vid Trekanten i Liljeholmen. Genom att skapa omväxlande solbelysta och skuggade områden 
            längs stranden och genom att lägga döda träd och grenar i vattnet ska man gynna fiskar och biologisk mångfald. På köpet blir det trevligare för människor med öppnare siktlinjer, 
            menar man. Även fladdemöss ska få bättre livsmiljöer. I Solbergaskogen, Älvsjöskogen, Eolshäll, Vinterviken, Trekanten och Årstabergsparken ska man gallra sly, sätta upp holkar och 
            skapa dämmen vid mindre våtmarker.
            </p>
        </div>
    )
}


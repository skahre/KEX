import "/src/style.css"

export function Practise(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            I takt med att tekniken utvecklas blir digitaliseringen en allt större del av våra liv. Vi använder mobiltelefoner för att hålla kontakten, datorer för att arbeta och streamade tjänster för att underhålla oss. Tekniken förändrar hur vi kommunicerar, konsumerar information och hanterar vardagliga uppgifter.
En av de största förändringarna de senaste åren är utvecklingen av artificiell intelligens. AI används <button className="word-btn" onClick={wordFoundACB}>redan</button> i allt från självkörande bilar till automatiserade kundtjänster. Många företag implementerar AI för att effektivisera sina verksamheter och förbättra kundupplevelsen. Samtidigt väcker teknologin frågor om etik och integritet. Hur påverkas vi av att maskiner kan fatta beslut åt oss?
En annan viktig aspekt av digitaliseringen är arbetslivet. Fler yrken kan nu utföras på distans, vilket ger människor större flexibilitet. Samtidigt innebär det nya utmaningar, som att upprätthålla balansen mellan arbete och fritid.
Skolan och utbildningen förändras också. Digitala verktyg gör det möjligt för elever att få tillgång till information på ett helt nytt sätt. Men det finns också risker, såsom digitalt utanförskap för dem som saknar teknisk kunskap.
Framtiden ser ljus ut, men kräver eftertanke. Hur vi väljer att använda tekniken kommer att avgöra dess påverkan på samhället. Digitaliseringen är här för att stanna – frågan är hur vi bäst anpassar oss till den.

            </p>
        </div>
    )
}


import "/src/style.css"

export function A4(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Dödsmetal ljuder från högtalarna inne på Sweden barbell club på Kungsholmen. Det är på det renodlade strongman-gymmet som Spångabon Cim Johansson tränar fyra gånger i veckan. 
            100 kilos-stenbumlingar av cement och järn ligger i ett hörn <button className="word-btn" onClick={wordFoundACB}>under</button> de gummihyllor de ska lyftas upp på. Så kallade "Farmer's-väskor" (avlånga föremål med stång och pinne som 
            man förser med vikter), däck, ok och "stockar" syns i de andra hörnen. Som 20-åring köpte Cim gymkort. Han ville komma i form, att det skulle sluta i strongman-världen hade 
            han inte en tanke på. – Jag har alltid varit stor, haft muskler naturligt. Till slut kände jag att styrkesport var min grej, säger Cim medan han plockar fram två "Farmer's-väskor" 
            på mattan. Han lägger på vikter på varsin sida och ställer sig mellan dem. Cim böjer knäna, greppar tak i båda handtagen och reser sig upp. Blicken blir intensiv, han tittar 
            rakt fram och går raskt genom den avlånga salen innan han släpper ned "väskorna". Cim vänder, tar upp dem igen, går raskt tillbaka och ställer ner. Inte riktigt uppvärmd än, 
            ler Cim och pustar tungt. På de stora internationella tävlingarna kan de tävlande behöva bära ok med en hel bilkaross på så långt man kan. Skador sker och det händer att 
            strongmans behöver akut vård. 33-åringen har varit i SM-final i strongman fyra gånger, med en andra- och tredjeplacering som senaste bedrifter. Framåt hösten avgörs Sveriges 
            starkaste man 2025.
            </p>
        </div>
    )
}


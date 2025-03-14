import "/src/style.css"

export function A3(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Gula linjen, som ska gå mellan Fridhemsplan och Älvsjö i framtiden, får plattformsbarriärer – ett skydd mellan perrong och spår, skriver Dagens Nyheter. Satsningen kostar 
            regionen 350 miljoner kronor. Att man minskar risken för suicid och skador är väldigt viktiga argument, säger trafikregionrådet Anton Fendert (MP) till DN. Gula linjen vid 
            Fridhemsplan får barriärer. Perronger på blå och gröna linjen får det däremot inte, enligt DN. I nuläget är det endast pendeltågsstationerna Stockholm Odenplan och Stockholm 
            City som har detta skydd som förhindrar människor att komma ner på spåren. Enligt DN har det inte inträffat några påkörningar alls på dessa stationer sedan de invigdes 2017. 
            I övriga tunnelbanenätet blir i snitt nära 20 personer om året påkörda av tåg. Det har utretts om man skulle kunna ha ett system utan barriärer, men vi har nu sett att 
            fördelarna är så pass många att det här beslutet behöver <button className="word-btn" onClick={wordFoundACB}>fattas</button>. Det är noggrant utrett, säger Anton Fendert till DN. På Fridhemsplans station är det bara gula linjen som får 
            barriärer. Perronger på blå och gröna linjen får inga barriärer, enligt DN.
            </p>
        </div>
    )
}


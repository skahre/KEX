import "/src/style.css"

export function B3(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Hon säger inget när hon hälsat oss välkomna, men tidigt märker jag att Edita Kondrat är i färd med att bjuda på en överraskning. Jag hittade lite bilder på dig, du har gjort en del jobb! säger Edita och skrattar. 45-åriga Edita kommer från Litauen och 
            utbildade sig på Vilnius konstakademi. “Tidigt fastnade jag för porträtt. Men traditionella porträtt blev för komplicerade, du behöver vara så precis för att alla ska bli nöjda. 
            Det blev karikatyrer i stället.” Det är på stora marknader, vid företagsevent och genom privata beställningar som Edita gör sina jobb. Vid sidan av karikatyrerna gör hon smycken, 
            grafiska tryck och ansiktsmålningar vid evenemang, men det är karikerandet som ligger varmast om hjärtat. Vid det här laget finns hennes karikatyrer i hundratals svenskars och 
            litauers hem. På fem, tio minuter gör man en teckning på en marknad, folk orkar inte vänta längre. Men här hemma kan det ta över en dag att göra ett jobb, säger hon. På Editas 
            Instagram ser vi några smakprov: En ambulansförare, en hel familj på en <button className="word-btn" onClick={wordFoundACB}>solig</button> sandstrand, en annan familj med sina två hus och häst på bild, två killar på ett gym, två andra 
            killar på en vattenscooter, en trädgårdsmästare. 
            </p>
        </div>
    )
}


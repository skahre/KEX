import "/src/style.css"

export function A2(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
                Deep within the archives of an ancient library, a manuscript lay untouched for centuries. Its brittle pages, filled with delicate ink strokes, hinted at knowledge long erased 
                from human memory. Scholars debated its origins, some believing it to be the work of a long-lost civilization. Others dismissed it as mere fiction, the musings of an imaginative 
                scribe. But when a historian uncovered a passage describing an unknown celestial event, interest was reignited. Could this text rewrite history? 

                In the heart of the dimly lit study, a single <button className="word-btn" onClick={wordFoundACB}>candle</button> flickered, casting elongated shadows against the dusty walls. The historian turned another page, heart pounding as the words 
                before him seemed to whisper of secrets long forgotten, knowledge too dangerous to be buried forever. The passage described a night when the sky was split by an unknown light, 
                seen by generations long past, yet absent from any modern records. Could it have been a comet, a celestial alignment, or something beyond human understanding? 

                Determined to find answers, the historian sought out other forgotten texts, piecing together fragments of a story too grand to be coincidence. But as he dug deeper, strange 
                occurrences plagued the library. Books fell from shelves without cause, ink smeared over pages as if something unseen objected to his discoveries. Perhaps some knowledge was meant 
                to remain hidden.

            </p>
        </div>
    )
}


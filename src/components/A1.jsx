import "/src/style.css"

export function A1(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
                The waves crashed relentlessly against the rugged cliffs, sending plumes of mist into the air. The island had long been abandoned, its once-thriving settlement reduced to ruins 
                swallowed by creeping vines. No one knew why the inhabitants had vanished so suddenly, leaving behind half-eaten meals and unfinished letters. Legends spoke of an unseen force 
                lurking beneath the surface, waiting to reclaim what was lost. As explorers set foot on the desolate shores, they couldn't shake the feeling of being watched. The wind howled 
                through empty windows, whispering secrets of a forgotten past. 

                In the center of the ruins, a stone arch stood tall, remnants of a time when travelers would cross a narrow <button className="word-btn" onClick={wordFoundACB}>bridge</button> connecting the village to the mainland. Now, only fragments 
                remained, swallowed by the relentless passage of time and the creeping embrace of nature. Among the overgrown paths, remnants of pottery and rusted tools lay scattered, hinting
                at the once-thriving community that had vanished overnight. The expedition team combed through the debris, finding peculiar symbols etched into walls, possibly warnings or prayers 
                to unknown deities. Night fell quickly on the island, and with it, an eerie silence descended. The moonlight cast long shadows over the ruins, and for a moment, it seemed as if 
                figures moved among them. 

                A distant splash echoed from the shore, sending chills down the explorers' spines. Had they truly come alone, or did something else linger in the darkness, watching, waiting?
            </p>
        </div>
    )
}


import "/src/style.css"

export function B2(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>

                Beneath the towering canopies of an ancient forest, light filtered through the leaves in a mosaic of green and gold. The air was thick with the scent of earth and blooming flowers. 
                It was said that deep within the woods, magic still lingered, unseen but ever-present. Travelers often spoke of strange occurrences—a sudden gust of wind carrying whispers, 
                footprints appearing where none should be. 

                One evening, a lone wanderer stumbled upon a clearing where fireflies danced in mesmerizing patterns. For a brief moment, time seemed to stand still, and the forest hummed with 
                an energy older than the world itself. At the center of the clearing, embedded in the mossy ground, was a smooth <button className="word-btn" onClick={wordFoundACB}>stone</button> that pulsed with an eerie glow. As the wanderer reached out, 
                a warmth spread through their fingers, and a distant voice echoed in their mind, hinting at the forest’s deepest secret. 

                Suddenly, the trees seemed to close in, their trunks shifting ever so slightly, as if watching. The wanderer took a hesitant step back, but the ground beneath them felt unsteady, 
                as if the forest itself had awakened. The whispers grew louder, forming words in a language unfamiliar yet oddly understandable. They spoke of guardians long forgotten, of a promise 
                made to the land. Had the wanderer just become part of a tale much older than they could comprehend? The fireflies blinked in unison, spelling out a message in the air, before 
                vanishing, leaving the wanderer alone, heart pounding in the silence.

            </p>
        </div>
    )
}


import "/src/style.css"

export function B1(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
                In a quiet village, an old clockmaker toiled away in his shop, surrounded by gears and springs. His hands, though wrinkled with age, moved with precision as he assembled intricate 
                mechanisms. The villagers admired his skill, though none truly understood the depth of his knowledge. Hidden within the cogs of a grand clock was a secret—a message left behind for 
                a future generation. It would take a keen eye and a curious mind to decipher its meaning.

                At the heart of the workshop, resting on a workbench littered with blueprints and tools, sat an ornate <button className="word-btn" onClick={wordFoundACB}>glass</button> dome protecting a peculiar timepiece. Unlike any other, this clock seemed 
                to move both forward and backward, ticking in harmony with an unseen force. The old man often whispered to it, as if speaking to a long-lost friend, but no one ever understood his 
                words. 

                One stormy evening, a young apprentice arrived, eager to learn the craft. As he worked under the old man’s guidance, he noticed oddities—the way gears moved without touch, the 
                sensation of being watched by unseen eyes. On the apprentice's final night, the old man handed him the clock and spoke only one phrase: "Time is not as it seems." Before the 
                apprentice could ask what he meant, the clock struck midnight, and the shop was consumed by an inexplicable darkness.


            </p>
        </div>
    )
}


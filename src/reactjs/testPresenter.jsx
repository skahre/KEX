import { observer } from "mobx-react-lite";
import { WordView } from "../views/wordView";
import { TestTextView } from "../views/testTextView";

const Test = observer(
    function TestRender(props){
        function userReadyACB(){
            props.model.startTimer()
        }

        function wordFoundACB(){
            props.model.stopTimer()
        }

        return props.model.timer? 
            <div>
                <WordView/>
                <TestTextView
                onWordFound={wordFoundACB}/>
            </div>
            : <div>
                <WordView/>
                <button onClick={userReadyACB}>Ready!</button>
            </div>
    }
);

export { Test }
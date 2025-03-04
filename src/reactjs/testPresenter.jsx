import { observer } from "mobx-react-lite";
import { WordView } from "../views/wordView";
import { TestTextView } from "../views/testTextView";

const Test = observer(
    function TestRender(props){
        function userReadyACB(){
            props.model.startTimer();
        }

        function wordFoundACB(){
            props.model.stopTimer();
            props.model.finishTest();
            props.model.getCurrentTest();
        }

        return props.model.timer? 
            <div>
                <WordView
                currentTest={props.model.currentTest}/>
                <TestTextView
                currentTest={props.model.currentTest}
                onWordFound={wordFoundACB}/>
            </div>
            : <div>
                <WordView
                currentTest={props.model.currentTest}/>
                <button onClick={userReadyACB}>Ready!</button>
            </div>
    }
);

export { Test }
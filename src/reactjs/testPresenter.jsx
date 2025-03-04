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

        return <div>
                <WordView
                currentTest={props.model.currentTest}/>

                {props.model.startTime? 
                <TestTextView
                currentTest={props.model.currentTest}
                onWordFound={wordFoundACB}/>
                : <button onClick={userReadyACB}>Ready!</button>}
            </div>
    }
);

export { Test }
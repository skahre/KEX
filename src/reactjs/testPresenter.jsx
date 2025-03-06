import { observer } from "mobx-react-lite";
import { WordView } from "../views/wordView";
import { TestTextView } from "../views/testTextView";
import { WordFoundView } from "../views/wordFoundView";

const Test = observer(
    function TestRender(props){
        function userReadyACB(){
            props.model.startTimer();
        }

        function wordFoundACB(){
            props.model.stopTimer();
            props.model.finishTest();
        }

        function nextTestACB(){
            if (props.model.testsDone == props.model.allTests.length / 2){
                window.location.hash = "/midway"
            }
            else {
                props.model.getCurrentTest();
            }
        }

        return <div>
                <WordView
                currentTest={props.model.currentTest}/>

                {props.model.startTime? 
                <TestTextView
                currentTest={props.model.currentTest}
                onWordFound={wordFoundACB}/>

                : <button onClick={userReadyACB}>Ready!</button>}

                {props.model.endTime?
                <WordFoundView
                onNextClick={nextTestACB}/>

                : null
                }
            </div>
    }
);

export { Test }
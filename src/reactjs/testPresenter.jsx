import { observer } from "mobx-react-lite";
import { WordView } from "../views/wordView";
import { TestTextView } from "../views/testTextView";
import { WordFoundView } from "../views/wordFoundView";
import "/src/style.css";

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
            const testsDone = props.model.testsDone;
            const testAmount = props.model.allTests.length;
            if (testsDone == testAmount / 2 || testsDone == testAmount){
                window.location.hash = "/checkpoint";
            }
            else {
                props.model.getCurrentTest();
            }
        }

        return <div className="flex-box">
                <WordView
                currentTest={props.model.currentTest}/>

                {props.model.startTime? 
                <TestTextView
                currentTest={props.model.currentTest}
                onWordFound={wordFoundACB}/>

                : <button className="user-btn" onClick={userReadyACB}>Redo!</button>}

                {props.model.endTime?
                <WordFoundView
                onNextClick={nextTestACB}/>

                : null
                }
            </div>
    }
);

export { Test }
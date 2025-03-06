import { observer } from "mobx-react-lite";
import { CheckpointView } from "../views/checkpointView";

const Checkpoint = observer(
    function CheckpointRender(props){
        function switchFinsihedACB(){
            if (props.model.testsDone == props.model.allTests.length){
                window.location.hash = "/results";
            }
            else {
                props.model.getCurrentTest();
                window.location.hash = "/test";
            }
        }

        return <div>
                <CheckpointView
                onSwitchDone={switchFinsihedACB}
                finished={props.model.testsDone == props.model.allTests.length}/>
            </div>
    }
);

export { Checkpoint }
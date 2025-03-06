import { observer } from "mobx-react-lite";
import { MidWayView } from "../views/midWayView";


const MidWay = observer(
    function MidWayRender(props){
        function switchFinsihedACB(){
            props.model.getCurrentTest();
            window.location.hash = "/test";
        }

        return <div>
                <MidWayView
                onSwitchDone={switchFinsihedACB}/>
            </div>
    }
);

export { MidWay }
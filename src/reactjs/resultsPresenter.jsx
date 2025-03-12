import { observer } from "mobx-react-lite";
import { ResultsView } from "../views/resultsView";

const Results = observer(
    function ResultsRender(props){
        function restartTestACB(){
            props.model.restart();
            window.location.hash = "/";
        }

        return <div>
                <ResultsView
                stats={props.model.userStats}
                onTestRestart={restartTestACB}/>
            </div>
    }
);

export { Results }
import { observer } from "mobx-react-lite";
import { WordView } from "../views/wordView";
import { A1View } from "../views/A1View";

const Test = observer(
    function TestRender(props){

        return <div>
            <WordView/>
            <A1View/>
            </div>
    }
);

export { Test }
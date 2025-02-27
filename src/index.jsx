import {createRoot} from "react-dom/client";
import { StartView } from "./views/startView";
import { WordView } from "./views/wordView";

createRoot(document.getElementById('root'))
    .render(<WordView/>);  
import {createRoot} from "react-dom/client";
import { StartView } from "../views/startView";
import { WordView } from "../views/wordView";
import { ReactRoot } from "./ReactRoot";

createRoot(document.getElementById('root'))
    .render(<ReactRoot/>);  
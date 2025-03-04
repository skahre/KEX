import {createRoot} from "react-dom/client";
import { observable } from "mobx";
import { ReactRoot } from "./ReactRoot";
import { model } from "../testModel";

const reactiveModel = observable(model)

createRoot(document.getElementById('root'))
    .render(<ReactRoot model={reactiveModel}/>);  
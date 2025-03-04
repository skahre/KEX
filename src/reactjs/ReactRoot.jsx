import { observer } from "mobx-react-lite";

import { createHashRouter, RouterProvider } from "react-router-dom";

import { StartView } from "../views/startView";
import {Test} from "./testPresenter"

export function makeRouter(model){
    return createHashRouter([
        {
            path: "/",
            element: <StartView model={model}/>
        },
        {
            path: "/test",
            element: <Test model={model}/>
        }
    ], 
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    },
)
}

const ReactRoot = observer(
    function ReactRoot(props){
        return (
            <div>
                <main>
                    <RouterProvider 
                        future={{
                            v7_startTransition: true,
                        }}
                        router={ makeRouter(props.model) }/>
                </main>
            </div>
        );
    }
);

export { ReactRoot }
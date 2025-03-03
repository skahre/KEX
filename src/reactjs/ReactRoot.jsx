import { observer } from "mobx-react-lite";

import { createHashRouter, RouterProvider } from "react-router-dom";

import { StartView } from "../views/startView";
import {Test} from "./testPresenter"

export function makeRouter(){
    return createHashRouter([
        {
            path: "/",
            element: <StartView/>
        },
        {
            path: "/test",
            element: <Test/>
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
                        router={ makeRouter() }/>
                </main>
            </div>
        );
    }
);

export { ReactRoot }
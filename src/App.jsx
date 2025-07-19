import {Provider} from "react-redux";

import {store} from "./redux/store.js";
import Redux from "./redux";
// it will take default import from the folder ie.index.jsx so we can avoid using /redux/Redux.
import Props from "./props/Props.jsx";
import Events from "./events/Events.jsx";
import UseStateHook from "./useState";
import UseEffectHook from "./useEffect";
import UseReducerHook from "./useReducer";
import UseRefHook from "./useRef/UseRefHook.jsx";
import UseContextHook from "./useContext/UseContextHook.jsx";
import {ThemeProvider} from "./useContext/ThemeContext.jsx";
import MemoFun from "./useMemo";
import Modal from "./modal/Modal.jsx";
import ClassComponent from "./class/ClassComponent.jsx";
import Routing from "./routing/Routing.jsx";

function App() {
    return (
        <>
            <Provider store={store}>
                <Redux />
            </Provider>
            <Props />
            <Events />
            <UseStateHook />
            <UseEffectHook />
            <UseReducerHook />
            <UseRefHook />
            <ThemeProvider>
                <UseContextHook />
            </ThemeProvider>
            <MemoFun />
            <Modal />
            <ClassComponent />
            <Routing />
        </>
    );
}

export default App;

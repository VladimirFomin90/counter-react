import { createStore } from "redux";
// import { inc, dec, random } from "./actions";
import reducer from "./reducer";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";

const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };



// const decDispatch = bindActionCreators(dec, dispatch);
// const randomDispatch = bindActionCreators(random, dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });

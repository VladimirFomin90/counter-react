import React from "react";
import { connect } from "react-redux";
// import { inc, dec, random } from "../actions";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, random }) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-success">
                decrement
            </button>
            <button onClick={inc} className="btn btn-success">
                increment
            </button>
            <button onClick={random} className="btn btn-success">
                random
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};


export default connect(mapStateToProps, actions)(Counter);

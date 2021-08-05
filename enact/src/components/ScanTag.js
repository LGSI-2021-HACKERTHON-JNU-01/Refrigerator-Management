// import React, { Component } from 'react';
// import InputTag from './component/InputTag';

// class InputTag extends React.Component {
//     render() {
//         return (
//         <div className="input-tag" />
//         )
//     }
// }

// ReactDOM.render(
// <InputTag />,
// document.getElementById('content')
// );

// ReactDOM.render(
//     <InputTag />,
//     document.getElementById('content')
// );


import { useState } from "react";
import {TagsInput} from "react-tag-input-component";

function ScanTag(){
    const [selected, setSelected] = useState([]);
    return (
        <div style={{fontSize:20, color:"gray"}}>
            <em>Add ingredients</em>
            <TagsInput
                inputFieldPosition="top"
                value={selected}
                onChange={setSelected}
                name="ingredients"
                placeHolder="enter ingredients"
            />
        </div>
    );
}
// export default {ScanTag, selected}
export default ScanTag;
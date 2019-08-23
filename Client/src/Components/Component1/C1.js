import React from 'react';
import {Input, Button} from 'semantic-ui-react'

import './C1.css';


export default function Component1(props){
    return(
        <div className="comp1">
            <Input placeholder={props.placeholderValue} disabled/>
            <div id="buttons">
                <Button primary onClick={props.handleEditBtnClick}>Edit Adress</Button>
                <Button secondary onClick={props.getFact}>Get Facts</Button>
            </div>
        </div>
    )

}

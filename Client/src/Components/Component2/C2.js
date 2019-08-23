import React from 'react';
import { Input, Button} from 'semantic-ui-react'

import './C2.css';


export default function Component2(props){
    return(
        <div id="comp2">
            <div>
                <Input
                    focus placeholder="Enter new address"
                    onChange={props.handleChange}
                    value={props.inputValue}
                />
                <Button secondary id="button2" onClick={props.handleClick}>Send</Button>
            </div>
            <div id="factsElement">
                <h2>Fact of the Day</h2>
                <h4>{props.theFact}</h4>
            </div>
        </div>
    )

}

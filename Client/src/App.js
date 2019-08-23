import React, {Component} from 'react';
import './App.css';
import axios from "axios";

import Component1 from './Components/Component1/C1';
import Component2 from './Components/Component2/C2';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "www.placeholder.com",
            current_fact: "",
            editable_input:{
                text: ""
            }
        }
    }


    handleInputUpdate = (e) => {
        const {value} = e.target;
        console.log(value)
        this.setState(prevState => ({
            editable_input: {
                ...prevState.editable_input,
                text: value
            }
        }))
        console.log(value)
    }

    handleSendButton = () => {
        console.log('I am clicking button')
        var val = this.state.editable_input.text
        console.log(val)
        this.setState({
            placeholder: this.state.editable_input.text,
            editable_input:{
                text: ""
            }
        })
    }

    handleEditButton = () =>{
        console.log("Button is being clicked")
        console.log(this.state.placeholder)
        this.setState({
            editable_input:{
                text: this.state.placeholder
            }
        })
    }

    getFacts = async() => {
        const header ='application/json';
        console.log(this.state.placeholder)
        await axios.get(`https://cors-anywhere.herokuapp.com/${this.state.placeholder}`)
        .then(response => {
            console.log(response)
            let random_fact = response.data
            this.setState({
                current_fact:random_fact.fact
            })
            console.log(this.state.current_fact)
        })
        .catch(error => {
            console.log("There is an error")
            return error
        })



    }

    render(){
        console.log(this.state.placeholder)
        return(
            <div className = "App">
                <header className="App-header">
                    <p id="welcome">
                        AFTHA PROJECT
                    </p>
                    <Component1
                        placeholderValue={this.state.placeholder}
                        handleEditBtnClick={this.handleEditButton}
                        getFact={this.getFacts}
                    />
                    <Component2
                        handleChange ={this.handleInputUpdate}
                        handleClick ={this.handleSendButton}
                        inputValue={this.state.editable_input.text}
                        theFact={this.state.current_fact}
                    />
                </header>
            </div>
        )
    }
}

export default App

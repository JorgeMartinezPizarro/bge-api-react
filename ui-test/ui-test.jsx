import React from 'react';
import ReactDOM from 'react-dom';
import {AddressOutputsSummary,AddressOutputs, AddressUTXOsSummary, AddressUTXOs} from '../index.js';


const hashes = [
    '1L1EnvmZ8Gg42NTzGwEHrMD4XaosmgntKF', 
    '1JCe8z4jJVNXSjohjM4i9Hh813dLCNx2Sy', 
    '32MKGhKdTqEQZrrtd7iemEETz8bn7CJEaW', 
    '3Nxwenay9Z8Lc9JBiywExpnEFiLp6Afp8v'
];

const Test = React.createClass({
    // initilize state
    getInitialState() {
        return {
            index: 0,
        };
    },
    click() {
        this.setState({
            index: (this.state.index + 1 === hashes.length ? 0 : this.state.index + 1),
        });
    },
    render(){
        return (
            <div>
                <a href='#' onClick={this.click}>Next</a>
                <h4>ADDRESS VIEW</h4>
                <table><tbody><tr><td>Hash</td><td>{hashes[this.state.index]}</td></tr></tbody></table>
                <AddressUTXOsSummary 
                    hash={hashes[this.state.index]}
                />
                <AddressOutputsSummary 
                    hash={hashes[this.state.index]}
                />
                <AddressUTXOs
                    hash={hashes[this.state.index]}
                />
            </div>)
    }
});

ReactDOM.render(<Test />, document.getElementById('react'))
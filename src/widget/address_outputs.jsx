import React from 'react';
import _ from 'lodash';
import AddressChannel from '../store';

const Widget = React.createClass({
    // define property types
    propTypes: {
        // TODO
    },
    getDefaultProps() {
        return {
            hash: '',
        };
    },
    handleAddress(hash){
        AddressChannel.request("https://api.bitcoinprivacy.net/movements/"+hash+"/0/1000", this);
    },
    componentWillMount(){
        this.handleAddress(this.props.hash);
    },
    // initilize state
    getInitialState() {
        return {
            loading:true, 
            data:false
        };
    },
    componentWillReceiveProps(nextProps){
        this.setState({
            loading:true, 
            data:false
        });
        this.handleAddress(nextProps.hash);
    },
    
    shouldComponentUpdate(newProps, newState){
        return true;
    },
    // template rendering
    render() {
        console.log("DRAW", this.state);
        let content = false;
        if (this.state.loading)
            content = (<div>LOADING</div>);
        else if (this.state.data === false)
            content = (<div>NO DATA</div>);
        
        else if (this.state.error)
            content = (<div>Error: {this.state.message}</div>);
        else 
            content = (
                <table>
                    <tbody>
                        {_.map(this.state.response, (utxo) => { return (
                            <tr key={utxo.tx}>
                                <td>{utxo.tx}</td> 
                                <td>{utxo.spentInTx}</td> 
                                <td>{utxo.value}</td> 
                                <td>&nbsp;</td> 
                                
                            </tr>)                      
                        })}
                    </tbody>
                </table>
            );
        return (
            <div>
                {content}
            </div>
        );
    }
});

export default Widget;
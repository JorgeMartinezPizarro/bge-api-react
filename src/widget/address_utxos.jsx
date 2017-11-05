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
        AddressChannel.request("https://api.bitcoinprivacy.net/utxos/"+hash+"/0/1000", this);
    },
    componentWillMount(){
        this.handleAddress(this.props.hash);
    },
    // initilize state
    getInitialState() {
        return {
            loading:true, 
            data:false,
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
        if (this.state.error)
            return (<div className='error'>Error: {this.state.message}</div>);
        else if (this.state.loading)
            return (<div className='loading'></div>);
        else if (this.state.data === false)
            return (<div className='info'>NO DATA</div>);
        else 
            return (
                <div>
                    {_.map(this.state.response, (utxo) => { return (
                            <span className='unspent' key={utxo.tx}>
                                <a title={'Payed in tx: '+utxo.tx} href='#'>&nbsp;&nbsp;0000</a>
                                <span>
                                    {parseFloat(Math.round(utxo.value/100000000 * 100) / 100).toFixed(3)}
                                </span>
                            </span>
                    )})}
                </div>
            );
    }
});

export default Widget;
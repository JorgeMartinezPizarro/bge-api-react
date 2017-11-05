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
        AddressChannel.request("https://api.bitcoinprivacy.net/utxos/"+hash+"/summary", this);
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
            data:false,
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
                <table><tbody><tr>
                    <td>maxHeight</td> 
                    <td>{this.state.response.maxHeight}</td></tr><tr>
                    <td>minHeight</td> 
                    <td>{this.state.response.minHeight}</td></tr><tr>
                    <td>sum</td> 
                    <td>{this.state.response.sum}</td></tr><tr>
                    <td>count</td> 
                    <td>{this.state.response.count}</td></tr></tbody>
                </table>
            );

    }
});

export default Widget;
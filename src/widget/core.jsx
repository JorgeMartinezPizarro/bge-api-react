import React from 'react';
import _ from 'lodash';
import AddressChannel from '../store';
// idea: extend all views just implementing the call and render methods
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
        console.log("MOUNT", this.props);
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
        this.handleAddress(nextProps.hash);
    },
    shouldComponentUpdate(newProps, newState){
        return true;
    },
    renderExtended() {
        return (<div>Implement me!</div>);
    }
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
                <table><tbody><tr>
                    <td>maxHeight</td> 
                    <td>{this.state.response.maxHeight}</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr>
                    <td>minHeight</td> 
                    <td>{this.state.response.minHeight}</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr>
                    <td>sum</td> 
                    <td>{this.state.response.sum}</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr>
                    <td>count</td> 
                    <td>{this.state.response.count}</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody>
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
/* global __WEBPACK__ */
// only load style when using webpack
if (__WEBPACK__) {
    require('./style/style.scss');
}
// code
import {AddressOutputs, AddressOutputsSummary, AddressUTXOs, AddressUTXOsSummary} from './src/widget';

export {AddressOutputs, AddressOutputsSummary, AddressUTXOs, AddressUTXOsSummary};
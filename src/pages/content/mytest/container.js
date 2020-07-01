import mirror, { connect } from 'mirrorx';
import model from './model';
import Mytest from './index';
mirror.model(model);

mirror.hook((action, getState) => {
    const {routing: {location}} = getState();
    // if (action.type === "@@router/LOCATION_CHANGE" && location.pathname === '/ems/archivalipment') {
    //   actions.archivalipment.load();
    // }
})

export const Mytest_= connect(state => state.mytest)(Mytest);
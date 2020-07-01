import { actions } from 'mirrorx';
import * as api from './service';

export default {
    name: 'mytest',
    initialState: {
        userid: '9666666'

    },
    reducers: {
        updateState: (state, data) => ({ ...state, ...data })

    },
    effects: {
        async load() {
            let params = {
                data: {}
            }
            let res = await api.getlist(params);
            console.log("res", res);
        }

    }
};
import Vue from 'vue'
import Vuex from 'vuex'
import ControlSidebar from './control-sidebar';

Vue.use(Vuex);

const isDebug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        ControlSidebar
    },
    strict: isDebug
});

export default store

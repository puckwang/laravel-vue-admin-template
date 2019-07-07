export const actions = {
    setNavbarTheme: ({commit}, payload) => {
        commit('setNavbarTheme', payload);
    },
    setSidebarTheme: ({commit}, payload) => {
        commit('setSidebarTheme', payload);
    },
    setBrandTheme: ({commit}, payload) => {
        commit('setBrandTheme', payload);
    }
};

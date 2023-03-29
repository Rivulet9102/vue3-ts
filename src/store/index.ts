import { createStore } from 'vuex';

export interface State {
    userInfo: {
        id: number;
        username: string;
        password: string;
    };
}

export const store = createStore<State>({
    state() {
        return {
            userInfo: {
                id: 0,
                username: '',
                password: ''
            }
        };
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    }
});

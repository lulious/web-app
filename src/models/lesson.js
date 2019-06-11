
export default {

  namespace: 'lesson',

  state: {
    activeNav: 0,
    activeItem: 'action',
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    set(state, {payload}){
      return {...state, ...payload};
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

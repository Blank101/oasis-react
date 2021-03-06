/* global shallow describe it expect */
/* eslint-disable import/first,no-undef */
import React from 'react';
import { fromJS } from 'immutable';
import {
  OasisTokenTransferHistoryWrapper,
  mapStateToProps,
  mapDispatchToProps
} from './OasisTokenTransferHistory';
import { shallow } from 'enzyme';
import { combineReducers, createStore } from 'redux/index';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

describe('(Container) OasisTokenTransferHistory', () => {

  let store = null;
  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
  });

  const state = fromJS(global.storeMock);
  const initialProps = mapStateToProps(state);
  const initialActions = mapDispatchToProps(x => x);
  const props = {
    ...initialActions,
    ...initialProps
  };

  it('will receive right props', () => {
    expect(initialProps).toMatchSnapshot();
  });


  it('will receive right actions', () => {
    expect(initialActions).toMatchSnapshot();
  });

  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <OasisTokenTransferHistoryWrapper {...props}/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

});

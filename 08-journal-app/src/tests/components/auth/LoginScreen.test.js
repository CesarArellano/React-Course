import '@testing-library/jest-dom';

import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState = {
  ui: {
    loading: false
  }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Testing with LoginScreen', () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks(); // Best Practice
  });

  const wrapper = mount(
    <Provider store={ store }>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test('Must show the component correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call startGoogleLogin', () => {
    wrapper.find('.google-btn').prop('onClick')();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test('should call startLoginEmailPassword', () => {
    wrapper.find('form').prop('onSubmit')(
      { preventDefault(){} }
    );
    expect(startLoginEmailPassword).toHaveBeenCalledWith('cesar@gmail.com', '12345');
  })
  
  
})

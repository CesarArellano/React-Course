import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Tests with CounterApp Component', () => {
  let wrapper = shallow(<CounterApp />); // Retomo el scope de las funciones que puedo ocupar (sólo ocupar en desarrollo).

  beforeEach(() => {
      wrapper = shallow(<CounterApp />);
    }
  );

  test('Must show <CounterApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must show the counter sent by props', () => {
    const counter = 100;
    const wrapper = shallow(
      <CounterApp
        value={ counter }
      />
    );

    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe(counter.toString());
  });

  test('Must increment with the +1 button', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('1');
  });

  test('Must decrement with the -1 button', () => {
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('0'); // En teoría debería fallar si tuvieras un número diferente por defecto porque se alteró su valor en la anterior prueba (porque el wrapper está de manera global).
  });

  test('Must reset the counter with reset button', () => {
    const counter = 105;
    const wrapper = shallow(
      <CounterApp
        value={ counter }
      />
    );
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('105');
  });
});

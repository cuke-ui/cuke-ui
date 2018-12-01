const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const ReactDOM = require('react-dom')

if (typeof window !== 'undefined') {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
  global.window.scrollTo = () => { };
}

// The built-in requestAnimationFrame and cancelAnimationFrame not working with jest.runFakeTimes()
// https://github.com/facebook/jest/issues/5147
global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};

global.cancelAnimationFrame = function (cb) {
  return clearTimeout(cb, 0);
};
ReactDOM.createPortal = node => node

Element.prototype.getContext = () => {
  return {}
};

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}))

jest.mock('scroll-into-view-if-needed', () => {
  return jest.fn().mockImplementation(() => {});
});

Enzyme.configure({ adapter: new Adapter() });

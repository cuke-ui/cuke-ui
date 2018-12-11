export const debounce = (action, time) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      action.apply(this, args);
    }, time);
  };
};

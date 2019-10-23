export const toggleDisplay = (e, display, displaySetter) => {
  e.preventDefault();
  displaySetter(!display)
}
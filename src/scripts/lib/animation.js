// Define the classes for handling animation.
const ENABLED = 'js--enable-show-hide';
const FADE = 'js--fade-out';
const HIDDEN = 'js--hidden';

/**
 * Adds a class that enables CSS transitions for animation.
 * @param  {Element} element the element to be animated
 * @return {void}
 */
function enable(element) {
  element.classList.add(ENABLED);
}

/**
 * Adds a class to trigger a fade-in animation.
 * @param  {Element} element         the element to animate
 * @param  {Number} queuedShowOrHide ID of a `timeoutID` to clear
 * @return {void}
 */
export function show(element, queuedShowOrHide) {

  // If `hide()` has been called, clear the timeout to avoid problems.
  if (queuedShowOrHide) {
    clearTimeout(queuedShowOrHide);
  }

  // Ensure that the element supports animation.
  enable(element);

  element.classList.remove(HIDDEN);

  // Without a split-second delay, animations don’t always work as expected.
  setTimeout(() => element.classList.remove(FADE), 10);
}

/**
 * Adds a class to trigger a fade-out animation.
 * @param  {Element} element the element to animate
 * @return {Number}          a timeoutID
 */
export function hide(element) {

  // Ensure the element supports animation.
  enable(element);

  // Start the animation.
  element.classList.add(FADE);

  /*
   * Create a timeout to add the hidden class after the animation is finished.
   * Return the `timeoutID` to allow this to be canceled if the element is
   * toggled back to visible before this is finished.
   */
  return setTimeout(() => { element.classList.add(HIDDEN); }, 400);
}

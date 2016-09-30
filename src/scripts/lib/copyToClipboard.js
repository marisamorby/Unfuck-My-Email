/**
 * Show a success message briefly after copying to clipboard.
 * @return {void}
 */
function showCopiedMessage() {
  const confirmation = document.querySelector('.copied-box');

  // Remove the class so the message fades in (CSS animates it).
  confirmation.classList.remove('copied-box-hidden');

  // After 1 second, add the class again to fade it out.
  setTimeout(function() {
    confirmation.classList.add('copied-box-hidden');
  }, 1000);
}

/**
 * Turns on Clipboard.js for easy copying of the compiled templates.
 * @return {void}
 */
export function enableCopyToClipboard () {

  // Initialize the copy-to-clipboard button.
  const btn = document.getElementById('btn');
  if (btn) {
    const clipboard = new Clipboard(btn);

    // After copying, show a notification.
    clipboard.on('success', showCopiedMessage);
  }
}

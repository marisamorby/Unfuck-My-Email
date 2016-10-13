import { show, hide } from './animation';

function handleLoginLoading() {

  // Get the heading, subheading, and login container.
  const login = document.getElementById('firebaseui-auth-container');

  // We can bail here if the login controls aren’t on the page.
  if (!login) {
    return;
  }

  const heading = document.querySelector('.template-heading h1');
  const subheading = document.querySelector('.template-heading h2');
  const observer = new MutationObserver((mutations) => {
    /*eslint no-console: 0*/
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        if (!login.hasChildNodes()) {
          hide(heading);
          hide(subheading);

          console.log('hiding elements...');
        } else {
          show(heading);
          show(subheading);
        }
      }
    });
  });

  observer.observe(login, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });
}

const checkLogin = callback => {
  firebase.auth().onAuthStateChanged(user => {

    // Get the elements we need to update on login/logout.
    const username = document.querySelector('.user-info__name');
    const photo = document.querySelector('.user-info__photo');
    const logout = document.querySelector('.user-info__logout');

    // If a user object exists, we know the user is logged in.
    if (user) {

      // Redirect to the templates page if the user is already logged in.
      if (document.location.href.match(/login\.html/)) {
        document.location.href = './templates.html';
        return;
      }

      // Get the relevant details for display.
      const {
        displayName,
        photoURL,
      } = user;

      user.getToken().then(() => {

        // Enable logging out.
        logout.addEventListener('click', event => {
          event.preventDefault();
          firebase.auth().signOut();
        });

        // Update text and visibility for logged in state.
        logout.textContent = 'Log Out';
        username.textContent = displayName;
        photo.src = photoURL;

        // Make sure the profile photo is visible.
        photo.classList.remove('user-info__photo--hidden');

        // Fire the callback, if provided.
        if (typeof callback === 'function') {
          callback();
        }
      });
    } else {

      // User is signed out.
      if (document.location.href.match(/templates\.html/)) {
        document.location.href = './login.html';
        return;
      }

      handleLoginLoading();

      // Update text and visibility for logged out state.
      photo.classList.add('user-info__photo--hidden');
      username.textContent = '';
      logout.textContent = 'Log In or Create an Account';
    }
  }, error => {
    document.getElementById('error').textContent = JSON.stringify(error);
  });
};

export default checkLogin;

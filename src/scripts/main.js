import forms from '../data/forms';
import { show, hide } from './lib/animation';
import { renderInput } from './lib/templates';
import { filterFormsByCategory, handleSubmit } from './lib/forms';
import { enableCopyToClipboard } from './lib/copyToClipboard';
import templates from '../data/templates/all';

const initialize = forms => {
  const chooser = document.getElementById('form-chooser');
  const template = document.getElementById('template');
  const formSlug = window.location.hash.split('#')[1];
  const formValues = forms.filter(form => form.slug === formSlug)[0];

  hide(template);

  if (formValues) {
    const form = document.getElementById('template-questions');
    const formTemplate = Handlebars.compile(templates['form-template']);

    hide(chooser);

    form.innerHTML = formTemplate(formValues);

    form.addEventListener('submit', event => {
      handleSubmit(event);
      show(template);
      hide(form);
    });

    show(form);
  } else {
    const chooserTemplate = Handlebars.compile(templates['available-templates']);
    const templateLists = document.getElementsByClassName('available-templates');

    show(chooser);

    [].forEach.call(templateLists, list => {
      const category = list.dataset.category;
      const context = {
        forms: filterFormsByCategory(forms, category),
      };

      list.innerHTML = chooserTemplate(context);
    });
  }
};

// Enables simpler templating for forms.
Handlebars.registerHelper('input', renderInput);

// Make it easier for users to copy-paste the compiled templates.
enableCopyToClipboard();

// Add an event listener to re-initialize when the hash changes.
window.addEventListener('hashchange', () => {
  initialize(forms);
});

// Start this mother.
initialize(forms);

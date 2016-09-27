import forms from '../json/forms';
/*import { formToHandlebars } from './lib/templates';
import { renderInput, filterFormsByCategory } from './lib/forms';*/


const initialize = forms => {
  const formTemplate = Handlebars.compile($('#form-template').html());
  console.log('test', formTemplate, forms); /* eslint no-console: [ "error", { allow: [ "log" ] } ] */
};

initialize(forms);

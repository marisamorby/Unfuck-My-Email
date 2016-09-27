/**
 * Choose the correct input template based on the type.
 * See http://handlebarsjs.com/#helpers for more info.
 *
 * @return {String} the rendered template.
 */
export function renderInput() {
  var textInput = Handlebars.compile($('#input-text').html());
  var radioInput = Handlebars.compile($('#input-radio').html());

  return this.type === 'radio' ? radioInput(this) : textInput(this);
}

export function filterFormsByCategory(forms, category) {
  return forms.filter(form => form.category === category);
}

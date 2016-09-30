import templates from '../../data/templates/all';

/**
 * Get the correct template from the form data.
 * @param  {String} template_id the ID of the Handlebars template to load
 * @return {String}             the compiled template markup
 */
export function getEmailTemplate(template_id) {
  const emailTemplate = templates[template_id];

  return Handlebars.compile(emailTemplate);
}

/**
 * Choose the correct input template based on the type.
 * See http://handlebarsjs.com/#helpers for more info.
 *
 * @return {String} the rendered template.
 */
export function renderInput() {
  var textInput = Handlebars.compile(templates['input-text']);
  var radioInput = Handlebars.compile(templates['input-radio']);

  return this.type === 'radio' ? radioInput(this) : textInput(this);
}

/**
 * For copy-pasting to an email editor, remove <br> tags.
 * @param  {String} markup the template as HTML markup
 * @return {String}        the template with <br> tags removed
 */
export function removeBreakTags(markup) {
  return markup.replace(/<br[^>]*?>/gi, '').trim();
}

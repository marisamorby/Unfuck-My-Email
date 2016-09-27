/**
 * Build a Handlebars-friendly object from form data.
 * @param  {Array} formArray serialized form data array
 * @return {Object}          a key: value object for Handlebars
 */
export function formToHandlebars(formArray) {

  // Create an empty object to store template values
  var context = {};

  // Loop through form data and store in context
  for (var current_object = 0; current_object < formArray.length; current_object++) {
    var value = formArray[current_object];

    context[value.name] = value.value;
  }

  return context;
}

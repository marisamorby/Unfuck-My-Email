(function($, Handlebars) {

  /*
   * ------------------------------------------------------
   * ALL FORM DATA GOES HERE
   * ------------------------------------------------------
   * 
   * To add or remove forms and/or form questions, edit the
   * array below.
   */

  // Build the form based on the current 
  var forms = [
    {
      category: 'damage-control',
      name: 'The client didn’t respond to my last email about a missed deadline.',
      heading: 'Call first. If that doesn’t work, try this.',
      subheading: 'You’re probably pissed by now. Remember that you and your client are on the same team.',
      slug: 'second-missed-deadline',
      template_id: 'missed-deadline-two',
      questions: [
        {
          type: 'text',
          label: 'What’s your name?',
          name: 'name',
          id: 'name',
        },
        {
          type:'text',
          label: 'What’s your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
        {
          type:'radio',
          label: 'What day can you take a phone call?',
          name: 'date',
          options: [
            {
              id: 'today',
              label: 'Today',
              value: 'today',
            },
            { 
              id: 'tomorrow',
              label: 'Tomorrow',
              value: 'tomorrow',
            },
          ],
        },
        {
          type:'radio',
          label: 'What’s the best time for a call?',
          name: 'time_one',
          options: [
            {
              id: 'morning',
              label: 'Morning works best.',
              value: '8 am and 10 am',
            },
            { 
              id: 'afternoon',
              label: 'I’m not human until after 10 am.',
              value: '11 am and 1 pm',
            },
            { 
              id: 'evening',
              label: 'Is never an option? Late afternoon, I guess.',
              value: '3 pm and 5 pm',
            },
          ], 
        },
        {
          type:'radio',
          label: 'How long has it been since the deadline passed?',
          name: 'number_of_days',
          options: [
            {
              id: 'one day',
              label: 'Just a day.',
              value: 'a day',
            },
            { 
              id: 'two days',
              label: 'It’s been a couple days.',
              value: 'a couple days',
            },
            { 
              id: 'four days',
              label: 'It’s been a few days already.',
              value: 'quite a few days',
            },
            { 
              id: 'a week',
              label: 'A whole damn week. FTW!',
              value: 'about a week',
            },
          ], 
        },
      ],
    },
    {
      category: 'damage-control',
      name: 'The client didn’t get me what I needed and we missed a deadline.',
      heading: 'Get your project back on track.',
      subheading: 'And keep yourself sane.',
      slug: 'first-missed-deadline',
      template_id: 'missed-deadline-one',
      questions: [
        {
          type: 'text',
          label: 'What’s your name?',
          name: 'name',
          id: 'name',
        },
        {
          type:'text',
          label: 'What’s your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
        {
          type:'radio',
          label: 'When did your deadline pass?',
          name: 'day',
          options: [
            {
              id: 'today',
              label: 'Today',
              value: 'today',
            },
            { 
              id: 'two days',
              label: 'A couple days ago',
              value: 'a couple of days ago',
            },
            { 
              id: 'three days',
              label: 'A few days ago',
              value: 'earlier this week',
            },
          ],
        },
        {
          type:'radio',
          label: 'If you got the items you needed today, how much will it push back the timeline?',
          name: 'approximate_time',
          options: [
            {
              id: 'a few days',
              label: 'A few days',
              value: 'by at least a few days',
            },
            { 
              id: 'a week',
              label: 'A week',
              value: 'by about a week',
            },
            { 
              id: 'a couple weeks',
              label: 'A couple weeks',
              value: 'by a couple weeks',
            },
          ], 
        },
      ],
    },
    {
      category: 'damage-control',
      name: 'We’re coming up on a deadline and I need more information.',
      heading: 'Don’t get blamed for a missed deadline.',
      subheading: 'You need all the information so you can kick all the ass.',
      slug: 'upcoming-deadline',
      template_id: 'upcoming-deadline',
      questions: [
        {
          type: 'text',
          label: 'What’s your name?',
          name: 'name',
          id: 'name',
        },
        {
          type:'text',
          label: 'What’s your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
        {
          type:'radio',
          label: 'When is your first deadline coming up?',
          name: 'days',
          options: [
            {
              id: 'tomorrow',
              label: 'Tomorrow',
              value: 'coming up tomorrow',
            },
            { 
              id: 'today',
              label: 'Today',
              value: 'today',
            },
            { 
              id: 'two days',
              label: 'In a couple days',
              value: 'coming up in a few days',
            },
            { 
              id: 'this week',
              label: 'This week',
              value: 'coming up this week',
            },
          ],
        },
        {
          type:'radio',
          label: 'What items are you waiting on?',
          name: 'items',
          options: [
            {
              id: 'files',
              label: 'Files',
              value: 'the files we talked about',
            },
            { 
              id: 'photos',
              label: 'Photos',
              value: 'the photos we discussed',
            },
            { 
              id: 'materials',
              label: 'Various things',
              value: 'the materials we discussed',
            },
            { 
              id: 'several things',
              label: 'A whole bunch of shit',
              value: 'the items we talked about',
            },
          ], 
        },
        {
          type:'radio',
          label: 'When do you need it by?',
          name: 'date',
          options: [
            {
              id: 'yesterday',
              label: 'I needed it yesterday.',
              value: 'by the end of the day today',
            },
            { 
              id: 'tomorrow',
              label: 'Tomorrow',
              value: 'by tomorrow',
            },
            { 
              id: 'end of the week',
              label: 'By Friday at the latest.',
              value: 'by the end of the week',
            },
            { 
              id: 'soon',
              label: 'Soon, but we still have time.',
              value: 'by Monday of next week',
            },
          ], 
        },
      ],
    },
    {
      category: 'damage-control',
      name: 'My client is asking for lots of extra things.',
      heading: 'Start setting boundaries. Stop doing unpaid work.',
      subheading: 'Scope creep’s a real bitch. Don’t let it get you down.',
      slug: 'scope-creep',
      template_id: 'scope-creep',
      questions: [
        {
          type: 'text',
          label: 'What’s your name?',
          name: 'name',
          id: 'name',
        },
        {
          type:'text',
          label: 'What’s your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
         {
          type:'text',
          label: 'Which one of these new tasks do you think will take you the longest?',
          name: 'update_one',
          id: 'update_one',
        },
      ],
    },
    {
      category: 'project-lifecycle',
      name: 'Project Contract',
      heading: 'Every project needs a contract.',
      subheading: 'Yes, even this one. Don’t worry, I got you covered.',
      slug: 'contract',
      template_id: 'template-first-contract',
      questions: [
        {
          type: 'text',
          label: 'What’s your name?',
          name: 'name',
          id: 'name',
        },
        {
          type:'text',
          label: 'What’s your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
        {
          type:'radio',
          label: 'What type of meeting did you have?',
          name: 'meeting_type',
          options: [
            {
              id: 'call',
              label: 'Phone call',
              value: 'chat with me',
            },
            {
              id: 'video',
              label: 'Video call',
              value: 'meet with me',
            },
            {
              id: 'coffee',
              label: 'Met for coffee',
              value: 'meet me for coffee',
            },
            {
              id: 'person',
              label: 'In-person meeting',
              value: 'meet me',
            },
          ],
        },
        {
          type: 'radio',
          label: 'When did you talk?',
          name: 'timeline',
          options: [
            {
              id: 'today',
              label: 'Earlier today',
              value: 'today',
            },
            {
              id: 'this-week',
              label: 'Earlier this week',
              value: 'earlier this week',
            },
            {
              id: 'last-week',
              label: 'Last week',
              value: 'last week. I hope you had a great weekend',
            },
            {
              id: 'several-weeks',
              label: 'More than a week ago',
              value: 'the other day. I hope everything has been going well',
            },
          ],
        },
        {
          type: 'radio',
          label: 'How do you feel about this project?',
          name: 'project_feeling',
          options: [
            {
              id: 'excited',
              label: 'Excited!',
              value: 'excited to work on',
            },
            {
              id: 'stoked',
              label: 'Stoked!',
              value: 'stoked to work on',
            },
            {
              id: 'interested',
              label: 'Interested in learning more',
              value: 'curious to learn more about',
            },
          ],
        },
        {
          type: 'radio',
          label: 'How do you feel about project contracts?',
          name: 'contract_feeling',
          options: [
            {
              id: 'hassle',
              label: 'They’re a hassle to try and figure out.',
              value: 'can be a hassle',
            },
            {
              id: 'nervous',
              label: 'I’m nervous it’ll make my client uncomfortable.',
              value: 'can be a little annoying',
            },
            {
              id: 'untrustworthy',
              label: 'I’m worried my client will think I don’t trust them.',
              value: 'can feel really formal',
            },
            {
              id: 'necessary',
              label: 'They’re not fun to create, but I know we should have it.',
              value: 'are usually a bit of a pain to deal with'
            }
          ],
        },
      ],
    },
    /*{
      name: 'Cookies',
      heading: 'Who likes cookies?',
      subheading: 'I do! I do!',
      slug: 'cookies',
      template_id: 'template-cookies',
      questions: [
        {
          type: 'text',
          label: 'What is your name?',
          name: 'name',
          id: 'name',
        },
        {
          type: 'radio',
          label: 'What is your favoritie cookie?',
          name: 'cookie',
          options: [
            {
              id: 'sugar',
              label: 'Sugar Cookies',
              value: 'I love cookies! Sugar cookies are my favorite.',
            },
            {
              id: 'chocolate_chip',
              label: 'Chocolate Chip',
              value: 'I love cookies! Chocolate chip cookies are my favorite.',
            },
            {
              id: 'oatmeal',
              label: 'Oatmeal',
              value: 'I love cookies! But I oatmeal cookies are my favorite, so you shouldn’t trust my judgment.',
            },
            {
              id: 'nope',
              label: 'I don’t like cookies',
              value: 'I am a terrible person.',
            },
          ],
        },
      ],
    },*/
    {
      category: 'project-lifecycle',
      name: 'Follow-Up After a First Meeting',
      heading: 'Need to follow up with a client after your first meeting?',
      subheading: 'Answer these questions and we’ll sort that shit out.',
      slug: 'first-meeting-follow-up',
      template_id: 'contract-template',
      questions: [
        {
          type: 'text',
          label: 'What is your name?',
          name: 'name',
          id: 'name',
        },
        {
          type: 'text',
          label: 'What is your client’s name?',
          name: 'client_name',
          id: 'client_name',
        },
        {
          type: 'radio',
          label: 'How did you get together?',
          name: 'meeting_type',
          options: [
            {
              id: 'call',
              label: 'Phone call',
              value: 'chat with me',
            },
            {
              id: 'video',
              label: 'Video call',
              value: 'meet with me',
            },
            {
              id: 'coffee',
              label: 'Met for coffee',
              value: 'meet me for coffee',
            },
            {
              id: 'person',
              label: 'In-person meeting',
              value: 'meet me',
            },
          ],
        },
        {
          type: 'radio',
          label: 'When did you talk?',
          name: 'timeline',
          options: [
            {
              id: 'today',
              label: 'Earlier today',
              value: 'today',
            },
            {
              id: 'this-week',
              label: 'Earlier this week',
              value: 'earlier this week',
            },
            {
              id: 'last-week',
              label: 'Last week',
              value: 'last week. I hope you had a great weekend',
            },
            {
              id: 'several-weeks',
              label: 'More than a week ago',
              value: 'the other day. I hope everything has been going well',
            },
          ],
        },
        {
          type: 'radio',
          label: 'How do you feel about this project?',
          name: 'project_feeling',
          options: [
            {
              id: 'excited',
              label: 'Excited!',
              value: 'excited to work on',
            },
            {
              id: 'stoked',
              label: 'Stoked!',
              value: 'stoked to work on',
            },
            {
              id: 'interested',
              label: 'Interested in learning more',
              value: 'curious to learn more about',
            },
          ],
        },
        {
          type: 'radio',
          label: 'We gotta keep conversations going with clients. What are you going to do next?',
          name: 'communication',
          options: [
            {
              id: 'proposal',
              label: 'Send a proposal',
              value: 'send over a proposal',
            },
            {
              id: 'quote',
              label: 'Send a quote',
              value: 'send you a quote',
            },
            {
              id: 'phonecall',
              label: 'Call them on the phone',
              value: 'give you a call',
            },
            {
              id: 'connect',
              label: 'Send another email if you don’t hear back',
              value: 'connect with you',
            },
          ],
        },
      ],
    },
  ];

  /*
   * ------------------------------------------------------
   * HELPER FUNCTIONS
   * ------------------------------------------------------
   */

  /**
   * Build a Handlebars-friendly object from form data.
   * @param  {Array} formArray serialized form data array
   * @return {Object}          a key: value object for Handlebars
   */
  function formToHandlebars(formArray) {

    // Create an empty object to store template values
    var context = {};

    // Loop through form data and store in context
    for (var current_object = 0; current_object < formArray.length; current_object++) {
      var value = formArray[current_object];

      context[value.name] = value.value;
    }

    return context;
  }

  /**
   * Get the template as just text. This is so we can put it in a textarea.
   * @param  {String} markup template markup
   * @return {String}        template markup that won’t break jQuery
   */
  function unwrappedText(markup) {
    return $('<p>' + markup + '</p>').text().trim();
  }

  /**
   * Get the correct template from the form data.
   * @param  {String} template_id the ID of the Handlebars template to load
   * @return {String}             the compiled template markup
   */
  function getEmailTemplate(template_id) {
    var emailTemplate = $('#' + template_id).html();

    return Handlebars.compile(emailTemplate);
  }

  /**
   * Show a success message briefly after copying to clipboard.
   * @return {void}
   */
  function showCopiedMessage() {
    var confirmation = $('.copied-box');

    // Remove the class so the message fades in (CSS animates it).
    confirmation.removeClass('copied-box-hidden');

    // After 1 second, add the class again to fade it out.
    setTimeout(function() {
      confirmation.addClass('copied-box-hidden');
    }, 1000);
  }

  /**
   * Choose the correct input template based on the type.
   * See http://handlebarsjs.com/#helpers for more info.
   * 
   * @return {String} the rendered template.
   */
  function renderInput() {
    var textInput = Handlebars.compile($('#input-text').html());
    var radioInput = Handlebars.compile($('#input-radio').html());

    return this.type === 'radio' ? radioInput(this) : textInput(this);
  }

  function filterFormsByCategory(forms, category) {
    return forms.filter(form => form.category === category);
  }

  /**
   * Updates the page to show the proper markup.
   * @param  {Object} forms the forms available to the app
   * @return {void}
   */
  function initialize(forms) {

    // Set up the variables we’ll need to build this sumbitch.
    var formTemplate = Handlebars.compile($('#form-template').html());
    var chooser = $('#form-chooser');
    var form = $('#template-questions');
    var template = $('#template');
    var templateText = $('.template-text');
    var copyPaste = $('.copy-paste');
    var formSlug = window.location.hash.split('#')[1];
    var formValues = forms.filter(function (form) {
      return form.slug === formSlug;
    })[0];

    // Hide the template for now.
    template.hide();

    // Make sure a valid form was selected before we get all crazy here.
    if (formValues) {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Forms',
        eventAction: 'open',
        eventLabel: formSlug
      });


      // Hide the chooser.
      chooser.hide();

      // Hide the form to start.
      form.hide();

      // Build the form.
      form.html(formTemplate(formValues));

      // Capture the form submission.
      form.on('submit', function(event) {
        event.preventDefault();

        // Convert the form data into an object we can use with Handlebars.
        var context = formToHandlebars(form.serializeArray());

        // Load the email template to match this form.
        var emailTemplate = getEmailTemplate(context.template_id);

        // Get the compiled markup from the template.
        var compiled = emailTemplate(context);

        // Put the compiled templates in the display and copy-pasteable areas.
        templateText.html(compiled);
        copyPaste.html(unwrappedText(compiled));

        // Show the template and hide the form.
        template.show();
        form.hide();
      });

      form.fadeIn();
    } else {

      /* 
       * If we get here, there’s no valid form to display and we need the form 
       * chooser. Make sure it’s visible.
       */
      chooser.show();

      // Get the template to display the avaiable forms.
      var chooserTemplate = Handlebars.compile($('#available-templates').html());

      // Get the elements that should display the forms.
      var availableTemplates = $('.available-templates');

      // Loop through display elements and show forms matching each category.
      availableTemplates.each(function() {
        var category = $(this).data('category');
        var context = {
          forms: filterFormsByCategory(forms, category),
        };
        $(this).html(chooserTemplate(context));
      });

      // Add an event listener so we can show the right form when the user chooses.
      // var chooserForm = $('#choose-a-form');
      // chooserForm.on('submit', function(event) {

      //   // Stop the form from actually submitting.
      //   event.preventDefault();

      //   // Get the 
      //   var submitted = chooserForm.serializeArray();
      //   var data = formToHandlebars(submitted);

      //   if (data.form) {
      //     window.location.hash = '#' + data.form;
      //   }
      // });
    }
  }

  // Helper to compile templates within templates.
  Handlebars.registerHelper('input', renderInput);

  // Initialize the copy-to-clipboard button.
  var btn = document.getElementById('btn');
  var clipboard = new Clipboard(btn);
  clipboard.on("success", showCopiedMessage);

  /*
   * ------------------------------------------------------
   * START THE APP HERE
   * ------------------------------------------------------
   */

  // Add an event listener to re-initialize when the hash changes.
  window.addEventListener('hashchange', function(event) {
    initialize(forms);
  });

  // Start the party.
  initialize(forms);

})(jQuery, Handlebars);
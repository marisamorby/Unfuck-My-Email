export default `
<div class="row question-heading">
  <div class="col-md-12">
    <h1 class="question-info">{{ heading }}</h1>
    <h2>{{ subheading }}</h2>
  </div>
</div>
{{#each questions}}
  {{{input}}}
{{/each}}
<div class="row btn-group" id="submit">
  <div class="col-md-6 col-md-offset-3">
    <button class="btn btn-default btn-lg center-block" type="submit">
      Gimme my template
    </button>
  </div>
</div>
<input type="hidden" name="template_id" value="{{ template_id }}">
`;

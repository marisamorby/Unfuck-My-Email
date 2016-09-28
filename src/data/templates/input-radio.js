export default `
<div class="row question-block">
  <div class="col-md-8 col-md-offset-2">
    <h2 class="question-title">{{ label }}</h2>
    <div class="question-options">
      {{#each options}}
      <div class="input-group">
        <input type="radio" name="{{ ../name }}" id="{{ id }}" value="{{ value }}">
        <label for="{{ id }}" class="question-text">{{ label }}</label>
      </div>
      {{/each}}
    </div>
  </div>
</div>
`;

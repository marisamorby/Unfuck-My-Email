export default `
<ul class="email-list">
  {{#each forms}}
  <li>
    <a class="email-type-link" href="#{{ slug }}">{{ name }}</a>
  </li>
  {{/each}}
</select>
`;

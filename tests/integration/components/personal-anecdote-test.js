import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('personal-anecdote', 'Integration | Component | personal anecdote', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{personal-anecdote}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#personal-anecdote}}
      template block text
    {{/personal-anecdote}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

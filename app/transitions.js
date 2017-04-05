export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('tell-your-story'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('tell-your-story'),
    this.toRoute('personal-anecdote'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('personal-anecdote'),
    this.toRoute('research-info'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute(['tell-your-story', 'personal-anecdote', 'research-info']),
    this.toRoute('index'),
    this.use('toDown')
  );
}

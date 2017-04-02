export default function() {
  this.namespace = '/api';
  this.get('/disorders', function() {
    return {
      data: [{
        type: 'disorders',
        id: 'depression',
        attributes: {
          title: 'Depression'
          }
        }, {
        type: 'disorders',
        id: 'anxiety',
        attributes: {
          title: 'Anxiety'
        }
        }, {
        type: 'disorders',
        id: 'bipolar-disorder',
        attributes: {
          title: 'Bipolar Disorder'
        }
        }, {
        type: 'disorders',
        id: 'dementia',
        attributes: {
          title: 'Dimentia'
        }
        }, {
        type: 'disorders',
        id: 'adhd',
        attributes: {
          title: 'ADHD'
        }
        }, {
        type: 'disorders',
        id: 'schizophrenia',
        attributes: {
          title: 'Schizophrenia'
        }
        }, {
        type: 'disorders',
        id: 'ocd',
        attributes: {
          title: 'OCD'
        }
        }, {
        type: 'disorders',
        id: 'autism ',
        attributes: {
          title: 'Autism'
        }
      }]
    };
  });
}

export default function() {
  this.namespace = "/api";
  this.get("/disorders", function() {
    return {
      data: [{
        type: "disorders",
        id: "depression",
        attributes: {
          title: "Depression",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "anxiety",
        attributes: {
          title: "Anxiety",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "bipolar-disorder",
        attributes: {
          title: "Bipolar Disorder",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "dementia",
        attributes: {
          title: "Dimentia",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "adhd",
        attributes: {
          title: "ADHD",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "schizophrenia",
        attributes: {
          title: "Schizophrenia",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "ocd",
        attributes: {
          title: "OCD",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
          }
        },
        {
        type: "disorders",
        id: "autism",
        attributes: {
          title: "Autism",
          summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
        }
      },
      {
      type: "disorders",
      id: "ptsd",
      attributes: {
        title: "PTSD",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est nisl, efficitur at odio id, tincidunt condimentum nulla. Praesent ac augue lobortis, feugiat dui ut, faucibus nulla. Nulla vel faucibus dolor, non vehicula ante. Donec vestibulum mollis turpis, at auctor velit iaculis ut. Cras vitae orci maximus, varius lorem quis, pharetra metus."
      }
    }]
    };
  });

  this.get("/disorders/:id", function (db, request) {
    return { data: disorders.find((disorder) => request.params.id === disorder.id) };
  });

}

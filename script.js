fetch('opdracht2_bijlage.json')
  .then(response => response.json())
  .then(data => {
    let filteredData = data;

    function buildPersonList(persons) {
      // Leeg de huidige lijst
      const personContainer = document.getElementById('person-details');
      personContainer.innerHTML = '';

      persons.forEach(person => {
        const { voornaam, achternaam, nationaliteit, leeftijd, gewicht } = person;

        const personDiv = document.createElement('div');
        personDiv.classList.add('person');

        personDiv.innerHTML = `
          <p>Voornaam: <span>${voornaam}</span></p>
          <p>Achternaam: <span>${achternaam}</span></p>
          <p>Nationaliteit: <span>${nationaliteit}</span></p>
          <p>Leeftijd: <span>${leeftijd}</span></p>
          <p>Gewicht: <span>${gewicht}</span></p>
        `;

        personContainer.appendChild(personDiv);
      });
    }

    // Eventhandler voor de knop
    document.getElementById('filter-button').addEventListener('click', () => {
      const ageInput = document.getElementById('age-input').value;
      const filteredPersons = data.filter(person => person.leeftijd > ageInput);

      buildPersonList(filteredPersons);
    });
    buildPersonList(data);
  })
  .catch(error => {
    console.log('Er is een fout opgetreden bij het laden van de gegevens:', error);
  });

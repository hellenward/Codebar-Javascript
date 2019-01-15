function listDomElements() {
  var children = document.body.childNodes;

  for (var i = 0; i< children.length; i ++) {
    console.log(i, children[i]);
  }
}

listDomElements()

function brightonAwesome() {
  var bob = document.getElementById('city');
  bob.innerText="Brighton";
}

var description = document.getElementById('city');
console.log(description.innerHTML);

var london = {
  name: 'London',
  population: 8308369,
  tallestBuilding: {
     name:  'Shard',
     height: '310m'
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};

function displayPopulation() {
  var population = document.createElement('p');

  var content = document.createTextNode('Population: ' + london.population);

  population.appendChild(content);

  document.body.appendChild(population);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;

  var jsonString = this.responseText;
  var cardList = JSON.parse(jsonString);
  displayCards(cardList);
}

var displayCards = function(cardList) {

  cardList.cards.forEach(function(card) {
    var nameLi = createName(card);
    var imageLi = createImage(card);
    var typeLi = createType(card);

    var ul = document.querySelector('#card-list');
    // ul.appendChild(nameLi);
    ul.appendChild(imageLi);
    // ul.appendChild(typeLi);
  })

  findTypes(cardList);
}

var findTypes = function(cardList) {
  var creatureCard = 0;
  var instantCard = 0;
  var enchantmentCard = 0;
  var artifactCard = 0;
  var sorceryCard = 0;

  for (card of cardList.cards) {
    if (card.types[0] === 'Creature') {
      creatureCard ++;
    }
    if (card.types[0] === 'Instant') {
      instantCard ++;
    }
    if (card.types[0] === 'Enchantment') {
      enchantmentCard ++;
    }
    if (card.types[0] === 'Artifact') {
      artifactCard ++;
    }
    if (card.types[0] === 'Sorcery') {
      sorceryCard ++;
    }  
  }

  console.log(cardList.cards)
  console.log(creatureCard);
  console.log(instantCard);
  console.log(enchantmentCard);
  console.log(artifactCard);
  console.log(sorceryCard);
}

var createName = function(card) {
  var li = document.createElement('li');
  li.innerText = card.name;
  return li;
}

var createImage = function(card) {
  var li = document.createElement('li');
  var image = document.createElement('img');
  image.src = card.imageUrl
  image.style.width = '150px';
  image.style.height = '300';
  return li.appendChild(image);
}

var createType = function(card) {
  var li = document.createElement('li');
  li.innerText = card.types[0];
  return li;
}

var app = function() {
  var url = "https://api.magicthegathering.io/v1/cards";
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);

window.addEventListener('load', function() {
  new PieChart();
});
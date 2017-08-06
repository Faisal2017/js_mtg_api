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
    ul.appendChild(nameLi);
    ul.appendChild(imageLi);
    ul.appendChild(typeLi);
  })
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
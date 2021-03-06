//Die 
function Die(numSides) {
  this.numSides = numSides;
  this.value = 0;
}

Die.prototype.calcValue = function() {
  this.value = Math.floor((Math.random()*this.numSides)+1);
}

//Board
function Board(view) {
  this.view = view;

}
Board.prototype.drawDie = function() {
  this.view.find('.dice').append('<div class="die">0</div>');
};

Board.prototype.drawAllDie = function(cup) {
  this.view.find('.die').each(function(k, die) {
     $(die).text(cup[k].value);
  });
};
Board.prototype.setEventListenerForAdd = function (game) {
  this.view.on('click', 'button.add', function() {
    game.addDieToCup();
  });
}
Board.prototype.setEventListenerForRoll = function (game) {
  this.view.on('click', 'button.roll', function() {
    game.rollAllDie();
  });
}

//Game
function Game(view, numSides) {
  this.cup = [];
  this.board = new Board(view);
  this.numSides = numSides;
  // this.view = view;
}

Game.prototype.start = function() {
  this.board.setEventListenerForAdd(this);
  this.board.setEventListenerForRoll(this);
};

Game.prototype.addDieToCup = function() {
    var die = new Die(this.numSides);
    this.cup.push(die);
    this.board.drawDie();
};

Game.prototype.rollAllDie = function() {
  var self = this;
  this.cup.forEach(function(die,k) {
    die.calcValue();
  });
  self.board.drawAllDie(this.cup);
};

$(document).ready(function() {

  numSides = 6;
  var game = new Game($('#roller'), numSides);
  game.start();
  var otherGame = new Game($('#other_roller'), 12);
  otherGame.start();

});

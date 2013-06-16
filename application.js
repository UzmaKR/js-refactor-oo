function Die(numSides, value) {
  this.numSides = numSides;
  this.value = value;
}

Die.prototype.drawDie = function() {
  $('.dice').append('<div class="die">0</div>');
};

function Cup() {
  this.bunch = [];
}

Cup.prototype.drawAllDie = function() {
  cup = this;
  $('.die').each(function(k, die) {
     $(die).text(cup.bunch[k].value); 
   });
};

Cup.prototype.addDieToCup = function(numSides) {
    var die = new Die(numSides, 0);
    this.bunch.push(die);
    die.drawDie();
};

Cup.prototype.rollAllDie = function() {
  this.bunch.forEach(function(die,k) {
    die.value = Math.floor((Math.random()*die.numSides)+1);
  });
  this.drawAllDie();
};

function bindEvents(numSides, cuppa) {
    $('#roller button.add').on('click', function() {
      cuppa.addDieToCup(numSides);
    });

    $('#roller button.roll').on('click', function() {
      cuppa.rollAllDie();
    });
};


$(document).ready(function() {

var cuppa = new Cup();
numSides = 6;
bindEvents(numSides, cuppa);

});

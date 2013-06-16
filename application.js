function Die(numSides, value) {
  this.numSides = numSides;
  this.value = value;
}

function Cup() {
  this.bunch = [];
}

Die.prototype.drawDie = function() {
  $('.dice').append('<div class="die">0</div>');
};


Cup.prototype.drawAllDie = function(cup) {
  $('.die').each(function(k, die) {
     $(die).text(cup.bunch[k].value); 
   });
};

Cup.prototype.addDieToCup = function(numSides, cuppa) {
    var die = new Die(numSides, 0);
    cuppa.bunch.push(die);
    die.drawDie();
};

Cup.prototype.rollAllDie = function(cup) {
  cup.bunch.forEach(function(die,k) {
    die.value = Math.floor((Math.random()*die.numSides)+1);
  });
  cup.drawAllDie(cup);
};

function bindEvents(numSides, cuppa) {
    $('#roller button.add').on('click', function() {
      cuppa.addDieToCup(numSides, cuppa);
    });

    $('#roller button.roll').on('click', function() {
      cuppa.rollAllDie(cuppa);
    });
};


$(document).ready(function() {

var cuppa = new Cup();
numSides = 6;
bindEvents(numSides, cuppa);

});

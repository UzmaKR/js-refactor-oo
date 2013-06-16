function Die(numSides, value) {
  this.numSides = numSides;
  this.value = value;
};

function Cup() {
  this.bunch = [];
}

function drawDie() {
  $('.dice').append('<div class="die">0</div>');
};

function drawAllDie(cup) {
  $('.die').each(function(k, die) {
     $(die).text(cup.bunch[k].value); 
   });
};

function addDieToCup(numSides, cuppa) {
    var die = new Die(numSides, 0);
    cuppa.bunch.push(die);
    drawDie();
};

function rollAllDie(cup) {
  cup.bunch.forEach(function(die,k) {
    die.value = Math.floor((Math.random()*die.numSides)+1);
  });
  drawAllDie(cup);
};

function bindEvents(numSides, cuppa) {
    $('#roller button.add').on('click', function() {
        addDieToCup(numSides, cuppa);
    });

    $('#roller button.roll').on('click', function() {
      rollAllDie(cuppa);
    });
};


$(document).ready(function() {

var cuppa = new Cup();
numSides = 6;
bindEvents(numSides, cuppa);

});

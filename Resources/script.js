var num1 = null;
var num2 = null;
var currentNumber = 1;
var op;
var answer;
var click = 1;


var $screen = $("#screen");
var $number = $(".number");
var $operator = $(".operator")


function findAnswer() {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  
  if (op === " + ") {
    answer = num1 + num2;
  } else if (op === " − ") {
    answer = num1 - num2;
  } else if (op === " × ") {
    answer = num1 * num2;
  } else if (op === " ÷ ") {
    answer = num1 / num2;
  }
  num1 = answer;
  num2 = null;
  currentNumber = 1;
}
function reset(){
  num1 = null;
  num2 = null;

  currentNumber = 1;
  click = 0;
}
function more() {
  if (click > 8) {
    
    click = click - 5;
  }
  if (currentNumber === 2) {
    findAnswer();
    $screen.empty();
    $screen.append(num1);
  }
}


$number.on('click', function() {
  click++;
  if (click >8) {
    return;
  }
  
  var numberPressed = $(this).html();
  $screen.append(numberPressed);  
  
  if (currentNumber === 1) {
    if (num1 === null) {
      $screen.empty();
      
      num1 = numberPressed;
      $screen.append(numberPressed);  
    } else {
      num1 = num1 + numberPressed;
    }
  } else if(currentNumber === 2) {
    if (num2 === null) {
      num2 = numberPressed;
    } else {
      num2 = num2 + numberPressed
    }
  }
});
$operator.on('click', function() {
  if (num1 === null){return;}
  more();
  
  op = $(this).html();
  $screen.append(op)

  currentNumber++;
});


$("#equals").on('click', function(){
  if (num1 === null) {return;}
  if (num2 === null) {return;}
  
  $screen.append(' = ');

  findAnswer();
  if (click >8) {
    $screen.empty();
    var answerLength = answer.toString;
    click = answerLength.length;
  }

  $screen.append(answer);
  click = 1;
});

$("#clear").on('click', function(){
  $screen.empty();
  reset();
});

/*

$number.on('click', function() {
  var numberPressed = $(this).html();
  $screen.append(numberPressed);  
  
  if (currentNumber === 1) {
    if (num1 === null) {
      num1 = numberPressed;
    } else {
      num1 = num1 + numberPressed;
    }
  } else if(currentNumber === 2) {
    if (num2 === null) {
      num2 = numberPressed;
    } else {
      num2 = num2 + numberPressed
    }
  }
});

$operator.on('click', function() {
  op = $(this).html();
  $screen.append(op)

  currentNumber++;
});

$("#equals").on('click', function(){
  $screen.append(' = ');
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1, op, num2);
  var answer;

  if (op === " + ") {
    answer = num1 + num2;
  } else if (op === " − ") {
    answer = num1 - num2;
  } else if (op === " × ") {
    answer = num1 * num2;
  } else if (op === " ÷ ") {
    answer = num1 / num2;
  }

  $screen.append(answer);
  reset();
});

$("#clear").on('click', function(){
  $screen.empty();
  reset();
});

function write0(){
  $screen.append(0);
}
function write1(){
  $screen.append(1);
}
function write2(){
  $screen.append(2);
}
function write3(){
  $screen.append(3);
}
function write4(){
  $screen.append(4);
}
function write5(){
  $screen.append(5);
}
function write6(){
  $screen.append(6);
}
function write7(){
  $screen.append(7);
}
function write8(){
  $screen.append(8);
}
function write9(){
  $screen.append(9);
}

$("#add").on('click', function(){
  $screen.append(" + ");
  op = "+";
  currentNumber++;
})
$("#minus").on('click',function(){
  $screen.append(" − ");
  op = "-";
  currentNumber++;
})
$("#multiply").on('click', function(){
  $screen.append(" × ");
  op = "*";
  currentNumber++;
})
$("#divide").on('click', function(){
  $screen.append(" ÷ ");
  op = "/";
  currentNumber++;
})
*/
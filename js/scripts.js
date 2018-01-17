
$(document).ready(function() {
  //newString = [];
  //checkString = $(".sentance").text();
  originalArray = $(".sentance").text().split("");
  var vowelString = ["a", "e", "i", "o", "u", "y"];
  stringArray = $(".sentance").text().split("");
  for (var i = 0; i < stringArray.length; i++) {
    for (var o = 0; o < vowelString.length; o++) {
      if (stringArray[i] == vowelString[o]) {
        stringArray[i] = "-"
        break;
      }
    }
  }
  modString = stringArray.join("")
  console.log(modString);
  //$(".hidden-sentance").text(newString);

  $(".modified-string").text(modString);

  $(".sentance").click(function() {
    $(".sentance").hide();
    $(".modified-string").show();
  });
  $(".modified-string").click(function() {
    $(".sentance").toggle();
    $(".modified-string").toggle();
  });



    $("#wordPuzzle").submit(function(event) {
      event.preventDefault();
      var userInput = $("input#puzzle").val();
      for (var i = 0; i < originalArray.length; i++) {
        if (userInput == originalArray[i]) {
          stringArray[i] = userInput;
        }
      };
      modString = stringArray.join("")
      $(".modified-string").text(modString);
    });
});

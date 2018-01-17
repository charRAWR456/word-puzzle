
$(document).ready(function() {
  //newString = [];
  //checkString = $(".sentance").text();
  var originalString = $(".sentance").text();
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
  var modString = stringArray.join("")
  console.log(modString);
  //$(".hidden-sentance").text(newString);

  $(".modified-string").text(modString);

  $(".sentance").click(function() {
    $(".sentance").hide();
    $(".modified-string").show();
  })
  $(".modified-string").click(function() {
    $(".sentance").toggle();
    $(".modified-string").toggle();



    $("#wordPuzzle").submit(function(event) {
      event.preventDefault();



    });
  });
});

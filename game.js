
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var randomNumber;
var levelNumber = 0;
var checker = 0;

var i=0;
var k=0;

$(document).keydown(function()
{
  if(i<1)
  {
    i++;
    k=0;
    newSequence();
  }

});

function newSequence()
{

  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  $("#level-title").text("Level " + (++levelNumber));

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}


  $(".btn").click(function()
  {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);


    if( userClickedPattern[checker] !==  gamePattern[checker] )
      {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");

        setTimeout(function()
        {  $("body").removeClass("game-over"); }, 100);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        empty(gamePattern);
        empty(userClickedPattern);

        i = 0;
        k = 1;
        levelNumber = 0;

        checker = 0;

      }

    if(k==0) { checker++; }


    if(checker == gamePattern.length && k == 0 )
    {
      empty(userClickedPattern);
      checker = 0;

      setTimeout(function()
        { newSequence();} , 1000 );

    }

  });

function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed");

  setTimeout(function()
  {  $("#" + currentColour).removeClass("pressed"); }, 100);

  }

function empty(arrayName)
{
  // gamePattern.length = 0;
  arrayName.length = 0;
}

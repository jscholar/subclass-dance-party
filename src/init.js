$(document).ready(function() {
  window.dancers = [];
  window.surfaceDogs = [];
  window.mouseHover = false;
  window.mouseX = $('body').width() / 2;
  window.mouseY = $('body').height() / 2;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // If we're making SurfaceDog. Push into surfaceDog array
    if (dancerMakerFunctionName === 'SurfaceDog') {
      window.surfaceDogs.push(dancer);
    }

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.addManyScuba').on('click', function(event) {
    for (let i = 0; i < 100; i++) {
      var dancer = new window.ScubaDog(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );

      window.dancers.push(dancer);
      $('body').append(dancer.$node);

    }

  });


  $('.lineUpDancersButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(i, window.dancers.length);
    }
  });

  $('body').mouseover(function() {
    window.mouseHover = true;
  });

  $('body').mouseout(function() {
    window.mouseHover = false;
  });

  $('body').mousemove(function(event) {
    // Remember mouse position
    window.mouseX = event.pageX;
    window.mouseY = event.pageY;
  });
});


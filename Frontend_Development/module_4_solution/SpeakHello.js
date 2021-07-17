(function(window) {
  var helloSpeaker = new object();
  var speakWord = "Hello";
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

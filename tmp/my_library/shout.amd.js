define("my_library/shout",
  ["exports"],
  function(__exports__) {
    "use strict";
    var shout = function(s) {
      return s.toUpperCase();
    }


    __exports__.shout = shout;
  });
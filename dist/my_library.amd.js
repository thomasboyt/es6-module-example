define("my_library", 
  ["./my_library/shout","./my_library/ssshh","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var shout = __dependency1__.shout;
    var ssshh = __dependency2__.ssshh;

    __exports__.shout = shout;
    __exports__.ssshh = ssshh;
  });
define("my_library/shout", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var shout = function(s) {
      return s.toUpperCase();
    };

    __exports__["default"] = shout;
  });
define("my_library/ssshh", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var ssshh = function(s) {
      return s.toLowerCase();
    };

    __exports__["default"] = ssshh;
  });
(function(window, undefined) {
  var dictionary = {
    "f2b1b7c2-fea5-4417-a7df-5789a3e5c972": "Record",
    "2f3ec721-1ce3-4c3c-b0c9-f3e1d95ebdf0": "Sign Up",
    "72d3ce7c-3290-4c25-992e-c6d14ea12e5b": "Candidates",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign In",
    "ca161e70-5eb1-4058-9d9f-d8889ff892bb": "Vote",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
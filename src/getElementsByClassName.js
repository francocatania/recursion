// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var targetClassNodes = [];

  var lookForElementsWithClass = function(element) {
  	if (element.classList && element.classList.contains(className)) {
  	  targetClassNodes.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
    	lookForElementsWithClass(element.childNodes[i]);
    }
  }
  
  lookForElementsWithClass(document.body);

  return targetClassNodes;
};



// CHEQUEA
// element.classList.contains(className);


//getElementsByClassName(targetClassName);
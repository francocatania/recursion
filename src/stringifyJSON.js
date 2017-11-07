// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
// BASE CASES.
  if (typeof(obj) === 'number') {
	return '' + obj;
  }

  if (obj === null) {
  	return '' + obj;
  }

  if (typeof(obj) === 'boolean') {
    return '' + obj;	
  }

  if (typeof(obj) === 'string') {
  	return '"' + obj + '"';
  }

// Recursion Cases.
  if (Array.isArray(obj)) {
  	var stringifiedArray = '[';
  	if (obj.length) {
  	  for (var i = 0; i < obj.length; i++) {
  	    if (i != obj.length - 1) {
  		  stringifiedArray += (stringifyJSON(obj[i]) + ',');
  	    } else {
  		  stringifiedArray += (stringifyJSON(obj[i]) + ']');
  	    }
  	  }	
  	} else {
  	  stringifiedArray += ']';
  	}
  	return stringifiedArray;
  };

  if (typeof(obj) === 'object') {
  	var stringifiedObj = '{';
  	for (var k in obj) {
  	  if (typeof(obj[k]) !== 'function' && obj[k] !== undefined) {
  	  	if (k === Object.keys(obj)[Object.keys(obj).length - 1]) {
	      stringifiedObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]);
	    } else {
	  	  stringifiedObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
	    }	
  	  }
	}

  	stringifiedObj += '}'
  	return stringifiedObj;
  }

};
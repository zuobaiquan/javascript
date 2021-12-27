/**
 * @method String to Integer
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var type = typeof str;
	debugger
	switch (type){
		case 'boolean': 
			booleanToNum(str);
		case 'string':
			return strToNum(str);
		case 'function':
			return NaN;
		case 'object':
			if (str !== null) {
				// is object
				return objToNum(str);
			} else if (str === void 0) {
				// is undefined
				return NaN;
			} else {
				// is null
				return 0;
			}
		case 'number':
			return str;
	} 
    return str;
};	


var booleanToNum = function (str) {
	return str ? 1 : 0;
};

var strToNum = function (str) {
	if (str.length === 0) {
		return 0;
	}
	var d = str.replace(/^(^-?\d*\.?\d*)(\D*)/, '$1');
	if (d) {
		return + d;
	} else {
		return NaN;
	}
};

var objToNum = function (str) {
	var value = str.valueOf();
	switch (typeof value) {
		case 'number':
			return value;
		case 'string':
			return strToNum(value);
		case 'boolean': 
			return booleanToNum(value);
		default: 
			return objToNum(value.toString());
			// return ;
	}
};

console.log(myAtoi(''));
console.log(myAtoi('+'));
console.log(myAtoi('-'));
console.log(myAtoi('fff222'));
console.log(myAtoi('222ffff'));
console.log(myAtoi({'t': 'test'}));
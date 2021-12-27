// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	var _map = [];
	var ret = [];
	var _s = '';
	for (var i = strs.length - 1; i >= 0; i--) {
		_s = sortStr(strs[i]);
		for( var j = _map.length - 1; j >= 0; j--) {
			if (_s === _map[j]) {
				ret[j].push(strs[i]);
				break;
			}
		}
		if (j < 0) {
			_map.push(_s);
			ret.push([strs[i]]);
		}
	}
	return ret;
};

var sortStr = function (str) {
	var _s = str.split('');
	return _s.sort().join('');
};

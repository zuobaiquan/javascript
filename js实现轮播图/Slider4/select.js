	function $(select){
		if (typeof select != 'string') {
			console.log('传入的参数有误');			
			return null;
		}
		var firstChar = select.charAt(0);
		switch(firstChar){
			case '#':
				return document.getElementById(select.substr(1));
			break;
			case '.':
				if (document.getElementsByClassName){
					return document.getElementsByClassName(select.substr(1));
				} else {
					var result = [];
					var allElemnts = document.getElementsByTagName('*');
					console.log(allElemnts);
					for (var i = 0; i < allElemnts.length; i++){
						var e = allElemnts[i];
						var className = e.className;
						var classArr = className.split(' ');
						for (var j = 0; j < classArr.length; j++){
							var c = classArr[j];
							if (c == select.substr(1)) {
								result.push(e);
								break;
							}
						}
					}
					return result;
				}
			break;
			default :
				return document.getElementsByTagName(select);
		}
	}
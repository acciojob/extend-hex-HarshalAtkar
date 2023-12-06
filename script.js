const extendHex = (shortHex) => {
  // write your code here
	let newstring;
	for(i of hortHex){
		if(shortHex(i)!=#){
			newstring=shortHex(i)+shortHex(i);
		}
		return newstring;
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

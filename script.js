const extendHex = (shortHex) => {
  // write your code here
	let newstring;
	for(let i of shortHex){
		if(shortHex(i)!=#){
			newstring=newstring+shortHex(i)+shortHex(i);
		}
		return #+newstring;
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

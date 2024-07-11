const arr = [0,1];
function fibonacci(num) {
// your code here
	if(num===0 || num===1)
	  return arr[num];
	  
	 arr[num] = fibonacci(num-1)+fibonacci(num-2)
	return arr[num];
}

module.exports = fibonacci;

console.log("--------------------Assignment No. 2-------------------");
var str="       Hey you are doing good, keep it up    "
console.log("Q1---string is:-",str);
console.log("---------------------------------------------------------------------------");

var leng = str.length;
console.log("Q2---length is",leng);
console.log("---------------------------------------------------------------------------");


var trimStr = str.trim();
console.log("step3---removing string spaces:", trimStr);
console.log("string:", trimStr.length);
console.log("---------------------------------------------------------------------------");


var str = "      Hey you are doing good, keep it up   ";
var extraSpacesCount = str.length -str.trim().length;
var trimStr = str.trim();
console.log("Q4---extra spaces removed:", extraSpacesCount);
console.log("---------------------------------------------------------------------------");

var charAt0 = trimStr.charAt(0);
console.log('Q5---First and last charector is:- ' ,trimStr.charAt(0),"and",trimStr.charAt(33));
console.log("---------------------------------------------------------------------------");

var charlenth = trimStr.split(' ').length;
console.log("Q6---total number of words remaing:-",charlenth);
console.log("---------------------------------------------------------------------------");

var result = str.slice(24,28);
console.log("Q7---we print good:-",result);
console.log("---------------------------------------------------------------------------");


var Substring = str.substring(23);
console.log("Q8---Substring starting from index 22 substring():", Substring);

var substringSlice = str.slice(23);
console.log("substing starting from index 22 using slice():", substringSlice);
console.log("---------------------------------------------------------------------------");

var strwords =  trimStr.includes('up');
console.log("Q9---is string ends with word “up” :-",strwords);
console.log("---------------------------------------------------------------------------");

var strwords =  trimStr.includes('Hey');
console.log("Q10---is string start with word “Hey” :-",strwords);
console.log("---------------------------------------------------------------------------");
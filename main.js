
// Задание 1
// Реализовать функцию getSevenCol, которая принимает на вход массив чисел, 
// а возвращает число с подсчитанным количеством чисел 7.

// Пример:

// console.log(getSevenCol([1, 7, 4, 77, 73])); // 4

// #1
function getSevenCol(arr) { // arr = [1,2,3,4,7,7 7,1 7,9 2]

	let str = arr.join('');
	let result = 0;
	for (let i of str) {
		if (i === '7') {
			result++;
		}
	}
	return result;
}

// #2
function getSevenCol1(arr){
  
  let StringOfNumber = arr.join('');
  return(StringOfNumber.split('7').length - 1)
  
}



let arr = [1,5,77,12,177,4,7]
console.log(getSevenCol(arr))
console.log(getSevenCol1(arr))


// Задание 2
//  Реализовать функцию arrToStr(), которая на вход принимает массив строк,
//  а возвращает строку, которая последовательно поочередно забрала 
//  из начала и конца массива все элементы.

// Пример:

// console.log(arrToStr(["a", "b", "c", "d", "e", "f"])); // "afbecd"



function arrToStr(arr) {
	let mystring = arr.join("");
	let newStr = "";

		for (var i = 0; i < mystring.length/2; i++) {

		newStr = newStr + mystring[i] + mystring[mystring.length-i-1];
	
	}

	return newStr;
}


console.log(arrToStr(["a", "b", "c", "d", "e", "f"]))
























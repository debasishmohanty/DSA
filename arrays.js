// Given an array of numbers print the numvbers which are same and must be legible when rotated 180 degree.
// In below example by 180 degree rotating, the array is { 201: invalid as by rotating 2 it becomes invliad number}
// by rotating 69 becomes 96 as 69 != 96 it should be excluded from output.
// 808 are same as original so output should be 808

const arr = [201, 69, 191, 432, 808, 515]
const validNums = [0, 1, 6, 8, 9]

const mapObj = {}
valid_arr_list = []
for (let i = 0; i < arr.length; i++) {
   if (checkValidDigits(arr[i]) && checkPallindrome(arr[i])) {
       valid_arr_list.push(arr[i]);
   }
}

console.log(valid_arr_list)

function checkPallindrome(num) {
    let split_num = String(num).split('').map(Number);
    let left = 0;
    let right = split_num.length - 1;
    while (left <= right) {
        if (!((split_num[left] == 0 && split_num[right] ==0) ||
            (split_num[left] == 1 && split_num[right] == 1) ||
            (split_num[left] == 6 && split_num[right] ==9) || 
            (split_num[left] == 9 && split_num[right] == 6) || 
            (split_num[left] == 8 && split_num[right] == 8) )) {
            return false;
        }
        left++;
        right--;;
    }
    return true;
}
function checkValidDigits (num) {debugger;
    let split_num = String(num).split('').map(Number);
    let count
    for (index  in split_num) {
        if ([0, 1, 6, 8, 9] .indexOf(split_num[index]) <= -1) {
            return false;
        }
    }
    return true;
}

// Write a function to flatten an array of any depth. 
const input = [1, [2, [3, [4]], 5]]; output = [1,2,3,4,5]
let finalArr = [];
function flattenArr(arr) {
  if(Array.isArray(arr) && arr.length <= 0) {
    return;
  }
  let i = 0;
  while(i < arr.length) {
    if (Array.isArray(arr[i]) && arr[i].length > 0) {
      return flattenArr(arr[i]);
    } else {
      finalArr.push(arr[i]);
    }
    i++;
  }
  return finalArr;
}
result = flattenArr(input)
console.log(result)

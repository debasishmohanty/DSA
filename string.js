// Given a string of binary numbers, find the count of substrings starting and ending with 1.

function calculateSubstring(str) {debugger;
    let count = 0;
    let strLen = str.length;
    let subStr = [];
    for (let i = 0; i < strLen; i++) {
        if (str[i] == '1') {
            for (let j = i + 1; j < strLen; j++) {
                if (str[j] == '1') {
                    count++;
                    let splitArr = str.slice(i, j+1);
                    subStr.push(splitArr);
                }
            }
        }
    }
    return {count, subStr};
}

let {count, subStr} = calculateSubstring('00100101');
console.log(count, subStr);

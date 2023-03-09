function reverseNum(num) {

    let n = num.toString().split("").reverse().join("");

    return n;
}
console.log(reverseNum(123456789))
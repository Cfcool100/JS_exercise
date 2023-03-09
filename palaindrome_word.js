function palaindrome(str) {
    let word = str.split("").reverse().join('') ;

    for (let i = 0; i < str.length; i++) {

        if (word === str) {
            return word + " is palaindrome";
        }
    }
    return word + " isn't palaindrome";
}
console.log(palaindrome("morom"))
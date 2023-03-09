function startToUppercase(str) {
    let myStr = str.split(" ");
    
    for (let i = 0; i < myStr.length; i++) {
        myStr[i] = myStr[i].charAt().toUpperCase() + myStr[i].substr(1);
    }
    return myStr.join(' ');
}
console.log(startToUppercase("the quick brown fox peu m'importe" ))
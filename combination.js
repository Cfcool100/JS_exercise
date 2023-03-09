function generateCombination(str) {
    let comb = str.split(' ');

    for (let i = 0; i < comb.length; i++) {
        comb[i] = comb[i].charAt().concat(",") + comb[i].substr(0,2).concat(",") + comb[i].substr(0,3).concat(",") + comb[i].charAt(1).concat(",") + comb[i].substr(1,2).concat(",") + comb[i].charAt(str.length-1);
    }
    return comb.join(',');
}
console.log(generateCombination("dog"))
function alphabeticalOrder(str) {
    let inOrder = str.split('').sort();

    return inOrder;
}
console.log(alphabeticalOrder("abidjan"))
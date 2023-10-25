function triInsertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let elementAInserer = arr[i];
        let j = i - 1;

        while (j >= 0 && elementAInserer < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = elementAInserer;
    }
}

let arr = [12, 11, 13, 5, 6];
triInsertion(arr);
console.log("Tableau trié:", arr);

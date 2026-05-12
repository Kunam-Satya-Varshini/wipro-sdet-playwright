//5. Merge two arrays and remove duplicates.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let merge = [...arr1, ...arr2];
let res = [];

for (let i = 0; i < merge.length; i++) {
    if (!res.includes(merge[i])) {
        res.push(merge[i]);
    }
}

console.log(res);
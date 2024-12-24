let sum = 0;
for (i = 0; i < 15; i++) {
    sum += i + 1;
}
console.log(sum);

// for in
let obj1 = {
    name: 'Rinku',
    role: 'Admin',
    sallary: 45000,
    IsSelectes: false

}
for (let a in obj1) {
    console.log(obj1[a]);
}
// let arr = ['test', 'rest', 'best'];
let arr = [
    {
        name: 'Rinku',
        role: 'Admin',
        sallary: 45000,
        IsSelectes: false

    },
    {
        name: 'Sinu',
        role: 'Manager',
        sallary: 75000,
        IsSelectes: true

    }
]
for (let a of 'Testing') {
    console.log(a);
}

for (let a of arr) {
    console.log(a);
}




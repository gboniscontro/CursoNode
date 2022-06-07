let obj1 = {
    num: 12,
    arr: ['fsdf0', 'fdsfd']
}
obj1.arr?.forEach(element => {
    console.log(element)
});


let obj2 = {
    num: 14
}
obj2.arr?.forEach(element => {
    console.log(element)
});

let obj3 = {
    num: 14,
    arr: []
}
obj3.arr?.forEach(element => {
    console.log(element)
});


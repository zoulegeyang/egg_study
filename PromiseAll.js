class MyPromise {

}


MyPromise.all = function(arr) {
    if(arr.length === 0) {
        return [];
    }
    let results = [];
    for(let i=0; i<arr.length; i++) {
        const tmp = Promise.resolve(arr[i]);
        tmp.then(data => {
            results[i] = data;
        })
        .catch(e => {
            return Promise.reject(e);         
        })
    }
}


const a = 1;
const b = 1;
const c = a + b;
console.log(c);

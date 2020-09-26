const addTwo = (a, b) => a + b;

const currify = (fn, params = []) => {
    return (arg) => {
        const newParams = params.concat(arg)
        if (newParams.length === fn.length) {
            return fn(...newParams)
        } else {
            return currify(fn, newParams)
        }
    }
}

const currify2 = (fn, params = []) => 
    (...args) => params.length + args.length === fn.length
    ? fn(...params, ...args)
    : currify(fn, [...params, ...args])

const newAddTwo = currify(addTwo)
const newAddTwo2 = currify2(addTwo)
console.log(newAddTwo(1)(2))
console.log(newAddTwo2(1)(2))

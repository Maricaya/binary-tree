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

const newAddTwo = currify(addTwo)
console.log(newAddTwo(1)(2))

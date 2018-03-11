(function(){
    
    let slice = (array, from, to, step=1) => {

        let newArr = [];

        // argument validation

        if (!Array.isArray(array)) {
            if (typeof array !== 'string') {
                throw 'Cannot accept non-string or non-array parameter';
            }
        }

        if (typeof to === 'undefined') {
            to = array.length;
        }

        // if a user specified step
        // otherwise step = 1

        if (step > 1) {
            for(let i = from; i < to; i += step) {
                if (from < 0) {
                    newArr.push(array[i + array.length])
                } else {
                    newArr.push(array[i]);
                }
            }
            if (typeof array === 'string') {
                newArr = newArr.join('');
            }
        } else {
            newArr = array.slice(from, to);
        }

        return newArr ? newArr : array;
    }

    // adding it to the global scope
    window.slice = slice;

}());
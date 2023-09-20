function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function name() {
        return 20 + 10
    }
}


function returnsAnAnonymousFunction() {
    return function () {
        return "value"
    }
}
//ejemplo 1
function* gene() {
    yield 1;
    yield 2;
    yield 3;
}

const gen =gene();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//ejemplo 2

function* iterate(array) {
    for (let value of array) {
        yield value 
    }
}

const it= iterate(['marcos' , 'andres' , 'analua' , 'lucio', 'maria']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
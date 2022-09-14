const funcionAsync = () => {
    return new Promise((resolve, reject ) => {
        (true)
        ? setTimeout(() => resolve('Async!!!...'), 2000)
        : reject(new Error('Error!'));
    });
}
const anotherFuncion = async () => {
    const something = await funcionAsync();
    console.log(something);
    console.log('Holaa');

}

console.log('Before');
anotherFuncion();
console.log('After');
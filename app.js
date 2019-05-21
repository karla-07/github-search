// Async
/*
async function myFunction () {
    return "Hello";
}

console.log(myFunction());
*/
/*
async function myFunction() {
    return 'Hello';
}

myFunction().then(res => console.log(res));
*/

/*async function myFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000);
    });
    const error = false;
if(!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
} else {
    await Promise.reject(new Error('Something went'));
}

}

myFunction()
.then(res => console.log(res))
.catch(err => console.log(err));
*/

async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    // only proceed one second promise is resolved

    return data;
}

getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));
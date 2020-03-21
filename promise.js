const fetchFrom = require('./fetchImplementation');
const url = 'https://jsonplaceholder.typicode.com/users';
const urldetails = 'https://jsonplaceholder.typicode.com/posts?userId='


const promiseImplementation = () => {
    return fetchFrom(url).then(val => {
        let promises = [];
        let listOfId = [...val];
        for (let element of listOfId) {
            let url = urldetails + element.id;
            promises.push(fetchFrom(url, element));
        }
        return promises;

    }).then((promises) => Promise.all(promises).then(val => val))

}

module.exports = promiseImplementation;
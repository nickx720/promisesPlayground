const fetchFrom = require('./fetchImplementation');
const url = 'https://jsonplaceholder.typicode.com/users';
const urldetails = 'https://jsonplaceholder.typicode.com/posts?userId='


const asyncImplementation = async () => {
    const users = await fetchFrom(url);
    return Promise.all(
        users.map(async user => {
            let url = urldetails + user.id;
            const userDetails = await fetchFrom(url, user);
            return userDetails;
        })
    )

}

module.exports = asyncImplementation;
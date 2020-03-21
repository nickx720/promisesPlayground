const https = require('https');
const fetchFrom = (url, user = undefined) => {
    return new Promise((resolve, reject) => {
        const req = https.get(url, res => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', data => {
                body += data;
            });
            res.on('end', () => {
                body = JSON.parse(body);
                if (user) {
                    resolve({ ...user, details: [...body] })
                }
                /* console.log(body); */
                resolve(body);
            });
        })
        req.end();
        req.on('error', function (e) {
            reject(e);
        });
    })
}

module.exports = fetchFrom;
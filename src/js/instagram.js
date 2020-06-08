console.log('init instagram');
console.log("mai page's js");

import Instafeed from "instafeed.js";



// https://api.instagram.com/oauth/authorize/?client_id=CLIENTID&redirect_uri=REDIRECT-URI&response_type=code&scope=SCOPE


const token = "508710153.f79816c.2396e3972e9e440aafb7867dd17628b0";
const clientId = "f79816ced64248479b42112a9b85fa59";
const redir = "https://elfsight.com/service/generate-instagram-access-token/"
const postCount = 5;

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'awesome',
    userId: clientId,
    accessToken: token,
    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();

// let prom = fetch(`https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redir}&response_type=${token}`);


// #strangerThings

// let dat = fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${postCount}`)

// https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token

// const decoder = new TextDecoder('utf-8');



// dat.then(response => {
//     response.body
//         .getReader()
//         .read()
//         .then(({ value, done }) => {
//             console.log(decoder.decode(value))
//         })
// });

// (async () => {
//     const instaStream = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${postCount}`)

// })();
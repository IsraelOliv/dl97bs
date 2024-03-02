
const cachehandler = require('./cache-handler');

var cache = null;

async function data2(request, response){ 

    cache = cachehandler.getcach('testProp');
    console.log("cachehandl", cache);
    
    response.json(cache);

}

export default data2;

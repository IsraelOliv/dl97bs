
const cachehandler = require('./cache-handler');

var cache = null;

async function carregarCache() {
    try {
        //const data = fs.readFileSync(cacheFilePath, 'utf-8');

        var cache =  await cachehandler.getcach('cacheJson');
        return JSON.parse(cache.value);
    } catch (error) {
        return {};
    }
}

async function data2(request, response){ 

    var cacheJson = carregarCache();

    //cache =  await cachehandler.getcach('testProp');
    //console.log("cachehandl", cache);
    console.log("cacheJson", cacheJson);
    
    response.json(cacheJson);

}

export default data2;

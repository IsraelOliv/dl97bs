
const cachehandler = require('./cache-handler');

var cachestub = null;

async function carregarCache() {
    try {
        //const data = fs.readFileSync(cacheFilePath, 'utf-8');

        cachestub =  await cachehandler.getcach('cacheJson');
        //return JSON.parse(cachestub);
        //return cachestub['value'];
        return JSON.parse(cachestub);
        
    } catch (error) {
        return {};
    }
}

async function data2(request, response){ 

    var cacheJson = await carregarCache();

    //cache =  await cachehandler.getcach('testProp');
    //console.log("cachehandl", cache);
    console.log("cacheJson", cacheJson);
    
    response.json(cacheJson);

}

export default data2;

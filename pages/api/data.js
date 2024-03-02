import api from './api';
import { CacheHandler, getcach, setcach } from './cache-handler';
import { stochasticrsi } from 'technicalindicators';
import { sma } from 'technicalindicators';
import { ema } from 'technicalindicators';
import { atr } from 'technicalindicators';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCCpzWIhst6gD7GHqLhIe2_N38T6cOwt6M",
    authDomain: "deadline-1997.firebaseapp.com",
    databaseURL: "https://deadline-1997-default-rtdb.firebaseio.com",
    projectId: "deadline-1997",
    storageBucket: "deadline-1997.appspot.com",
    messagingSenderId: "110864270922",
    appId: "1:110864270922:web:bd4984f9d157d4a685c8b3",
    measurementId: "G-M66C87Z9QT"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);



let timestampArr1m = [];
let dateArr1m = [];
let openArr1m = [];
let closeArr1m = [];
let highArr1m = [];
let lowArr1m = [];
let volArr1m = [];
let marketData1m = null;

let timestampArr3m = [];
let dateArr3m = [];
let openArr3m = [];
let closeArr3m = [];
let highArr3m = [];
let lowArr3m = [];
let volArr3m = [];
let marketData3m = null;

let timestampArr5m = [];
let dateArr5m = [];
let openArr5m = [];
let closeArr5m = [];
let highArr5m = [];
let lowArr5m = [];
let volArr5m = [];
let marketData5m = null;

let timestampArr15m = [];
let dateArr15m = [];
let openArr15m = [];
let closeArr15m = [];
let highArr15m = [];
let lowArr15m = [];
let volArr15m = [];
let marketData15m = null;

let timestampArr30m = [];
let dateArr30m = [];
let openArr30m = [];
let closeArr30m = [];
let highArr30m = [];
let lowArr30m = [];
let volArr30m = [];
let marketData30m = null;

let timestampArr1h = [];
let dateArr1h = [];
let openArr1h = [];
let closeArr1h = [];
let highArr1h = [];
let lowArr1h = [];
let volArr1h = [];
let marketData1h = null;

let timestampArr4h = [];
let dateArr4h = [];
let openArr4h = [];
let closeArr4h = [];
let highArr4h = [];
let lowArr4h = [];
let volArr4h = [];
let marketData4h = null;

let timestampArr1d = [];
let dateArr1d = [];
let openArr1d = [];
let closeArr1d = [];
let highArr1d = [];
let lowArr1d = [];
let volArr1d = [];
let marketData1d = null;

let timestampArr1w = [];
let dateArr1w = [];
let openArr1w = [];
let closeArr1w = [];
let highArr1w = [];
let lowArr1w = [];
let volArr1w = [];
let marketData1w = null;

var preco_anterior_1m = null;
var preco_anterior2_1m = null;
var abertura_atual_1m = null;
var abertura_anterior_1m = null;
var abertura_anterior2_1m = null;
var max_atual_1m = null;
var max_anterior_1m = null;
var max_anterior2_1m = null;
var min_atual_1m = null;
var min_anterior_1m = null;
var min_anterior2_1m = null;

var preco_anterior_3m = null;
var preco_anterior2_3m = null;
var abertura_atual_3m = null;
var abertura_anterior_3m = null;
var abertura_anterior2_3m = null;
var max_atual_3m = null;
var max_anterior_3m = null;
var max_anterior2_3m = null;
var min_atual_3m = null;
var min_anterior_3m = null;
var min_anterior2_3m = null;

var preco_anterior_5m = null;
var preco_anterior2_5m = null;
var abertura_atual_5m = null;
var abertura_anterior_5m = null;
var abertura_anterior2_5m = null;
var max_atual_5m = null;
var max_anterior_5m = null;
var max_anterior2_5m = null;
var min_atual_5m = null;
var min_anterior_5m = null;
var min_anterior2_5m = null;


var preco_anterior_15m = null;
var preco_anterior2_15m = null;
var abertura_atual_15m = null;
var abertura_anterior_15m = null;
var abertura_anterior2_15m = null;
var max_atual_15m = null;
var max_anterior_15m = null;
var max_anterior2_15m = null;
var min_atual_15m = null;
var min_anterior_15m = null;
var min_anterior2_15m = null;

var preco_anterior_30m = null;
var preco_anterior2_30m = null;
var abertura_atual_30m = null;
var abertura_anterior_30m = null;
var abertura_anterior2_30m = null;
var max_atual_30m = null;
var max_anterior_30m = null;
var max_anterior2_30m = null;
var min_atual_30m = null;
var min_anterior_30m = null;
var min_anterior2_30m = null;

var preco_anterior_1d = null;
var preco_anterior2_1d = null;
var abertura_atual_1d = null;
var abertura_anterior_1d = null;
var abertura_anterior2_1d = null;
var max_atual_1d = null;
var max_anterior_1d = null;
var max_anterior2_1d = null;
var min_atual_1d = null;
var min_anterior_1d = null;
var min_anterior2_1d = null;

var zigzag = null;

// SMA List

var sma10p1m = null;
var sma20p1m = null;
var sma50p1m = null;
var sma100p1m = null;
var sma200p1m = null;

var sma10p3m = null;
var sma20p3m = null;
var sma50p3m = null;
var sma100p3m = null;
var sma200p3m = null;

var sma10p5m = null;
var sma20p5m = null;
var sma50p5m = null;
var sma100p5m = null;
var sma200p5m = null;

var sma10p15m = null;
var sma20p15m = null;
var sma50p15m = null;
var sma100p15m = null;
var sma200p15m = null;

var sma10p30m = null;
var sma20p30m = null;
var sma50p30m = null;
var sma100p30m = null;
var sma200p30m = null;

var sma5p1h = null;
var sma20p1h = null;
var sma50p1h = null;
var sma100p1h = null;
var sma200p1h = null;

var sma10p4h = null;
var sma20p4h = null;
var sma50p4h = null;
var sma100p4h = null;
var sma200p4h = null;


var sma10p1mprev = null;
var sma20p1mprev = null;
var sma50p1mprev = null;
var sma100p1mprev = null;
var sma200p1mprev = null;

var sma10p3mprev = null;
var sma20p3mprev = null;
var sma50p3mprev = null;
var sma100p3mprev = null;
var sma200p3mprev = null;

var sma10p5mprev = null;
var sma20p5mprev = null;
var sma50p5mprev = null;
var sma100p5mprev = null;
var sma200p5mprev = null;

var sma10p15mprev = null;
var sma20p15mprev = null;
var sma50p15mprev = null;
var sma100p15mprev = null;
var sma200p15mprev = null;

var sma10p30mprev = null;
var sma20p30mprev = null;
var sma50p30mprev = null;
var sma100p30mprev = null;
var sma200p30mprev = null;

var sma10p1hprev = null;
var sma20p1hprev = null;
var sma50p1hprev = null;
var sma100p1hprev = null;
var sma200p1hprev = null;

var sma10p4hprev = null;
var sma20p4hprev = null;
var sma50p4hprev = null;
var sma100p4hprev = null;
var sma200p4hprev = null;

//SMA Prox

var sma1m10p = null;
var sma1m20p = null;
var sma1m50p = null;
var sma1m100p = null;
var sma1m200p = null;

var sma3m10p = null;
var sma3m20p = null;
var sma3m50p = null;
var sma3m100p = null;
var sma3m200p = null;

var sma5m10p = null;
var sma5m20p = null;
var sma5m50p = null;
var sma5m100p = null;
var sma5m200p = null;

var sma15m10p = null;
var sma15m20p = null;
var sma15m50p = null;
var sma15m100p = null;
var sma15m200p = null;

var sma30m10p = null;
var sma30m20p = null;
var sma30m50p = null;
var sma30m100p = null;
var sma30m200p = null;

var sma1h5p = null;
var sma1h20p = null;
var sma1h50p = null;
var sma1h100p = null;
var sma1h200p = null;

var sma4h10p = null;
var sma4h20p = null;
var sma4h50p = null;
var sma4h100p = null;
var sma4h200p = null;

var sma1m10prev = null;
var sma1m20prev = null;
var sma1m50prev = null;
var sma1m100prev = null;
var sma1m200prev = null;

var sma3m10prev = null;
var sma3m20prev = null;
var sma3m50prev = null;
var sma3m100prev = null;
var sma3m200prev = null;

var sma5m10prev = null;
var sma5m20prev = null;
var sma5m50prev = null;
var sma5m100prev = null;
var sma5m200prev = null;

var sma15m10prev = null;
var sma15m20prev = null;
var sma15m50prev = null;
var sma15m100prev = null;
var sma15m200prev = null;

var sma30m10prev = null;
var sma30m20prev = null;
var sma30m50prev = null;
var sma30m100prev = null;
var sma30m200prev = null;

var sma1h10prev = null;
var sma1h20prev = null;
var sma1h50prev = null;
var sma1h100prev = null;
var sma1h200prev = null;

var sma4h10prev = null;
var sma4h20prev = null;
var sma4h50prev = null;
var sma4h100prev = null;
var sma4h200prev = null;

//EMA List


var ema10p1m = null;
var ema20p1m = null;
var ema50p1m = null;
var ema100p1m = null;
var ema200p1m = null;

var ema10p3m = null;
var ema20p3m = null;
var ema50p3m = null;
var ema100p3m = null;
var ema200p3m = null;

var ema10p5m = null;
var ema20p5m = null;
var ema50p5m = null;
var ema100p5m = null;
var ema200p5m = null;

var ema10p15m = null;
var ema20p15m = null;
var ema50p15m = null;
var ema100p15m = null;
var ema200p15m = null;

var ema10p30m = null;
var ema20p30m = null;
var ema50p30m = null;
var ema100p30m = null;
var ema200p30m = null;

var ema5p1h = null;
var ema20p1h = null;
var ema50p1h = null;
var ema100p1h = null;
var ema200p1h = null;

var ema10p4h = null;
var ema20p4h = null;
var ema50p4h = null;
var ema100p4h = null;
var ema200p4h = null;


var ema10p1mprev = null;
var ema20p1mprev = null;
var ema50p1mprev = null;
var ema100p1mprev = null;
var ema200p1mprev = null;

var ema10p3mprev = null;
var ema20p3mprev = null;
var ema50p3mprev = null;
var ema100p3mprev = null;
var ema200p3mprev = null;

var ema10p5mprev = null;
var ema20p5mprev = null;
var ema50p5mprev = null;
var ema100p5mprev = null;
var ema200p5mprev = null;

var ema10p15mprev = null;
var ema20p15mprev = null;
var ema50p15mprev = null;
var ema100p15mprev = null;
var ema200p15mprev = null;

var ema10p30mprev = null;
var ema20p30mprev = null;
var ema50p30mprev = null;
var ema100p30mprev = null;
var ema200p30mprev = null;

var ema10p1hprev = null;
var ema20p1hprev = null;
var ema50p1hprev = null;
var ema100p1hprev = null;
var ema200p1hprev = null;

var ema10p4hprev = null;
var ema20p4hprev = null;
var ema50p4hprev = null;
var ema100p4hprev = null;
var ema200p4hprev = null;

//EMA Prox

var ema1m10p = null;
var ema1m20p = null;
var ema1m50p = null;
var ema1m100p = null;
var ema1m200p = null;

var ema3m10p = null;
var ema3m20p = null;
var ema3m50p = null;
var ema3m100p = null;
var ema3m200p = null;

var ema5m10p = null;
var ema5m20p = null;
var ema5m50p = null;
var ema5m100p = null;
var ema5m200p = null;

var ema15m10p = null;
var ema15m20p = null;
var ema15m50p = null;
var ema15m100p = null;
var ema15m200p = null;

var ema30m10p = null;
var ema30m20p = null;
var ema30m50p = null;
var ema30m100p = null;
var ema30m200p = null;

var ema1h5p = null;
var ema1h20p = null;
var ema1h50p = null;
var ema1h100p = null;
var ema1h200p = null;

var ema4h10p = null;
var ema4h20p = null;
var ema4h50p = null;
var ema4h100p = null;
var ema4h200p = null;

var ema1m10prev = null;
var ema1m20prev = null;
var ema1m50prev = null;
var ema1m100prev = null;
var ema1m200prev = null;

var ema3m10prev = null;
var ema3m20prev = null;
var ema3m50prev = null;
var ema3m100prev = null;
var ema3m200prev = null;

var ema5m10prev = null;
var ema5m20prev = null;
var ema5m50prev = null;
var ema5m100prev = null;
var ema5m200prev = null;

var ema15m10prev = null;
var ema15m20prev = null;
var ema15m50prev = null;
var ema15m100prev = null;
var ema15m200prev = null;

var ema30m10prev = null;
var ema30m20prev = null;
var ema30m50prev = null;
var ema30m100prev = null;
var ema30m200prev = null;

var ema1h10prev = null;
var ema1h20prev = null;
var ema1h50prev = null;
var ema1h100prev = null;
var ema1h200prev = null;

var ema4h10prev = null;
var ema4h20prev = null;
var ema4h50prev = null;
var ema4h100prev = null;
var ema4h200prev = null;

///

var ltb4h = null;
var lta4h = null;
var ltb4h2 = null;
var lta4h2 = null;

var fibo0 = null;
var fibo236 = null;
var fibo382 = null;
var fibo50 = null;
var fibo618 = null;
var fibo786 = null;
var fibo1 = null;
var fibo1618 = null;
var fibo2618 = null;
var fibo3618 = null;
var fibo4236 = null;
var fibo_d1618 = null;
var fibo_d2618 = null;
var fibo_d3618 = null;
var fibo_d4236 = null;

var open1d_0 = null;
var open1d_1 = null;
var close1d_1 = null;
var close1d_2 = null;
var max1d_1 = null;
var max1d_2 = null;
var min1d_1 = null;
var min1d_2 = null;

let openOrders = null;

var lastUpdate = null;
var availableBalance = null;
var balance = null;
var unrealizedProfit = null;
var marginBalance = null;
var positions = null;
var timestamp = null;

var objSendcalc = {};
var objMarket = {};

var flag = "";
var flagpos = [];

var position = [];

var pnlHist = null;
//var userTradesObj = [];
//var userTrades = null;

/*
const fs = require('fs');
const path = require('path');
const cacheFilePath = path.join(__dirname, 'cache.json');


// Função para salvar o cache em um arquivo
function salvarCache(cache) {
    fs.writeFileSync(cacheFilePath, JSON.stringify(cache));
}

// Função para carregar o cache de um arquivo
function carregarCache() {
    try {
        const data = fs.readFileSync(cacheFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
}

function limparCache() {
    try {
        fs.unlinkSync(cacheFilePath);
        console.log('Cache limpo com sucesso.');
    } catch (error) {
        console.error('Erro ao limpar o cache:', error);
    }
}

var cacheJson = carregarCache();
*/

const WebSocket = require('ws');
const { unzipSync } = require('zlib');
const { stringify } = require('querystring');
const { dir } = require('console');

//const WebSocket = require('ws');

const url = 'wss://fstream.binance.com/ws/adausdt_perpetual@continuousKline_5m';
//const url = 'wss://fstream.binance.com/ws/btcusdt_perpetual@continuousKline_5m';
let ws = null;
let reconnectInterval = 2000; // Intervalo de tempo em milissegundos entre as tentativas de reconexão

//const ws = new WebSocket('wss://fstream.binance.com/ws/btcusdt@kline_1m');
//var ws = new WebSocket('wss://fstream.binance.com/ws/adausdt_perpetual@continuousKline_5m');
//var ws = new WebSocket('wss://fstream.binance.com/ws/1000pepeusdt_perpetual@continuousKline_5m');

var preco_atual = 0.0;
var flagLock = false;

function connect() {
    console.log('Tentando conectar ao WebSocket...');
    ws = new WebSocket(url);

    ws.onopen = function() {
        console.log('Conexão estabelecida.');
        reconnectInterval = 2000; // Resetar o intervalo de tempo para a próxima tentativa de reconexão (caso ocorra uma desconexão posterior)
    };

    ws.addEventListener('message', function (event) {
        const json = JSON.parse(event.data);
        //console.log('Dados atualizados:', json);
        if(json.k !== undefined){
            try {
                //const json = JSON.parse(data);
                const candle = json.k;
            
                const message = {
                time: candle.t / 1000,
                open: parseFloat(candle.o),
                high: parseFloat(candle.h),
                low: parseFloat(candle.l),
                close: parseFloat(candle.c),
                };
            
                preco_atual = parseFloat(candle.c);
                
                //cache.set("preco_atual", preco_atual);

                cacheJson.preco_atual = preco_atual;
                salvarCache(cacheJson);

                //const valor = cache.get("preco_atual");
                //console.log("valor:", valor);

                //console.log(message);

            } catch (error) {
                console.error(error);
            }
        }

    });

    /*
    ws.on('message', (data) => {
        try {
        const json = JSON.parse(data);
        const candle = json.k;

        const message = {
            time: candle.t / 1000,
            open: parseFloat(candle.o),
            high: parseFloat(candle.h),
            low: parseFloat(candle.l),
            close: parseFloat(candle.c),
        };

        preco_atual = parseFloat(candle.c);

        //console.log(message);
        } catch (error) {
        console.error(error);
        }
    });
    */


    ws.onerror = function(error) {
        console.error('Erro na conexão do WebSocket: ' + error);
    };

    ws.onclose = function(event) {
        console.log('Conexão fechada. Código: ' + event.code + ', motivo: ' + event.reason);
        reconnect();
    };
}

function reconnect() {
  console.log('Tentando reconectar em ' + reconnectInterval + 'ms...');
  setTimeout(connect, reconnectInterval);
  reconnectInterval *= 2; // Dobrar o intervalo de tempo a cada tentativa de reconexão (exponencial)
}

connect(); // Iniciar a conexão WebSocket

/*
// Exemplo: Simular uma desconexão após 10 segundos
setTimeout(function() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.close();
  }
}, 10000);
*/

//setTimeout(restartApp, 6 * 60 * 60 * 1000);
//setTimeout(restartApp, 1 * 60 * 1000);


console.log('Iniciando aplicação...');

/*
// Define o tempo em minutos para reiniciar a aplicação
const restartTime = 1;

// Define o tempo em milissegundos para reiniciar a aplicação
const restartTimeMs = restartTime * 60 * 1000;

// Define a função para reiniciar a aplicação
const restartApp = () => {

    console.clear();
    console.log('Reiniciando aplicação...');

    //nodemon.restart();

    cache.flushAll();
    clearTimeout(restartTimer);

    /*
    const app = spawn(process.argv[0], process.argv.slice(1), {
        detached: true,
        stdio: 'ignore'
    });
    app.unref();
    process.exit();

    *

};

// Define o temporizador para reiniciar a aplicação
const restartTimer = setTimeout(restartApp, restartTimeMs);
*/
// Cancela o temporizador quando a aplicação é encerrada
//process.on('exit', () => {
  //clearTimeout(restartTimer);
//});

//limparCache();

//////cacheJson.objSendcalc = null;
//////salvarCache(cacheJson);

//const cryptSymbol = process.env.SYMBOL;
//const cryptSymbol = process.env.SYMBOL;
//const cryptSymbol = 'BTCUSDT';
const cryptSymbol = 'ADAUSDT';


async function data(request, response){ 
    
    /*
    connect(); // Iniciar a conexão WebSocket
    cacheJson = carregarCache();
    cacheJson.objSendcalc = null;
    salvarCache(cacheJson);
    */

    setcach('testProp', "valor da chave");
    var cache = getcach('testProp');
    console.log("cache", cache);
    
    start_position: while (true) {
        
        response.json("test");

        if (number < 100) continue start_position;
        break;

    }

    //const dynamicDate = new Date();
    await get(child(dbRef, 'rsidata/obj/flag')).then((snapshot) => {    
        if (snapshot.exists()) {
            const data = snapshot.val();
            
            if(data){
                flag = data;               
            }

        } else {
            console.log("No data flag available");
        }
    }).catch((error) => {
        console.error(error);
    });

    const timeApi = await api.time();
    if (timeApi != undefined){

        console.log('');
        //console.log(`serverTime: ${timeApi.data.serverTime}`);
        lastUpdate = formatTime(timeApi.data.serverTime);
        timestamp = timeApi.data.serverTime;
        console.log(`serverTime: ${lastUpdate}`);

        const carteira = await api.accountFutures(timeApi.data.serverTime);
        //console.log(`TEST:  ${JSON.stringify(carteira.filter(b => b.asset === 'USDT'))}`);
        
        if(carteira != undefined){
            let resultLog = "";
            const coin = await carteira.assets.filter(b => b.asset === 'USDT'); // || b.asset === 'USDT');
            //console.log(`TEST:coin:  ${JSON.stringify(coin[0].availableBalance)}`);
            for (let index = 1; index <= 3; index++) {
                //console.log(`Positions loop: ${index}`);

                await get(child(dbRef, `rsidata/positions/${cryptSymbol}`)).then((snapshot) => {    
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        
                        if(data){
                            position[`${cryptSymbol}`] = data;  
                            resultLog = `position in ${cryptSymbol} available`;
                        }
            
                    } else {
                        resultLog = "No data positions available";
                        //console.log("No data positions available");
                    }
                }).catch((error) => {
                    console.error(error);
                }); 
            }   
            
            console.log(resultLog);
            
            positions = await carteira.positions.filter(b => b.unrealizedProfit !== '0.00000000'); // || b.asset === 'USDT');
            //console.log(`TEST:positions:  ${JSON.stringify(coin[0].availableBalance)}`);
            
            if(positions != []){

                position[`${cryptSymbol}`] = await positions.filter(b => b.symbol == cryptSymbol);
                //console.log(`TEST:position:  ${JSON.stringify(position[`${cryptSymbol}`])}`);
                //set(ref(database, `rsidata/positions/${symbol}`), obj);

            }

            if(position[`${cryptSymbol}`][0] == undefined || position[`${cryptSymbol}`][0] == null){
                flag = "";
            }else{
                calcStopEmerg(position[`${cryptSymbol}`][0]);
            } 

            /*
            if(positions == {} || positions[0] == null){
                flag = "";
            }
            */

            //const income = await api.income(timestamp);
            //pnlHist = income.filter(b => b.incomeType === 'REALIZED_PNL'); // || b.asset === 'USDT');

            //userTrades = await api.userTrades(timestamp);
            //userTradesObj = userTrades;
            
            //accountFutures

            availableBalance = coin[0].availableBalance;
            balance = coin[0].walletBalance;
            unrealizedProfit = coin[0].unrealizedProfit;
            marginBalance = coin[0].marginBalance;
        }        

        const result1m = await api.klines("1m");
        const result3m = await api.klines("3m");
        const result5m = await api.klines("5m");
        const result15m = await api.klines("15m");
        const result30m = await api.klines("30m");
        const result1h = await api.klines("1h");
        const result4h = await api.klines("4h");
        const result1d = await api.klines("1d");
        const result1w = await api.klines("1w");

        if (result1m != undefined && 
            result3m != undefined && 
            result5m != undefined && 
            result15m != undefined && 
            result30m != undefined && 
            result1h != undefined && 
            result4h != undefined && 
            result1d != undefined && 
            result1w != undefined){

            for (let i = 0; i < result1m.data.length; i++) {
                criarObj1m(result1m.data[i]);
            }
            for (let i = 0; i < result3m.data.length; i++) {
                criarObj3m(result3m.data[i]);
            }
            for (let i = 0; i < result5m.data.length; i++) {
                criarObj5m(result5m.data[i]);
            }
            for (let i = 0; i < result15m.data.length; i++) {
                criarObj15m(result15m.data[i]);
            }
            for (let i = 0; i < result30m.data.length; i++) {
                criarObj30m(result30m.data[i]);
            }
            for (let i = 0; i < result1h.data.length; i++) {
                criarObj1h(result1h.data[i]);
            }
            for (let i = 0; i < result4h.data.length; i++) {
                criarObj4h(result4h.data[i]);
            }
            for (let i = 0; i < result1d.data.length; i++) {
                criarObj1d(result1d.data[i]);
            }
            for (let i = 0; i < result1w.data.length; i++) {
                criarObj1w(result1w.data[i]);
            }

            marketData1m = { date: dateArr1m, timestamp: timestampArr1m, open: openArr1m, close: closeArr1m, high: highArr1m, low: lowArr1m, volume: volArr1m };
            marketData3m = { date: dateArr3m, timestamp: timestampArr3m, open: openArr3m, close: closeArr3m, high: highArr3m, low: lowArr3m, volume: volArr3m };
            marketData5m = { date: dateArr5m, timestamp: timestampArr5m, open: openArr5m, close: closeArr5m, high: highArr5m, low: lowArr5m, volume: volArr5m };
            marketData15m = { date: dateArr15m, timestamp: timestampArr15m, open: openArr15m, close: closeArr15m, high: highArr15m, low: lowArr15m, volume: volArr15m };
            marketData30m = { date: dateArr30m, timestamp: timestampArr30m, open: openArr30m, close: closeArr30m, high: highArr30m, low: lowArr30m, volume: volArr30m };
            marketData1h = { date: dateArr1h, timestamp: timestampArr1h, open: openArr1h, close: closeArr1h, high: highArr1h, low: lowArr1h, volume: volArr1h };
            marketData4h = { date: dateArr4h, timestamp: timestampArr4h, open: openArr4h, close: closeArr4h, high: highArr4h, low: lowArr4h, volume: volArr4h };
            marketData1d = { date: dateArr1d, timestamp: timestampArr1d, open: openArr1d, close: closeArr1d, high: highArr1d, low: lowArr1d, volume: volArr1d };
            marketData1w = { date: dateArr1w, timestamp: timestampArr1w, open: openArr1w, close: closeArr1w, high: highArr1w, low: lowArr1w, volume: volArr1w };

            //console.log('');
            //console.log(`marketData.date(últimoCandle): ${JSON.stringify(marketData.date[result.data.length-2])}`);

            const stochRsi1m = stochasticrsi({values: marketData1m.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi3m = stochasticrsi({values: marketData3m.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi5m = stochasticrsi({values: marketData5m.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi15m = stochasticrsi({values: marketData15m.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi30m = stochasticrsi({values: marketData30m.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi1h = stochasticrsi({values: marketData1h.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });
            
            const stochRsi4h = stochasticrsi({values: marketData4h.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });
            
            const stochRsi1d = stochasticrsi({values: marketData1d.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            const stochRsi1w = stochasticrsi({values: marketData1w.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            });

            //const allOrders = await api.allOrders(timeApi.data.serverTime);

            //const openOrders = await api.openOrders(timeApi.data.serverTime);


            /*
            //console.log('SMA: ');
            //console.log(SMA.calculate({period : 5, values : [1,2,3,4,5,6,7,8,9]}));
            console.log('');
            console.log('<<--   StochasticRSI   -->>');
            console.log(stochasticrsi({values: marketData.close,
                rsiPeriod: 14,
                stochasticPeriod: 14,
                kPeriod: 3,
                dPeriod: 3
            }));
            */
            
            objSendcalc = {

                symbol: cryptSymbol,
                lastUpdate: lastUpdate,
                balance: balance,
                availableBalance: availableBalance,
                marginBalance: marginBalance,
                unrealizedProfit: unrealizedProfit,
                serverTimestamp: timeApi.data.serverTime,
                tick: marketData1m.close[marketData1m.close.length-1],
                tickprev: marketData1m.close[marketData1m.close.length-2],
                flag: flag,
                signals: {},

                lastUpdtMarket1m: marketData1m.date[marketData1m.date.length-1],
                stoch1m: stochRsi1m[stochRsi1m.length-1],
                stoch1mprev: stochRsi1m[stochRsi1m.length-2],

                lastUpdtMarket3m: marketData3m.date[marketData3m.date.length-1],
                stoch3m: stochRsi3m[stochRsi3m.length-1],
                stoch3mprev: stochRsi3m[stochRsi3m.length-2],

                lastUpdtMarket5m: marketData5m.date[marketData5m.date.length-1],
                stoch5m: stochRsi5m[stochRsi5m.length-1],
                stoch5mprev: stochRsi5m[stochRsi5m.length-2],

                lastUpdtMarket15m: marketData15m.date[marketData15m.date.length-1],
                stoch15m: stochRsi15m[stochRsi15m.length-1],
                stoch15mprev: stochRsi15m[stochRsi15m.length-2],

                lastUpdtMarket30m: marketData30m.date[marketData30m.date.length-1],
                stoch30m: stochRsi30m[stochRsi30m.length-1],
                stoch30mprev: stochRsi30m[stochRsi30m.length-2],

                lastUpdtMarket1h: marketData1h.date[marketData1h.date.length-1],
                stoch1h: stochRsi1h[stochRsi1h.length-1],
                stoch1hprev: stochRsi1h[stochRsi1h.length-2],

                lastUpdtMarket4h: marketData4h.date[marketData4h.date.length-1],
                stoch4h: stochRsi4h[stochRsi4h.length-1],
                stoch4hprev: stochRsi4h[stochRsi4h.length-2],
                
                lastUpdtMarket1d: marketData1d.date[marketData1d.date.length-1],
                stoch1d: stochRsi1d[stochRsi1d.length-1],
                stoch1dprev: stochRsi1d[stochRsi1d.length-2],

                lastUpdtMarket1w: marketData1w.date[marketData1w.date.length-1],
                stoch1w: stochRsi1w[stochRsi1w.length-1],
                stoch1wprev: stochRsi1w[stochRsi1w.length-2],

                positions: positions
                //openorders: openOrders,
                //pnlHist: pnlHist,
                //pnlHist: {}
                //allOrders: allOrders,
                //userTrades: userTrades

            };

            const signals = calcSignals(objSendcalc);
            objSendcalc.signals = signals;

            await makeMoneyRain(timestamp);

            writeUserData(objSendcalc);

            histFix(timestamp);

            //console.log(await api.exchangeInfo());
            //response.setHeader('Cache-Control', 's-maxage=5', 'stale-while-revalidate');
            response.json(objSendcalc);
            
        }
    }
}

async function makeMoneyRain(timestamp){

    const sig = objSendcalc.signals;
    
    if(flag != ""){
        await calcClosePosition(timestamp, sig);
    }
    //if(flag == ""){
        await calcOpenPosition(timestamp, sig);
    //}
    
}

async function calcOpenPosition(timestamp, sig){

    console.log('calcOpenPosition');

    var oldFlag = flag;
    //var flagOpen = flag;

    const dif1m = objSendcalc.stoch1m.k - objSendcalc.stoch1m.d;
    const dif3m = objSendcalc.stoch3m.k - objSendcalc.stoch3m.d;
    const dif5m = objSendcalc.stoch5m.k - objSendcalc.stoch5m.d;
    const dif15m = objSendcalc.stoch15m.k - objSendcalc.stoch15m.d;
    const dif30m = objSendcalc.stoch30m.k - objSendcalc.stoch30m.d;
    const dif1h = objSendcalc.stoch1h.k - objSendcalc.stoch1h.d;
    const dif4h = objSendcalc.stoch4h.k - objSendcalc.stoch4h.d;
    const dif1d = objSendcalc.stoch1d.k - objSendcalc.stoch1d.d;
    const dif1w = objSendcalc.stoch1w.k - objSendcalc.stoch1w.d;

    if (objSendcalc.stoch15m.k < 30 || dif15m > 0){
        if (objSendcalc.stoch5m.k < 30 && dif5m > 0){
            if (flag == "") {
                // St00C

                let orderBuy = await api.newOrderBuy(timestamp);
                if(orderBuy != undefined){
                //if(orderBuy.orderId != undefined){

                    set(ref(database, `rsidata/log/lastopenSt00C`), orderBuy);

                    let ordIdOC = orderBuy.orderId;
                    set(ref(database, 'rsidata/log/idOpenSt00C'), ordIdOC);

                    flag = "St00C";        
                    objSendcalc.flag = flag;
                
                    let obj = {
                        symbol: cryptSymbol,
                        initialMargin: "0",
                        maintMargin: "0",
                        unrealizedProfit: "0.01",
                        positionInitialMargin: "0",
                        openOrderInitialMargin: "0",
                        leverage: "125",
                        isolated: true,
                        entryPrice: "00000.0",
                        maxNotional: "0",
                        positionSide: "BOTH",
                        positionAmt: "0.000",
                        notional: "0.0",
                        isolatedWallet: "0.0",
                        updateTime: 1650830183823,
                        bidNotional: "0",
                        askNotional: "0"
                    }

                    set(ref(database, `rsidata/positions/${cryptSymbol}`), obj);


                    //let pos = await objSendcalc.positions.filter(b => b.symbol === cryptSymbol);
                    //objSendcalc.positions[`${cryptSymbol}`] = obj;
                    objSendcalc.positions = [];
                    objSendcalc.positions[0] = obj;

                }
            }
        }
    }

    if (objSendcalc.stoch15m.k > 70 || dif15m < 0){
        if (objSendcalc.stoch5m.k > 70 && dif5m < 0){
            if (flag == "") {
                // St00V

                let orderSell = await api.newOrderBuy(timestamp);
                if(orderSell != undefined){
                //if(orderBuy.orderId != undefined){

                    set(ref(database, `rsidata/log/lastopenSt00V`), orderSell);

                    let ordIdOV = orderSell.orderId;
                    set(ref(database, 'rsidata/log/idOpenSt00V'), ordIdOV);

                    flag = "St00V";        
                    objSendcalc.flag = flag;
                
                    let obj = {
                        symbol: cryptSymbol,
                        initialMargin: "0",
                        maintMargin: "0",
                        unrealizedProfit: "0.01",
                        positionInitialMargin: "0",
                        openOrderInitialMargin: "0",
                        leverage: "125",
                        isolated: true,
                        entryPrice: "00000.0",
                        maxNotional: "0",
                        positionSide: "BOTH",
                        positionAmt: "0.000",
                        notional: "0.0",
                        isolatedWallet: "0.0",
                        updateTime: 1650830183823,
                        bidNotional: "0",
                        askNotional: "0"
                    }

                    set(ref(database, `rsidata/positions/${cryptSymbol}`), obj);
                    
                    //let pos = await objSendcalc.positions.filter(b => b.symbol === cryptSymbol);
                    //objSendcalc.positions[`${cryptSymbol}`] = obj;
                    objSendcalc.positions = [];
                    objSendcalc.positions[0] = obj;

                }
            }
        }
    }





    //if (sig.rsi15m >= 1 && objSendcalc.stoch5m.k < 30 && dif3m > 0 && dif1m > 0 && flag == ""){  
    if (sig.rsi15m >= 1 && sig.rsi5m >= 1 && objSendcalc.stoch3m.k < 50 && dif3m > 0 && dif1m > 0 && flag == ""){  
    //if(false){
        // 1mC    
        /*    
        let orderBuy = await api.newOrderBuy(timestamp);
        if(orderBuy != undefined){
        //if(orderBuy.orderId != undefined){

            set(ref(database, `rsidata/log/lastopen1mC`), orderBuy);

            let ordIdOC = orderBuy.orderId;
            set(ref(database, 'rsidata/log/idOpen1mC'), ordIdOC);

            flag = "1mC";        
            objSendcalc.flag = flag;
        
            let obj = {
                symbol: cryptSymbol,
                initialMargin: "0",
                maintMargin: "0",
                unrealizedProfit: "0.01",
                positionInitialMargin: "0",
                openOrderInitialMargin: "0",
                leverage: "125",
                isolated: true,
                entryPrice: "00000.0",
                maxNotional: "0",
                positionSide: "BOTH",
                positionAmt: "0.000",
                notional: "0.0",
                isolatedWallet: "0.0",
                updateTime: 1650830183823,
                bidNotional: "0",
                askNotional: "0"
            }

            set(ref(database, `rsidata/positions/${cryptSymbol}`), obj);


            //let pos = await objSendcalc.positions.filter(b => b.symbol === cryptSymbol);
            //objSendcalc.positions[`${cryptSymbol}`] = obj;
            objSendcalc.positions = [];
            objSendcalc.positions[0] = obj;
            

        }
        */

    //}else if (sig.rsi15m <= -1 && objSendcalc.stoch5m.k > 70 && dif3m < 0 && dif1m < 0 && flag == ""){
    }else if (sig.rsi15m <= -1 && sig.rsi5m <= -1 && objSendcalc.stoch3m.k > 50 && dif3m < 0 && dif1m < 0 && flag == ""){
    //}else if(false){    
        // 1mV

        /*
        let orderSell = await api.newOrderSell(timestamp);
        if(orderSell != undefined){
        //if(orderSell.orderId != undefined){
            set(ref(database, `rsidata/log/lastopen1mV`), orderSell);

            let ordIdOV = orderSell.orderId;
            set(ref(database, 'rsidata/log/idOpen1mV'), ordIdOV);

            flag = "1mV";        
            objSendcalc.flag = flag;
        
            let obj = {
                symbol: cryptSymbol,
                initialMargin: "0",
                maintMargin: "0",
                unrealizedProfit: "0.01",
                positionInitialMargin: "0",
                openOrderInitialMargin: "0",
                leverage: "125",
                isolated: true,
                entryPrice: "00000.0",
                maxNotional: "0",
                positionSide: "BOTH",
                positionAmt: "0.000",
                notional: "0.0",
                isolatedWallet: "0.0",
                updateTime: 1650830183823,
                bidNotional: "0",
                askNotional: "0"
            }

            set(ref(database, `rsidata/positions/${cryptSymbol}`), obj);

            //let pos = await objSendcalc.positions.filter(b => b.symbol === cryptSymbol);
            //objSendcalc.positions[`${cryptSymbol}`] = obj;
            objSendcalc.positions = [];
            objSendcalc.positions[0] = obj;
            

        }
        */
    
    }else if (sig.rsi5m == 2){
        // 5mC
        if (flag == "1mC"){  

            //let result = await api.closePositionSell(timestamp);
        /*
            let orderBuy = await api.newOrderBuy(timestamp);
            set(ref(database, `rsidata/log/lastopen5mC`), orderBuy);

            let ordIdOC = orderBuy.orderId;
            set(ref(database, 'rsidata/log/idOpen5mC'), ordIdOC);
        */
            flag = "5mC";
            objSendcalc.flag = flag;

        }

    }else if (sig.rsi5m == -2){
        // 5mV
        if (flag == "1mV"){  

            //let result = await api.closePositionBuy(timestamp);
        /*
            let orderSell = await api.newOrderSell(timestamp);
            set(ref(database, `rsidata/log/lastopen5mV`), orderSell);

            let ordIdOV = orderSell.orderId;
            set(ref(database, 'rsidata/log/idOpen5mV'), ordIdOV);
        */
            flag = "5mV";
            objSendcalc.flag = flag;

        }

    }else if (sig.rsi15m == 2){
        // 15mC
        if (flag == "5mC" ){      

            //let result = await api.closePositionSell(timestamp);
        /*
            let orderBuy = await api.newOrderBuy(timestamp);
            set(ref(database, `rsidata/log/lastopen15mC`), orderBuy);

            let ordIdOC = orderBuy.orderId;
            set(ref(database, 'rsidata/log/idOpen15mC'), ordIdOC);
        */
            flag = "15mC";
            objSendcalc.flag = flag;
        }

    }else if (sig.rsi15m == -2){
        // 15mV
        if(flag == "5mV"){    
            
            //let result = await api.closePositionBuy(timestamp);
        /*          
            let orderSell = await api.newOrderSell(timestamp);
            set(ref(database, `rsidata/log/lastopen15mV`), orderSell);

            let ordIdOV = orderSell.orderId;
            set(ref(database, 'rsidata/log/idOpen15mV'), ordIdOV);
        */
            flag = "15mV";
            objSendcalc.flag = flag;
        }

    }else if (sig.rsi1h == 2){ 
        // 1hC
        if(flag == "15mC"){   
            
            //let result = await api.closePositionSell(timestamp);
        /*
            let orderBuy = await api.newOrderBuy(timestamp);
            set(ref(database, `rsidata/log/lastopen1hC`), orderBuy);

            let ordIdOC = orderBuy.orderId;
            set(ref(database, 'rsidata/log/idOpen1hC'), ordIdOC);
        */
            flag = "1hC";        
            objSendcalc.flag = flag;
        }

    }else if (sig.rsi1h == -2){ 
        // 1hV
        if(flag == "15mV" ){    

            //let result = await api.closePositionBuy(timestamp);
        /*
            let orderSell = await api.newOrderSell(timestamp);
            set(ref(database, `rsidata/log/lastopen1hV`), orderSell);

            let ordIdOV = orderSell.orderId;
            set(ref(database, 'rsidata/log/idOpen1hV'), ordIdOV);
        */
            flag = "1hV";        
            objSendcalc.flag = flag;
        }

    }else if (sig.rsi4h == 2){ 
        // 4hC
        if(flag == "1hC"){   
            
            //let result = await api.closePositionSell(timestamp);
        /*
            let orderBuy = await api.newOrderBuy(timestamp);
            set(ref(database, `rsidata/log/lastopen1hC`), orderBuy);

            let ordIdOC = orderBuy.orderId;
            set(ref(database, 'rsidata/log/idOpen1hC'), ordIdOC);
        */
            flag = "4hC";        
            objSendcalc.flag = flag;
        }

    }else if (sig.rsi4h == -2){ 
        // 4hV
        if(flag == "1hV" ){    

            //let result = await api.closePositionBuy(timestamp);
        /*
            let orderSell = await api.newOrderSell(timestamp);
            set(ref(database, `rsidata/log/lastopen1hV`), orderSell);

            let ordIdOV = orderSell.orderId;
            set(ref(database, 'rsidata/log/idOpen1hV'), ordIdOV);
        */
            flag = "4hV";        
            objSendcalc.flag = flag;
        }

    }

    if (oldFlag != flag){
        
        console.log('');
        console.log(`${flag} ABERTO!`);
        console.log('');
    }
   
}

async function calcClosePosition(timestamp, sig){

    console.log('calcClosePosition');

    const dif1m = objSendcalc.stoch1m.k - objSendcalc.stoch1m.d;
    const dif3m = objSendcalc.stoch3m.k - objSendcalc.stoch3m.d;
    const dif5m = objSendcalc.stoch5m.k - objSendcalc.stoch5m.d;
    const dif15m = objSendcalc.stoch15m.k - objSendcalc.stoch15m.d;
    const dif30m = objSendcalc.stoch30m.k - objSendcalc.stoch30m.d;
    const dif1h = objSendcalc.stoch1h.k - objSendcalc.stoch1h.d;
    const dif4h = objSendcalc.stoch4h.k - objSendcalc.stoch4h.d;
    const dif1d = objSendcalc.stoch1d.k - objSendcalc.stoch1d.d;
    const dif1w = objSendcalc.stoch1w.k - objSendcalc.stoch1w.d;

    var oldFlag = flag;
    //var oldFlag = "";

    if (flag == "St00C"){

        if (dif5m < 0){

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastcloseSt00C`), result);

                let ordIdC = result.orderId;
                set(ref(database, 'rsidata/log/idCloseSt00C'), ordIdC);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);
                
                oldFlag = flag;
                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "St00V"){

        if (dif5m > 0){

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastcloseSt00V`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idCloseSt00V'), ordIdV);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);
                
                oldFlag = flag;
                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }
    }


    if (flag == "1mC"){

        if (dif3m < 0 && dif1m < 0){

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastclose1mC`), result);

                let ordIdC = result.orderId;
                set(ref(database, 'rsidata/log/idClose1mC'), ordIdC);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);
                
                oldFlag = flag;
                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "1mV"){

        if (dif3m > 0 && dif1m > 0){

            let result = await api.closePositionSell(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastclose1mV`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose1mV'), ordIdV);

                let histOrd = await createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);
                
                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }

        }

    }else if (flag == "5mC"){

        if (dif5m < 0 || (dif3m < 0 && dif1m < 0)){ 

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose5mC`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose5mC'), ordIdV);

                let histOrd = await createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "5mV"){

        if (dif5m > 0 || (dif3m > 0 && dif1m > 0)){   

            let result = await api.closePositionSell(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose5mV`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose5mV'), ordIdV);

                let histOrd = await createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }

        }

    }else if (flag == "15mC"){

        if (dif15m < 0 || (dif5m < 0 && dif3m < 0)){   

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose15mC`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose15mC'), ordIdV);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "15mV"){

        if (dif15m > 0 || (dif5m > 0 && dif3m > 0)){     
    
            let result = await api.closePositionSell(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose15mV`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose15mV'), ordIdV);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);
                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "1hC"){

        if (dif1h < 0 || dif30m < 0 || (dif15m < 0 && dif5m < 0)){     

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose1hC`), result);

                let ordIdC = result.orderId;
                set(ref(database, 'rsidata/log/idClose1hC'), ordIdC);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "1hV"){

        if (dif1h > 0 || dif30m > 0 || (dif15m > 0 && dif5m > 0)){     
    
            let result = await api.closePositionSell(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastclose1hV`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose1hV'), ordIdV);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "4hC"){

        if (dif1h < 0 || dif30m < 0 || (dif15m < 0 && dif5m < 0)){     

            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose4hC`), result);

                let ordIdC = result.orderId;
                set(ref(database, 'rsidata/log/idClose4hC'), ordIdC);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }else if (flag == "4hV"){

        if (dif1h > 0 || dif30m > 0 || (dif15m > 0 && dif5m > 0)){     
    
            let result = await api.closePositionSell(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastclose4hV`), result);

                let ordIdV = result.orderId;
                set(ref(database, 'rsidata/log/idClose4hV'), ordIdV);

                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

    }

    if (oldFlag != flag){

        console.log('');
        console.log(`${oldFlag} FECHADO!`);
        console.log('');

    }

    //return
    //return flag;
}

async function calcStopEmerg(posit){
    //console.log('calcStopEmerg');
    console.log(`calcStopEmerg/initPosit: ${posit.positionInitialMargin}`);
    console.log(`calcStopEmerg/pnl: ${posit.unrealizedProfit}`);
    console.log(`calcStopEmerg/flag: ${flag}`);

    var n1 = Number.parseFloat(posit.positionInitialMargin);
    var n2 = Number.parseFloat(posit.unrealizedProfit);
    var nx = n1 / 2;
    //var n3 = nx * 3;
    var n4 = Math.abs(n2);     

    if(n2 < 0 && n4 >= nx){

        console.log('');
        console.log('STOP DE MARGEM: (- 50%)');
        console.log('');        
        
        if (flag == "St00V" || flag == "1mV" || flag == "5mV" || flag == "15mV" || flag == "1hV" || flag == "St00V"){     
        
            let result = await api.closePositionSell(timestamp);
            if (result != undefined){
                set(ref(database, `rsidata/log/lastclose${flag}_E`), result);

                let ordIdV = result.orderId;
                set(ref(database, `rsidata/log/idClose${flag}_E`), ordIdV);

                flag = flag + '_E';
                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }

        if (flag == "St00C" || flag == "1mC" || flag == "5mC" || flag == "15mC" || flag == "1hC" || flag == "St00C"){     
        
            let result = await api.closePositionBuy(timestamp);
            if (result != undefined){

                set(ref(database, `rsidata/log/lastclose${flag}_E`), result);

                let ordIdC = result.orderId;
                set(ref(database, `rsidata/log/idClose${flag}_E`), ordIdC);

                flag = flag + '_E';
                let histOrd = createHistObj(result);
                set(ref(database, `rsidata/hist/${result.orderId}`), histOrd);

                flag = "";
                objSendcalc.flag = flag;
                objSendcalc.positions = null;            
                //set(ref(database, 'rsidata/obj/positions'), null);
            }
        }
    }
}

async function histFix (timestamp){

    //console.log('histFix');

    //var histFixObj = [];

    const userTrades = await api.userTrades(timestamp);
    var userTradesObj = userTrades;

    var histFixObj = null;

    if(userTrades != null && userTrades != undefined){

        await get(child(dbRef, 'rsidata/hist')).then((snapshot) => {    
            if (snapshot.exists()) {
                const data = snapshot.val();
                
                if(data){
                histFixObj = data;               
                }

            } else {

                set(ref(database, 'rsidata/log/errorhistFix'), "histFixObj Nulo");
            }
        }).catch((error) => {
            console.error(error);
        });

        if (histFixObj != null){
            for (let i = 0; i < userTradesObj.length; i++) {
            
                //console.log(`userTradesObj [${i}] = { ${JSON.stringify(userTradesObj[i])} }`);
                        
                if (histFixObj[userTradesObj[i].orderId]){

                    histFixObj[userTradesObj[i].orderId].realizedPnl = userTradesObj[i].realizedPnl;
                    histFixObj[userTradesObj[i].orderId].closePrice = userTradesObj[i].price;
                    histFixObj[userTradesObj[i].orderId].lastUpdate = userTradesObj[i].time;
                    
                }
                
                //console.log('test');

                //var v = userTradesObj.filter(b => b.orderId === histFixObj[i].orderId);
                
                //histFixObj[i].closePrice = v.price;
                //histFixObj[i].realizedPnl = v.realizedPnl;

            }
        }
        await set(child(dbRef, 'rsidata/hist'), histFixObj);   
    } 

}

function createHistObj(result){ 
    //var histObj = {};
    //const userTrades = await api.userTrades(timestamp);
    //const lastTrade = userTrades.filter(b => b.orderId === result.orderId);
    //let pnlrealized = lastTrade[0].realizedPnl;

    //const income = await api.income(timestamp);
    //if (income != undefined){
        //var pnlHist = income.filter(b => b.incomeType === 'REALIZED_PNL'); // || b.asset === 'USDT');
        //let pnlrealized = pnlHist[pnlHist.length-1].income;

        const histObj = {

            orderId: result.orderId,
            firstUpdate: position[`${cryptSymbol}`][0].updateTime,
            lastUpdate: result.updateTime,
            symbol: position[`${cryptSymbol}`][0].symbol,
            entryPrice: position[`${cryptSymbol}`][0].entryPrice,
            //closePrice: lastTrade[0].price,
            closePrice: objSendcalc.tick,
            isolatedMargin: position[`${cryptSymbol}`][0].isolatedWallet,
            highPnl: position[`${cryptSymbol}`][0].unrealizedProfit,
            lowPnl: position[`${cryptSymbol}`][0].unrealizedProfit,
            //realizedPnl: pnlrealized, // position[0].unrealizedProfit,
            realizedPnl: "0.0", // position[0].unrealizedProfit,
            flag: flag

        }  
        console.log(`histObj: ${JSON.stringify(histObj)}`);
    //}
    return histObj;

}

function calcSignals(objSendcalc) {
    
    //const app = initializeApp(firebaseConfig);
    //const database = getDatabase(app);

    const rsi1mdif = objSendcalc.stoch1m.k - objSendcalc.stoch1m.d;
    const rsi1mdif2 = objSendcalc.stoch1mprev.k - objSendcalc.stoch1mprev.d;   
    const sig1m = calcFlag(objSendcalc.stoch1m, rsi1mdif, rsi1mdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi1m'), sig1m);

    const rsi3mdif = objSendcalc.stoch3m.k - objSendcalc.stoch3m.d;
    const rsi3mdif2 = objSendcalc.stoch3mprev.k - objSendcalc.stoch3mprev.d;   
    const sig3m = calcFlag(objSendcalc.stoch3m, rsi3mdif, rsi3mdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi3m'), sig3m);

    const rsi5mdif = objSendcalc.stoch5m.k - objSendcalc.stoch5m.d;
    const rsi5mdif2 = objSendcalc.stoch5mprev.k - objSendcalc.stoch5mprev.d;   
    const sig5m = calcFlag(objSendcalc.stoch5m, rsi5mdif, rsi5mdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi5m'), sig5m);

    const rsi15mdif = objSendcalc.stoch15m.k - objSendcalc.stoch15m.d;
    const rsi15mdif2 = objSendcalc.stoch15mprev.k - objSendcalc.stoch15mprev.d;   
    const sig15m = calcFlag(objSendcalc.stoch15m, rsi15mdif, rsi15mdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi15m'), sig15m);

    const rsi30mdif = objSendcalc.stoch30m.k - objSendcalc.stoch30m.d;
    const rsi30mdif2 = objSendcalc.stoch30mprev.k - objSendcalc.stoch30mprev.d;   
    const sig30m = calcFlag(objSendcalc.stoch30m, rsi30mdif, rsi30mdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi30m'), sig30m);

    const rsi1hdif = objSendcalc.stoch1h.k - objSendcalc.stoch1h.d;
    const rsi1hdif2 = objSendcalc.stoch1hprev.k - objSendcalc.stoch1hprev.d;   
    const sig1h = calcFlag(objSendcalc.stoch1h, rsi1hdif, rsi1hdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi1h'), sig1h);

    const rsi4hdif = objSendcalc.stoch4h.k - objSendcalc.stoch4h.d;
    const rsi4hdif2 = objSendcalc.stoch4hprev.k - objSendcalc.stoch4hprev.d;   
    const sig4h = calcFlag(objSendcalc.stoch4h, rsi4hdif, rsi4hdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi4h'), sig4h);

    const rsi1ddif = objSendcalc.stoch1d.k - objSendcalc.stoch1d.d;
    const rsi1ddif2 = objSendcalc.stoch1dprev.k - objSendcalc.stoch1dprev.d;   
    const sig1d = calcFlag(objSendcalc.stoch1d, rsi1ddif, rsi1ddif2);

    //set(ref(database, 'rsidata/obj/signals/rsi1d'), sig1d);

    const rsi1wdif = objSendcalc.stoch1w.k - objSendcalc.stoch1w.d;
    const rsi1wdif2 = objSendcalc.stoch1wprev.k - objSendcalc.stoch1wprev.d;   
    const sig1w = calcFlag(objSendcalc.stoch1w, rsi1wdif, rsi1wdif2);

    //set(ref(database, 'rsidata/obj/signals/rsi1w'), sig1w);

    const sig = {

        rsi1m: sig1m,
        rsi3m: sig3m,
        rsi5m: sig5m,
        rsi15m: sig15m,
        rsi30m: sig30m,
        rsi1h: sig1h,
        rsi4h: sig4h,
        rsi1d: sig1d,
        rsi1w: sig1w        
    }

    return sig;
}

function calcFlag(item, dif, dif2){

    let flag = 0;  // 0 = neutro; 1 = Pré-compra; 2 = comprar; -1 = Pré-venda; -2 = vender

    if (item.k > 70 && item.d > 70){                                        // sobrecomprado
        if(dif > 0){                                                        // subindo
            if(dif < dif2){                                                 // revertendo para baixo ex.: (4 < 5) = true
                if(dif < 2){
                    flag = -1; // Pré-venda
                }                                                 
            }
        }else if(dif < 0){                                                  // caindo
            flag = -2; // vender
        }
    }else
    if (item.k < 30 && item.d < 30){                                        // sobrevendido
        if(dif > 0){                                                        // subindo
            flag = 2; // comprar
        }else if(dif < 0){                                                  // caindo
            
            if(dif > dif2){                                                 // revertendo para cima  ex.: (-4 > -5) = true
                if(dif > -2){
                    flag = 1; // Pré-compra
                }                                                 
            }
        }
    }else{
        flag = 0; // neutro
    }

    return flag;
}

function writeUserData(objSendcalc) {

    //histObj
    objSendcalc.flag = flag;
    set(ref(database, 'rsidata/obj'), objSendcalc);
    set(ref(database, 'rsidata/positions'), position);
}

function criarObj1m(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr1m.push(formattedTime);
    timestampArr1m.push(unix_timestamp);
    openArr1m.push(item[1]);
    closeArr1m.push(item[4]);
    highArr1m.push(item[2]);
    lowArr1m.push(item[3]);
    volArr1m.push(item[5]);

}

function criarObj3m(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr3m.push(formattedTime);
    timestampArr3m.push(unix_timestamp);
    openArr3m.push(item[1]);
    closeArr3m.push(item[4]);
    highArr3m.push(item[2]);
    lowArr3m.push(item[3]);
    volArr3m.push(item[5]);

}

function criarObj5m(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr5m.push(formattedTime);
    timestampArr5m.push(unix_timestamp);
    openArr5m.push(item[1]);
    closeArr5m.push(item[4]);
    highArr5m.push(item[2]);
    lowArr5m.push(item[3]);
    volArr5m.push(item[5]);

}

function criarObj15m(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr15m.push(formattedTime);
    timestampArr15m.push(unix_timestamp);
    openArr15m.push(item[1]);
    closeArr15m.push(item[4]);
    highArr15m.push(item[2]);
    lowArr15m.push(item[3]);
    volArr15m.push(item[5]);

}

function criarObj30m(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr30m.push(formattedTime);
    timestampArr30m.push(unix_timestamp);
    openArr30m.push(item[1]);
    closeArr30m.push(item[4]);
    highArr30m.push(item[2]);
    lowArr30m.push(item[3]);
    volArr30m.push(item[5]);

}

function criarObj1h(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr1h.push(formattedTime);
    timestampArr1h.push(unix_timestamp);
    openArr1h.push(item[1]);
    closeArr1h.push(item[4]);
    highArr1h.push(item[2]);
    lowArr1h.push(item[3]);
    volArr1h.push(item[5]);

}

function criarObj4h(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr4h.push(formattedTime);
    timestampArr4h.push(unix_timestamp);
    openArr4h.push(item[1]);
    closeArr4h.push(item[4]);
    highArr4h.push(item[2]);
    lowArr4h.push(item[3]);
    volArr4h.push(item[5]);

}

function criarObj1d(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr1d.push(formattedTime);
    timestampArr1d.push(unix_timestamp);
    openArr1d.push(item[1]);
    closeArr1d.push(item[4]);
    highArr1d.push(item[2]);
    lowArr1d.push(item[3]);
    volArr1d.push(item[5]);

}

function criarObj1w(item){

    let unix_timestamp = item[0]
    var formattedTime = formatTime(unix_timestamp);

    dateArr1w.push(formattedTime);
    timestampArr1w.push(unix_timestamp);
    openArr1w.push(item[1]);
    closeArr1w.push(item[4]);
    highArr1w.push(item[2]);
    lowArr1w.push(item[3]);
    volArr1w.push(item[5]);

}

function formatTime(timestamp){

    var date = new Date(timestamp);
    var hours = date.getHours()-3;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    /*switch(hours){
        case 0 :
            hours = 24;
            break;
        case 1 :
            hours = 25;
            break;
        case 2 :
            hours = 26;
            break;
        case 3 :
            hours = 27;
            break;
    
    }*/
    //var x = hours-3;
    //hours = x;
    //var x = hours-3;
    //hours = hours-3;
    minutes = minutes;
    seconds = seconds;

    if (hours < 10){
        //var edited = "0"+hours;
        hours = "0"+ hours;
    }

    if (minutes < 10){
        minutes = "0"+ minutes;
    }

    if (seconds < 10){
        seconds = "0"+ seconds;
    }

    var formattedTime = hours + ':' + minutes + ':' + seconds;

    return formattedTime;
}

export default data;
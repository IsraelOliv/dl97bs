import api from './api';
//import { CacheHandler, getcach, setcach } from './cache-handler';
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

const cachehandler = require('./cache-handler');


async function data(request, response){ 
    
    /*
    connect(); // Iniciar a conexão WebSocket
    cacheJson = carregarCache();
    cacheJson.objSendcalc = null;
    salvarCache(cacheJson);
    */

    cachehandler.setcach('testProp', "valor da chave");
    var cache = cachehandler.getcach('testProp');
    console.log("cache", cache);
    
    start_position: while (true) {
        
        response.json("test");

        if (number < 100) continue start_position;
        break;

    }
}

export default data;
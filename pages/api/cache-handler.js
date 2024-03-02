import axios from 'axios';
import queryString from 'querystring';


const cache = new Map()

class CacheHandler {
  constructor(options) {
    this.options = options
    this.cache = {}
    console.log('initialized custom cache-handler')
  }
}
  async function getcach(key) {
    console.log('cache-handler get', key)
    return cache.get(key)
  }

  async function setcach(key, data) {
    console.log('cache-handler set', key)
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
    })
  }




module.exports = {CacheHandler, getcach, setcach};

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
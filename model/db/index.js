(async ()=>{
    const database = require('./db');
    const orcamento = require('./Orcamento');
    await database.sync();
})();
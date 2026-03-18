const cds = require('@sap/cds');
const { stringfy } = require('querystring');
module.exports = cds.service.impl(async function(srv){
    srv.on('Helloworld', req => {
        console.log(req.data.input)
        return '${req.data.input} world'
    })
    
})
// require traz o modulo
// http é um modulo por padrao do node
const http = require('http');

// metodo createServer é por padrao do node
const servidor = http.createServer(function (req, resp) {
    // function com requisicao e resposta

    // resp.end é resposta
    resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>

            <body>
                <h1>
                    Node.js
                </h1>
            </body>
        </html>
        `);
});

// servidor rodar na porta 3000
servidor.listen(3000);
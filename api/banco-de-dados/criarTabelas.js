const ModeloTabela = require('../rotas/fornecdores/ModeloTabelaFornecedor')

ModeloTabela
.sync()
.then(() => console.log('Tabela criada com sucesso'))
.catch(console.log)
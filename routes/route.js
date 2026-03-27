const express = require('express')
const route = express.Router()

route.get('/alunos', alunos.getAlunos)
route.post('/alunos', alunos.postAlunos)
route.put('/alunos', alunos.putAlunos)
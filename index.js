const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const task = require('./models/task')
const TaskModel = require('./models/task')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.db'
})

const tasks = TaskModel(sequelize, DataTypes)

app.use(express.json())
app.set('view engine', 'ejs')


// metodo Get, listando tarefas
app.get('/tasks', async (req, res) =>{
//const allTasks = await tasks.findAll()
const allTarefa = await sequelize.query('SELECT * FROM taskS')
  res.json({ allTarefa })
})

//Metodo Post criando tarefas
app.post('/tasks', async (req, res) => {
    const body = req.body
    const task = await tasks.create(body)
        
    res.json({ task })
  })

  //
app.get('/tasks/:id', async (req, res) =>{
    const TaskId = req.params.id
    const task = await tasks.findByPK(taskId)
    res.send({ action: 'Showin task', taskId: taskId })
})

//atualizar
app.put('/tarefa/:id', async (req, res) => {
    const tarefaId = req.params.id
    const body = req.body
    const tarefa = await tasks.findByPk(taskId)
  
    if (tarefa) {
      await tarefa.update({ ...body })
      res.send({ tarefa })
    } else {
      res.status(404)
      res.send({ message: 'Tarefa não achada' })
    }
  })
  
  //deletar
  
  app.delete('/tarefa/:id', async (req, res) => {
    const tarefaId = req.params.id
    const tarefa = await tasks.findByPk(tarefaId)
  
    if (task) {
      await task.destroy({ where: { id: 3 }})
      res.send({ tarefa })
    } else {
      res.status(404)
      res.send({ message: 'Tarefa não achada' })
    }
  })
  


app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
})
const express = require('express');
//llamamos al modulo Router de expres
const router = express.Router();
const model = require('../model/task');



//Traemos todas las tareas
router.get('/',(req,res) => {
    model.find({}, (err, tasks) =>{
        if(err) throw err;

        res.render('index',{
            title : 'Crud ',
            h1 : 'CRUD EXPRESS_MONGO',
            tasks : tasks
        });
    });
});

//Enviamos una tarea
router.post('/add', (req,res) => {

    let body = req.body;
    body.status = false;
    //Creamos un modelo con los datos que vienen en e cuerpo de la petición
    model.create(body, (err, task) =>{
        if(err) throw err;
        res.redirect('/');
    })
});

//Actualizamos datos del modelo, en este caso el status
router.get('/turn/:id', (req,res)=> {
    //recibimos el id del enlace
    let id = req.params.id;
    //Pasamos a la func ion para que lo busque, puede retornar un error o una tarea
    model.findById(id, (err, task)=>{
        if(err) throw err;
        //Si encuentra la tarea que le cambie el estado
        task.status = !task.status;
        //gardamos el cambio
        task.save()
        //cuando termine esa tarea, redireccionamos la pagina
            .then( () => res.redirect('/'))
    });
});
//Borramos el modelo
router.get('/delete/:id', (req,res)=>{
     //recibimos el id del enlace
     let id = req.params.id;
     //eliminamos la tarea con ese id
     model.remove({_id: id}, (err,task)=> {
         if(err) throw err;
         res.redirect('/');
     })
});
//Exportamos el enrutador
module.exports = router;
const express = require('express')
const router = express.Router()

const { addUser, getUsers, getUser, updateUser, deletUser } = require('./../handlers/userHandle')


router.post('/users',async  (req, res) => {
    console.log("req body", req.body);
      let user= addUser(req.body)
    res.send(user)
  });
  
  router.get('/users',async  (req, res) => {
    let users =  await getUsers()
    res.send(users)
  });

  router.get('/users/:id',async  (req, res) => {
    console.log("id",req.params["id"]);
    let user =  await getUser(req.params["id"])
    res.send(user)
  });

  router.put('/users/:id',async  (req, res) => {
    console.log("id",req.params["id"]);
    let user =  await updateUser(req.params["id"],req.body)
    res.send(user)
  });
  router.delete('/users/:id',async  (req, res) => {
    console.log("id",req.params["id"]);
    await deletUser(req.params["id"])
    res.send()
  });


module.exports = router
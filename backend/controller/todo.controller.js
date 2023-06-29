
const {TodoModal}=require("../modals/todoModal")
const {client}=require('../config/redis')

const addTask = async (req, res) => {
  const {title,description,status,userId}=req.body
    try {
      const task = new TodoModal({title,description,status,userId});
      await task.save();
      // client.SETEX("task",3600,JSON.stringify(task))
      client.RPUSH(`tasks${userId}`, JSON.stringify(task));
      client.EXPIRE(`tasks${userId}`, 3600);
      res.status(201).json({"message":"Todo created successfully"});
    } catch (error) {
      console.error('Error adding task:', error);
      res.status(500).json({ "message": 'An error occurred' });
    }
  };

  const getTask=async(req,res)=>{
    try {
      const task=await TodoModal.find()
      console.log(task)
      client.SETEX("task",3600,JSON.stringify(task))
      
      res.json(task)
    } catch (error) {
      console.error('Error getting task:', error);
      res.status(500).json({ "message": 'Getting error while getting task' });
      
    }
  }

  const redis_post=async(req,res,next)=>{
    console.log("redis")
    client.get("task",(err,redis_data)=>{
      if(err){
        res.status(400).json({"message":"getting err"})
      }else if(redis_data){
        res.send(JSON.parse(redis_data))
      }else{
        next()
      }
    })
  }

const searchTask=async(req,res)=>{
  const {query}=req.query
  // console.log(title)
  // console.log(description)
  try {
    const result=await TodoModal.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex:query, $options: 'i' } }
      ]
    })
    res.status(201).json({"message":"Searched todo",result})
  } catch (error) {

    console.log(error);
    res.status(500).json({"message":"Facing issue while searching todo"})
  }
}

const deletTask=async(req,res)=>{
  const id=req.params.id
  try {
    await TodoModal.findByIdAndDelete({_id:id})
    res.status(201).json({"message":"todo has been deleted"})
  } catch (error) {
    console.log(error);
    res.status(500).json({"message":"Unable to delete data"})
  }
}

const updateTask=async(req,res)=>{
  const id = req.params.id;
  const payload = req.body;
  try {
    if (!id) {
      res.status(400).send({ message: "Please provied id" });
    }
    await TodoModal.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

  module.exports={
    addTask,
    getTask,
    redis_post,
    searchTask,
    deletTask,
    updateTask
  }
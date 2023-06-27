const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    title:String,
    description:String
})

const TodoModal=mongoose.model("todos",todoSchema);

module.exports={TodoModal}
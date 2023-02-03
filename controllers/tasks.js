import User from "../models/user.js";
import Task from "../models/task.js";

export default {
    create,
    index,
};

async function create(req, res){
    console.log(req.user, "<<THATS YOUR USER", req.body)
    // why cant i see this in my terminal?

    try {
        const task = await Task.create({
            user: req.user_id,
            task: req.body.content
        })
        console.log(task)
        await task.populate('user')
        res.status(201).json({task})

    } catch (err) {
        res.status(400).json({err})
    }
}

// ask why i got an error saying await cant be used without the async 


async function index(req, res){
    try {
        const tasks = await Task.find({}).populate("user").exec();
        res.status(200).json({data: tasks});
    } catch (err) {
        res.status(400).json({err})
    }
}
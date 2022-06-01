const db = require("../config/db.config");
const List = db.list;
const Task = db.task;
exports.createList = (req, res) => {
  List.create({
    title: req.body.title,
    user_id: req.body.user_id,
    done: false,
  })
    .then(() => {
      res.send({ message: "List created successfully" });
    })
    .catch((err) => {
      res.status(500).send("Fail! Error -> " + err);
    });
};
exports.getLists = async (req, res) => {
  console.log(req.params);
  const lists = await List.findAll({
    where: {
      user_id: req.params.id,
    },
  });
  const tasks = await Task.findAll();
  res.json({ lists: lists, tasks: tasks });
};
exports.getList = (req, res) => {
  List.findOne({
    where: {
      _id: req.body._id,
    },
  })
    .then((list) => {
      if (!list) {
        return res.status(404).send({ message: "List Not Found." });
      }
      res.status(200).send({ list });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
exports.deleteList = (req, res) => {
  Task.destroy({
    where: {
      List_id: req.params.id,
    },
  })
    .then(
      List.destroy({
        where: {
          id: req.params.id,
        },
      })
    )
    .then((list) => {
      res.status(200).send({ message: "List is Deleted" });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.createTask = (req, res) => {
  Task.create({
    text: req.body.text,
    user_id: req.body.user_id,
    list_id: req.body.list_id,
    done: req.body.isDone,
    inprogress: req.body.IsInProgress,
  })
    .then(() => {
      res.json({ message: "Task created successfully" });
    })
    .catch((err) => {
      res.status(500).send("Fail! Error -> " + err);
    });
};
exports.updateTask = (req, res) => {
  Task.update({
    id: +req.body.id,
    text: req.body.text,
    user_id: req.body.user_id,
    list_id: req.body.list_id,
    done: req.body.isDone,
    inprogress: req.body.IsInProgress,
  })
    .then(() => {
      res.json({ message: "Task updated successfully" });
    })
    .catch((err) => {
      res.status(500).send("Fail! Error -> " + err);
    });
};
exports.getTasks = (req, res) => {
  Task.findAll()
    .then((task) => {
      res.status(200).send({ task });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
exports.deleteTask = (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((task) => {
      if (!task) {
        return res.status(404).send({ message: "List Not Found." });
      }
      res.status(200).send({ message: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

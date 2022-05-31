const db = require("../config/db.config");
const Note = db.note;

exports.createNote = (req, res) => {
  console.log(req.body);
  // Save User to Database
  Note.create({
    title: req.body.title,
    text: req.body.text,
    user_id: req.body.user_id,
  })
    .then(() => {
      res.send({ message: "Note created successfuly" });
    })
    .catch((err) => {
      res.status(500).send("Fail! Error -> " + err);
    });
};
exports.getNotes = async (req, res) => {
  console.log(req.params);
  const notes = await Note.findAll({
    where: {
      user_id: req.params.id,
    },
  });
  // const tasks = await Task.findAll();
  res.json({ notes: notes });
};
exports.getNote = (req, res) => {
  Note.findOne({
    where: {
      _id: req.body._id,
    },
  })
    .then((note) => {
      if (!note) {
        return res.status(404).send({ message: "Note Not Found." });
      }
      res.status(200).send({ note });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
exports.deleteNote = (req, res) => {
  Note.destroy({
    where: {
      Note_id: req.params.id,
    },
  })
    .then(
      Note.destroy({
        where: {
          id: req.params.id,
        },
      })
    )
    .then((note) => {
      res.status(200).send({ message: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

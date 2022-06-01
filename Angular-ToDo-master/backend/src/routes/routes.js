module.exports = function (app) {
  const usercontroller = require("../controllers/usercontroller");
  const listController = require("../controllers/listcontroller");
  const noteController = require("../controllers/notecontroller");
  const autorizated = require("../middleware/validateToken");
  app.post("/signup", usercontroller.signup);
  app.post("/login", usercontroller.signin);
  app.post("/add-list", autorizated.validateToken, listController.createList);
  app.post("/add-note", autorizated.validateToken, noteController.createNote);
  app.post(
    "/update-note",
    autorizated.validateToken,
    noteController.updateNote
  );
  app.get("/get-notes/:id", noteController.getNotes);
  app.get("/get-lists/:id", listController.getLists);
  app.get("/get-note/:id", noteController.getNote);
  app.get("/get-list/:id", listController.getList);
  app.delete(
    "/delete-list/:id",
    autorizated.validateToken,
    listController.deleteList
  );
  app.delete(
    "/delete-note/",
    autorizated.validateToken,
    noteController.deleteNote
  );
  app.post("/add-task", autorizated.validateToken, listController.createTask);
  app.post(
    "/update-task/",
    autorizated.validateToken,
    listController.updateTask
  );
  app.delete(
    "/delete-task/:id",
    autorizated.validateToken,
    listController.deleteTask
  );
};

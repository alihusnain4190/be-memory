const familyTodo = require("express").Router();
const {
  getFamilyTodoListController,
  postFamilyTodoListController,
  deleteTodoListControllerById,
  updateTodoListControllerByID,
} = require("../controllers/familyTodoController");
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
familyTodo
  .route("/")
  .get(withErrorHandling(getFamilyTodoListController))
  .post(withErrorHandling(postFamilyTodoListController))
  .all(methodNotAllowed);
familyTodo
  .route("/:f_id")
  .patch(withErrorHandling(updateTodoListControllerByID))
  .delete(withErrorHandling(deleteTodoListControllerById))
  .all(methodNotAllowed);
module.exports = familyTodo;

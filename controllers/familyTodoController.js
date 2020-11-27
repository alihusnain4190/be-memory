const {
  fetchFamilyTodoListModel,
  insertFamilyTodoListModel,
  deleteTodoListModelById,
  updateTodoListModelByID,
} = require("../models/familyTodoModel");
exports.getFamilyTodoListController = async (req, res) => {
  const f_todo = await fetchFamilyTodoListModel();
  res.status(200).send({ f_todo });
};

exports.postFamilyTodoListController = async (req, res) => {
  const data = req.body;

  const f_todo = await insertFamilyTodoListModel(data);
  console.log(f_todo);
  res.status(201).send({ f_todo });
};
exports.deleteTodoListControllerById = async (req, res) => {
  const { f_id } = req.params;

  const result = await deleteTodoListModelById(f_id);
  console.log(result);
  res.status(204).send("successfully deleted");
};

exports.updateTodoListControllerByID = async (req, res) => {
  const { f_id } = req.params;
  const body = req.body;

  const result = await updateTodoListModelByID(f_id, body);
  res.status(201).send({ result });
};

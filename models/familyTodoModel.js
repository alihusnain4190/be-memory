const db = require("../db/connection");
exports.fetchFamilyTodoListModel = async (order = "asc") => {
  const data = await db
    .select("*")
    .from("family-task")
    .orderBy("created_at", order);
  if (!data) {
  }
  return data;
};

exports.insertFamilyTodoListModel = async (data) => {
  const result = await db("family-task").insert(data).returning("*");

  if (result.length === 0) {
    return Promise.reject({ status: 404, msg: "data does not exist" });
  }
  return result[0];
};
exports.deleteTodoListModelById = async (id) => {
  const data = await db("family-task").where({ id }).del();
  if (!data) {
    return Promise.reject({ status: 404, msg: "Id Not Exist" });
  }
  return data;
};
exports.updateTodoListModelByID = async (id, data) => {
  const result = await db("family-task")
    .where({ id })
    .update(data)
    .returning("*");
  if (result.length===0) {
    return Promise.reject({ status: 404, msg: "Id Not Exist" });
  }
  return result[0];
};

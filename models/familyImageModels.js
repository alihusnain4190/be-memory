const _ = require("underscore");
const db = require("../db/connection");

const fs = require("fs");
const fileType = require("file-type");
const multiparty = require("multiparty");

exports.getAllFamilyImageModel = async ({ sort_by, order = "asc" }) => {
  const data = await db
    .select("*")
    .from("family-image")
    .orderBy(sort_by || "created_at", order);
  return data;
};
exports.fetchFamilyImageModelByID = async (f_id) => {
  const data = await db
    .select("*")
    .from("family-image")
    .where({ id: f_id })
    .first();
  if (!data) {
    return Promise.reject({ status: 404, msg: "Id Not Exist" });
  }
  return data;
};

exports.insertFamilyImageController = async (body) => {
  if (_.isEmpty(body)) {
    return Promise.reject({ status: 404, msg: "nothing is sending" });
  }
  const data = await db("family-image").insert(body).returning("*");

  return data[0];
};
exports.removeFamilyImageControllerByID = async (f_id) => {
  const data = await db("family-image").where({ id: f_id }).del();
  if (!data) {
    return Promise.reject({ status: 404, msg: "Id Not Exist" });
  }
  return data;
};
exports.patchFamilyImageControllerByID = async (f_id, body) => {
  console.log(f_id);
  console.log(body);
  const data = await db("family-image")
    .update(body)
    .where({ id: f_id })
    .returning("*");
  return data[0];
};


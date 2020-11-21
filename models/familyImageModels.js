const db = require("../db/connection");
exports.getAllFamilyImageModel = async ({ sort_by, order = "asc" }) => {
  

  const data = await db
    .select("*")
    .from("family-image")
    .orderBy(sort_by || "created_at", order);
  return data;
};

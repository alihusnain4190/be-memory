exports.up = function (knex) {
  return knex.schema.createTable("family-task", (familyTask) => {
    familyTask.increments("id").primary();
    familyTask.text("f_task").notNullable();
    familyTask.string("f_day");
    familyTask.boolean("f_status");
    familyTask.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("family-task");
};

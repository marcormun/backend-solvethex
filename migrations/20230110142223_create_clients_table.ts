import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("clients", (table) => {
        table.increments("id").primary();
        table.string("name", 255).notNullable();
        table.string("email", 255).notNullable();
        table.string("password", 255).notNullable();
        table.timestamps(false, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("clients");
}


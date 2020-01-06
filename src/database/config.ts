import path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import DatabaseNamingStrategy from "./namingStrategy";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [`${path.join(__dirname, "..", "models")}/*.[ts]s`],
  migrations: [`${__dirname}/models/*.[ts]s`],
  namingStrategy: new DatabaseNamingStrategy()
};

export { typeOrmConfig };

import { DataSource } from "typeorm";
import { User } from "./models/User";
//Conexion a base de datos
export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "node_mysql_ts",
    entities: [User],
    synchronize: true,
    logging: false,
});


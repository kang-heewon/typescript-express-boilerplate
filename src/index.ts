import { runServer } from "./server";
import { connectDatabase } from "./database";

const PORT = Number(process.env.PORT) || 3000; // default port
const HOST = process.env.HOST || "localhost"; // localhost

async function startApplication() {
  try {
    await connectDatabase();
    // tslint:disable-next-line:no-console
    console.log("database is connected successfully");
    await runServer(HOST, PORT);
    // tslint:disable-next-line:no-console
    console.log(`server is running on ${PORT}`);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
    throw e;
  }
}

startApplication();

import { connect, ConnectOptions } from "mongoose";
import config from "./config";

//const mongooseOptions: ConnectOptions = {
	
	//user: config.MONGO_USER,
	//pass: config.MONGO_PASSWORD
//}

async function run() {

	const db = await connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
	console.log('db conected to: ', db.connection.name);
}


run().catch( err => console.log(err) );

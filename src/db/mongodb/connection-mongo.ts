import { connect } from "mongoose";

export async function dbConnection(): Promise<string>{
    try{

        const MONGODB_URL = `mongodb://${process.env.MONGODB_USER ?? "root"}:${process.env.MONGODB_PASS ?? "admin"}@${process.env.MONGODB_HOST ?? "localhost"}:${process.env.MONGODB_PORT ?? "27017"}/${process.env.MONGODB_DATABASE ?? "retobares"}?authSource=admin`;

        await connect(MONGODB_URL);
        return "Database Mongodb onlien";
    }catch(error){
        throw "Databaes Mongodb Error";
    }
}
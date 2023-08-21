import "reflect-metadata";
import { inject, injectable } from "inversify";
import mongoose, { Types } from "mongoose";
import "../../config/config";
import { IDataBaseConnection } from "./interfaces/database.interface";

@injectable()
export class DatabaseConnction implements IDataBaseConnection{

    public connect():boolean {
        try {
            let options:any = { useNewUrlParser: true, useUnifiedTopology:true }
            let mongoDBUrl:string  = process.env.MONGO_DB_URL ? String(process.env.MONGO_DB_URL) : "";

            mongoose.connect(mongoDBUrl, options);

            mongoose.connection.on('error', (err:any)=>{
                console.log(`DB error ${err}`);
            });

            mongoose.connection.on('disconnected', (err:any)=>{
                console.log(`DB disconnected error ${err}`);
            });


            return true;
        } catch (error) {
            return false;
        }
    }
}

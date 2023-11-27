import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!) // ! : It is used to remove the squiggly lines from the code . As in Typescript we have to assure to resolve the link we have to add ! to remove the squiggly line.

        const connection = mongoose.connection;

        console.log("Database connected successfully !!!");

        console.log(connection);

        connection.on("connected", () => {}); // It is used to check if the connection is established or not.

        connection.on("error", (err) =>  { // It is used to check if the connection has error or not.
            console.log("Something went wrong !!!");
            console.log(err);
        })
    }catch(error){
        console.log("Something went wrong !!!");
        console.log(error);
    }
}
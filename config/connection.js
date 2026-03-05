import mongoose from "mongoose";

const dbConnection = () => {
    try {
        // "mongodb+srv://alangomez0047:Alan123@cluster0.nfyn1iq.mongodb.net/?appName=Cluster0"
        // mongoose.connect('mongodb+srv://alangomez0047:Alan123@cluster0.nfyn1iq.mongodb.net/?appName=Cluster0');
        
        mongoose.connect('mongodb://localhost:27017/LibraryMangement')
        console.info("Db connected successfully");
        
    } catch (err) {
        console.log(err);
    };
}


export default dbConnection;
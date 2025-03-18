import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    location : {
        type : String
    },
    availableDates : [
        {
            type : String
        }
    ],
    description : {
        type : String
    }
}, {timestamps : true});

const Home =  mongoose.model("Home", homeSchema);
export default Home;
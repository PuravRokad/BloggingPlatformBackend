import mongoose from "mongoose";

const Schmea = mongoose.Schema;

const userSchema = new Schmea({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId, 
            ref:"Blog", 
            required:"true"
        }
    ]
});
export default mongoose.model("User", userSchema);


// users
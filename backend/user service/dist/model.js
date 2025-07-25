import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    playlist: [
        {
            type: String,
            required: true,
        },
    ],
}, {
    timestamps: true,
});
const User = mongoose.model("user", userSchema);
export default User;

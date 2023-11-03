import { Schema, model } from 'mongoose';

import  jwt from 'jsonwebtoken'


const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true  },
    voteChoice: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});



UserSchema.methods.generateJWT = async function () {
    return await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};




const User = model("User", UserSchema);
export default User;

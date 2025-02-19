import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
export { IUser };

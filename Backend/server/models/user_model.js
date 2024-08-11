import { Schema,model } from "mongoose";

const userSchema = new Schema({

fullName: {
    type: 'String',
    required: [true, 'Name is required'],
    minLength: [5, 'Name must be atleast 5 character'],
    maxLength: [50, 'Name must be less than 50 character'],
    lowercase: true,
    trim: true,
},
email: {
    type: 'String',
    required: [true,'Email is required'],
    lowercase: true,
    trim: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'],
},
password: {
    type: 'String',
    required: [true, 'Password is required'],
    minLength: [8,'min length is 8 character'],
    select: false
},
avatar:{
    public_id: {
        type: 'String'
    }
}

});

const User = model('User', userSchema);

export default User;

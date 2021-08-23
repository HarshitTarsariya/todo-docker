import mongoose from 'mongoose';

const {Schema} = mongoose;

const list=new Schema({
    title: String,
    status:{
        type: Boolean,
        default:false,
    }
});

export default mongoose.model('list',list);
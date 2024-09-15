import mongoose from 'mongoose';

const illnessCaseSchema = new mongoose.Schema({
  genre: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  lat:{
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  isEmailSent: {
    type: Boolean,
    required: false,
    default: false
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

export const IllnessCaseModel = mongoose.model('IllnessCase', illnessCaseSchema);
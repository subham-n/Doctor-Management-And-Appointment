const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization require"],
    },
    experience: {
      type: String,
      required: [true, "experience required"],
    },
    feesPerCunsaltation: {
      type: Number,
      required: [true, "fee required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
      required: [true, "work timing required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;

import mongoose, { Schema } from "mongoose";
import { UserRolesEnum, UserLoginType } from "../constants";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: `https://via.placeholder.com/200x200.png`,
      localPath: "",
    },
  },

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    enum: AvailableUserRoles,
    default: UserRolesEnum.USER,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  loginType: {
    type: String,
    enum: AvailableSocialLogins,
    default: UserLoginType.EMAIL_PASSWORD,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
    type: String,
  },
  forgotPasswordToken: {
    type: String,
  },
  forgotPasswordExpiry: {
    type: Date,
  },
  emailVerificationToken: {
    type: String,
  },
  emailVerificationExpiry: {
    type: Date,
  },
});

export const User = mongoose.Model("User", userSchema);

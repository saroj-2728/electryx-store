import express from "express";
import { handleUserProfileSetup } from "../controllers/User/userProfileSetup.js";
import { handleSellerProfileSetup } from "../controllers/Seller/sellerProfileSetup.js";

const router = express.Router()

router.post('/create/user', handleUserProfileSetup)

router.post('/create/seller', handleSellerProfileSetup)

export default router
import  express, { Router }  from "express";
import adminC from "../Controller/admin.controller.js";

const route  = Router(express)

route.post('/register',adminC)

export default route
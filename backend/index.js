//  when we use import statement then we have to use the file extension with them

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
import dotenv from "dotenv";
import connectDB from "./Utils/DataBaseConnect.js";
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.routes.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.routes.js"
//serve the frontend file on backend so we need the sept:1 path 
import path from "path";

dotenv.config({})

// Optained the directorypath of backend for adding drontend and backend
const _dirname = path.resolve();

// using the middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
  origin:'https://job-portal-website-ctdi.onrender.com',
  credentials:true
}

app.use(cors(corsOptions));



//Creation of API'S

app.use("/api/a1/user", userRoute);
app.use("/api/a1/company", companyRoute);
app.use("/api/a1/job", jobRoute);
app.use("/api/a1/application", applicationRoute);


//FOR UNDERSTANDING
/* By using /api/a1/user our Api lookes like and using these we check our code on postman
"http://localhost:5000/api/a1/user/register"
"http://localhost:5000/api/a1/user/login"
"http://localhost:5000/api/a1/user/profile/update"
*/

// serve the frontend file on backend step3
app.use(express.static(path.join(_dirname,"/frontend/dist"))); // /dist created wehn we run the commond npm run build

// adding Frontend and backend step4
app.get('*', (_,res)=>{
res.sendFile(path.resolve(_dirname, "frontend","dist","index.html"));
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{ //listeen take twoo parameter one is port number and anothe is one call back function
connectDB()
    console.log(`server is running at port: ${port}`);
    
})
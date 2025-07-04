import express from "express";
import { connectdb } from "./db/user_db.js";
import userRouter from "./routes/user_routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import companyRouter from "./routes/companyRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import historyRouter from "./routes/historyRoutes.js";

dotenv.config();

const app = express();
app.use(
  cors({
      // methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    // credentials: true,
    // preflightContinue: false,
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
connectdb();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/brands", companyRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/analytics", analyticsRoutes);

app.use(express.urlencoded({ extended: true }));

// console.log(process.env.FRONTEND_URL);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use((error, req, res, next) => {
  console.log(error, error.message);
  return res.status(400).json({ message: "internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


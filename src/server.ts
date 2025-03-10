import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import baseRouter from "./routing/v1";
import cors from "cors";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({ origin: "*" }));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

app.use("/api/v1", baseRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

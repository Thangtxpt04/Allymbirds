import express from "express";
// dùng để phân tích cú pháp các yêu cầu HTTP
import bodyParser from "body-parser";
// cho phép truy cập nguồn tài nguyên từ các máy khách khác nhau
import cors from "cors";
import dotenv from "dotenv";
//  helmet để bảo vệ ứng dụng khỏi các cuộc tấn công bảo mật
import helmet from "helmet";
// morgan để ghi lại các yêu cầu và trả về.
import morgan from "morgan";
import path from "path";
// chuyển đổi đường dẫn tệp URL sang đường dẫn tệp địa phương.
import { fileURLToPath } from "url";
import route from "./routes/index.js";
import { connect } from "./config/db/index.js";

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
//sử dụng tất cả các chính sách bảo mật có sẵn của Helmet.
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Routes
route(app);

// Connect to MongoDB
connect();

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `));

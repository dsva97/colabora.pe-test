import dotenv from "dotenv";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

dotenv.config({
  path: path.resolve(__dirname, "..", isProduction ? ".env" : ".env.local"),
});

export const config = {
  FRONTEND_DIST_PATH: path.resolve(__dirname, "..", "..", "frontend", "dist"),
  NODE_ENV: process.env.NODE_ENV,

  // FROM .env file
  PORT: process.env.PORT,
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_NAME: process.env.MONGO_NAME,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
  MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD,
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  AWS_S3_REGION: process.env.AWS_S3_REGION,
  AWS_S3_ACCESSKEY: process.env.AWS_S3_ACCESSKEY,
  AWS_S3_SECRETACCESS: process.env.AWS_S3_SECRETACCESS,
};

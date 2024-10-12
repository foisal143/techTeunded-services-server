import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db_url: process.env.DB_URL,
  port: process.env.PORT,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  stripe_pb_key: process.env.STRIPE_PB_KEY,
};

#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const messages = [
  ['I am glad to see you', 'school', new Date()],
  ['But I don\'t actually see you', 'Skun01', new Date()],
  ['Tet Holiday is coming, and we are about to go home', 'Bin', new Date()]
];

async function main() {
  console.log('sending...');
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
  });
  await client.connect();

  // Tạo bảng
  await client.query(`
    CREATE TABLE IF NOT EXISTS messages(
      id SERIAL PRIMARY KEY,
      text VARCHAR(255),
      username VARCHAR(25),
      added DATE
    );
  `);

  // Chèn dữ liệu
  for (const [text, user, added] of messages) {
    await client.query(
      'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
      [text, user, added]
    );
  }

  await client.end();
  console.log('done!');
}

main();

#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
  CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR( 255 ),
    text TEXT,
    added DATE
  );

  INSERT INTO messages(username, text, added)
  VALUES
    ('Daemon', 'Hello there, my dear nephews 🫡', '2024-08-10 13:34:00'),
    ('Aemond', 'Uncle👁👄◦', '2024-08-10 13:34:50'),
    ('Aegon', 'Hrrr. hel... uncleee... ', '2024-08-10 13:34:55'),
    ('Aemond', '👁👄◦', '2024-08-10 13:35:50'),
    ('Aegon', '...😂 lmao', '2024-08-10 13:36:05'),
    ('Aemond', '👍🏻', '2024-08-10 13:36:25'),
     ('Rhaenyra', 'Aemond, darling, is that a new fashion statement or...?', '2024-08-10 13:37:00'),
    ('Aemond', 'I call it the "one-eyed look." It’s catching on.', '2024-08-10 13:37:20'),
    ('Aegon', '...because someone might have caught something else 😬', '2024-08-10 13:37:35'),
    ('Daemon', 'Ah, Aegon. Always with the wit. 👀', '2024-08-10 13:38:00'),
    ('Helaena', 'I had a dream about someone losing their head... figuratively, of course. 😅', '2024-08-10 13:38:15'),
    ('Aegon', 'Or... literally? 🥲', '2024-08-10 13:38:30'),
    ('Viserys', 'What’s this about heads? Should I be concerned? 😐', '2024-08-10 13:39:00'),
    ('Aemond', 'Nothing, Father. Just sibling banter. 🗡️', '2024-08-10 13:39:20'),
    ('Aegon', 'Right. Banter. Just a friendly chat... like Aemond’s last one. 😬', '2024-08-10 13:39:40'),
    ('Daemon', 'I see this is getting... out of hand. Should we switch topics? 🦅', '2024-08-10 13:40:00');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();

import { Client } from "pg";
const pgclient = new Client({
  user: "neondb_owner",
  password: "npg_Q6wqrAoWLk7h",
  host: "ep-sparkling-king-a1oct7a9-pooler.ap-southeast-1.aws.neon.tech",
  port: 5432,
  database: "neondb",
  ssl: true,
});

const main = async () => {
  await pgclient.connect();
  console.log("Connected");
  const response = await pgclient.query("UPDATE users set name='Manisha' WHERE name='Mannu';");
  console.log(response);
};

main();

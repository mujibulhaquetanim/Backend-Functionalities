import Database from 'better-sqlite3';

try {
    const db = new Database('app.db');

    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      username TEXT NOT NULL UNIQUE
    )
  `;

    db.exec(query);

    console.log('Table "users" created successfully (if it didn\'t exist already).');
} catch (error) {
    console.error('Error creating table:', error.message);
}

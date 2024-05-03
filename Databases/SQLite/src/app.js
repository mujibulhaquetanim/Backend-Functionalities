import Database from 'better-sqlite3';

const db = new Database('app.db');

const query = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username STRING NOT NULL UNIQUE`

db.exec(query);
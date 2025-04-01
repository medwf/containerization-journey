CREATE DATABASE IF NOT EXISTS crud_db;

USE crud_db;

CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT
);

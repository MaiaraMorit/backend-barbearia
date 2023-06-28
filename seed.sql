CREATE DATABASE IF NOT EXISTS barbearia;
USE barbearia;

CREATE TABLE IF NOT EXISTS usuario (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

INSERT IGNORE INTO usuario (nome, email, senha, telefone) VALUES 
('admin', 'maiara@email.com', 'maria', '88888888'), 
('alice', 'licinha@meuemail.com', 'senha', '412342'),
('joao', 'joao@email.com', 'joao', '88888888');
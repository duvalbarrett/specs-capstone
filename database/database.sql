CREATE TABLE users(
    user_id serial PRIMARY KEY,
    first_name varchar(50),
    last_name varchar(50),
    address varchar(255),
    phone_number varchar(50),
    user_email varchar(255),
    user_password varchar(255)
)

CREATE TABLE phones (
    phone_id SERIAL PRIMARY KEY AUTOINCREMENT,
    name varchar(255) NOT NULL,
    photo varchar(255),
    price INT,
)

CREATE TABLE games(
    games_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    photo varchar(255),
    price INT,
)

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer varchar(1000),
    items varchar(1000),
    name varchar(255),
    photo varchar(255),
    price INT,

)
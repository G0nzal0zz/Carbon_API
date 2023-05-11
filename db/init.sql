CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
);

CREATE TABLE Activity (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type_id INTEGER REFERENCES Activity_Type(id),
  description TEXT NOT NULL,
  emission FLOAT NOT NULL,
  user_id INTEGER REFERENCES Users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE Activity_Type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  min_emission INTEGER NOT NULL,
  max_emission INTEGER NOT NULL
);

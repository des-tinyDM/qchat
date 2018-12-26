INSERT INTO users (user_id, first_name, last_name, email, hashed_password) VALUES ($1, $2, $3, $4, $5)
RETURNING *;
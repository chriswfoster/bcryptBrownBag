INSERT INTO password_test_users (username, password)
VALUES ($1, $2)
returning *
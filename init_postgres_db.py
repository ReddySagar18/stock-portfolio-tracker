from database import get_db_connection

conn = get_db_connection()
cursor = conn.cursor()

# USERS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password BYTEA NOT NULL
)
""")

# PORTFOLIO TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS portfolio (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    stock_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    buy_price DECIMAL(10,2) NOT NULL
)
""")

# TRANSACTIONS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    stock_name VARCHAR(255),
    action VARCHAR(50),
    quantity INTEGER,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

conn.commit()
conn.close()

print("PostgreSQL tables created successfully!")

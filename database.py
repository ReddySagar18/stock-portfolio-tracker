import os
import psycopg2
import psycopg2.extras
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("postgresql://neondb_owner:npg_EWZy4GKFO3NM@ep-delicate-fire-ap6fsw70-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

def get_db_connection():
    if not DATABASE_URL:
        raise RuntimeError("DATABASE_URL is not set. Check your Railway/Neon env vars.")
    conn = psycopg2.connect(DATABASE_URL)
    return conn

def get_dict_cursor(conn):
    return conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
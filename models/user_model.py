from database import get_db_connection, get_dict_cursor


def create_user(username, password):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    try:
        cursor.execute(
            """
            INSERT INTO users (username, password)
            VALUES (%s, %s)
            RETURNING id
            """,
            (username, password)
        )

        user_id = cursor.fetchone()["id"]

        conn.commit()

        return user_id

    except Exception as e:
        print("Create User Error:", e)
        conn.rollback()
        return None

    finally:
        conn.close()


def get_user_by_username(username):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    cursor.execute(
        """
        SELECT *
        FROM users
        WHERE username = %s
        """,
        (username,)
    )

    user = cursor.fetchone()

    conn.close()

    return user
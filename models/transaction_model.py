from database import get_db_connection, get_dict_cursor


def add_transaction(user_id, stock_name, action, quantity, price):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    try:
        cursor.execute(
            """
            INSERT INTO transactions
            (user_id, stock_name, action, quantity, price)
            VALUES (%s, %s, %s, %s, %s)
            """,
            (user_id, stock_name, action, quantity, price)
        )

        conn.commit()

        return True

    except Exception as e:
        print("Add Transaction Error:", e)
        conn.rollback()
        return False

    finally:
        conn.close()


def get_transactions_by_user(user_id):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    cursor.execute(
        """
        SELECT id,
               stock_name,
               action,
               quantity,
               price,
               created_at
        FROM transactions
        WHERE user_id = %s
        ORDER BY created_at DESC
        """,
        (user_id,)
    )

    rows = cursor.fetchall()

    conn.close()

    data = []

    for row in rows:
        data.append({
            "id": row["id"],
            "stock_name": row["stock_name"],
            "action": row["action"],
            "quantity": row["quantity"],
            "price": float(row["price"]) if row["price"] is not None else 0,
            "created_at": str(row["created_at"])
        })

    return data
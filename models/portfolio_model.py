from database import get_db_connection, get_dict_cursor


def get_portfolio_by_user(user_id):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    cursor.execute(
        """
        SELECT id, stock_name, quantity, buy_price
        FROM portfolio
        WHERE user_id = %s
        """,
        (user_id,)
    )

    rows = cursor.fetchall()
    conn.close()

    portfolio = []

    for row in rows:
        portfolio.append({
            "id": row["id"],
            "stock_name": row["stock_name"],
            "quantity": row["quantity"],
            "buy_price": float(row["buy_price"])
        })

    return portfolio


def add_stock(user_id, stock_name, quantity, buy_price):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    try:
        cursor.execute(
            """
            INSERT INTO portfolio
            (user_id, stock_name, quantity, buy_price)
            VALUES (%s, %s, %s, %s)
            """,
            (user_id, stock_name, quantity, buy_price)
        )

        conn.commit()

        return True

    except Exception as e:
        print("Add Stock Error:", e)
        conn.rollback()
        return False

    finally:
        conn.close()


def update_stock(user_id, stock_id, quantity, buy_price):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    try:
        cursor.execute(
            """
            UPDATE portfolio
            SET quantity = %s,
                buy_price = %s
            WHERE id = %s
            AND user_id = %s
            """,
            (quantity, buy_price, stock_id, user_id)
        )

        rows = cursor.rowcount

        conn.commit()

        return rows

    except Exception as e:
        print("Update Stock Error:", e)
        conn.rollback()
        return 0

    finally:
        conn.close()


def delete_stock(user_id, stock_id):
    conn = get_db_connection()
    cursor = get_dict_cursor(conn)

    try:
        cursor.execute(
            """
            DELETE FROM portfolio
            WHERE id = %s
            AND user_id = %s
            """,
            (stock_id, user_id)
        )

        rows = cursor.rowcount

        conn.commit()

        return rows

    except Exception as e:
        print("Delete Stock Error:", e)
        conn.rollback()
        return 0

    finally:
        conn.close()
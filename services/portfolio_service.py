from models.portfolio_model import (
    get_portfolio_by_user,
    get_stock_by_name,
    get_stock_by_id,
    add_stock,
    update_stock,
    delete_stock
)

from models.transaction_model import add_transaction


def fetch_portfolio(user_id):
    data = get_portfolio_by_user(user_id)

    return {
        "message": "Portfolio fetched successfully",
        "data": data
    }, 200


def create_stock(user_id, data):
    stock_name = data.get("stock_name")
    quantity = data.get("quantity")
    buy_price = data.get("buy_price")

    if not stock_name or not quantity or not buy_price:
        return {
            "message": "All fields are required"
        }, 400

    stock_name = stock_name.upper()

    existing_stock = get_stock_by_name(
        user_id,
        stock_name
    )

    if existing_stock:

        new_quantity = (
            existing_stock["quantity"] + quantity
        )

        update_stock(
            user_id,
            existing_stock["id"],
            new_quantity,
            buy_price
        )

    else:

        add_stock(
            user_id,
            stock_name,
            quantity,
            buy_price
        )

    add_transaction(
        user_id,
        stock_name,
        "BUY",
        quantity,
        buy_price
    )

    return {
        "message": "Stock added successfully"
    }, 201


def modify_stock(user_id, stock_id, quantity, buy_price):

    rows = update_stock(
        user_id,
        stock_id,
        quantity,
        buy_price
    )

    if rows == 0:
        return {
            "message": "Stock not found"
        }, 404

    return {
        "message": "Stock updated successfully"
    }, 200

def remove_stock(user_id, stock_id, sell_quantity, sell_price):

    stock = get_stock_by_id(
        user_id,
        stock_id
    )

    if not stock:
        return {
            "message": "Stock not found"
        }, 404

    current_quantity = stock["quantity"]

    if sell_quantity > current_quantity:
        return {
            "message": "Not enough quantity available"
        }, 400

    remaining_quantity = (
        current_quantity - sell_quantity
    )

    if remaining_quantity == 0:

        delete_stock(
            user_id,
            stock_id
        )

    else:

        update_stock(
            user_id,
            stock_id,
            remaining_quantity,
            stock["buy_price"]
        )

    add_transaction(
        user_id,
        stock["stock_name"],
        "SELL",
        sell_quantity,
        sell_price
    )

    return {
        "message": "Stock sold successfully"
    }, 200
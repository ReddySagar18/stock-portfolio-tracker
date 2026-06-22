from functools import wraps
from flask import request, jsonify
import jwt

SECRET_KEY = "your_secret_key"


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        auth_header = request.headers.get("Authorization")

        if auth_header:
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({
                    "message": "Invalid token format"
                }), 401

        if not token:
            return jsonify({
                "message": "Token is missing"
            }), 401

        try:
            data = jwt.decode(
                token,
                SECRET_KEY,
                algorithms=["HS256"]
            )

            current_user_id = data["user_id"]

        except jwt.ExpiredSignatureError:
            return jsonify({
                "message": "Token has expired"
            }), 401

        except jwt.InvalidTokenError:
            return jsonify({
                "message": "Token is invalid"
            }), 401

        return f(current_user_id, *args, **kwargs)

    return decorated
from flask import Flask
from flask_cors import CORS
import os

from routes.user_routes import user_bp
from routes.portfolio_routes import portfolio_bp
from routes.transaction_routes import transaction_bp

app = Flask(__name__)

CORS(app)

app.register_blueprint(user_bp)
app.register_blueprint(portfolio_bp)
app.register_blueprint(transaction_bp)
@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

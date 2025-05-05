from flask import Flask
from app.extensions import db
from app.routes.crud import crud_bp


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:12345678@localhost/sushi_store'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(crud_bp)

    return app

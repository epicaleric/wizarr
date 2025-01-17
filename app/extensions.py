from flask_session import Session
from flask_htmx import HTMX
from flask_babel import Babel
from flask_jwt_extended import JWTManager
from flask_caching import Cache
from flask_restx import Api
from flask_apscheduler import APScheduler
from flask_socketio import SocketIO
from flask_oauthlib.client import OAuth

sess = Session()
htmx = HTMX()
jwt = JWTManager()
cache = Cache()
api = Api()
schedule = APScheduler()
socketio = SocketIO(log_output=False)
babel = Babel()
oauth = OAuth()

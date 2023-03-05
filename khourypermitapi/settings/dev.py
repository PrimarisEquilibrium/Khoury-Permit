from .common import *

# Override common.py here for development

DEBUG = True

INTERNAL_IPS = [
    "127.0.0.1",
]

# Development Apps
DEV_APPS = [
    "debug_toolbar",
]

INSTALLED_APPS = [*INSTALLED_APPS, *DEV_APPS]


# Development Middleware
DEV_MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

MIDDLEWARE = [*MIDDLEWARE, *DEV_MIDDLEWARE]


# Dev Bucket
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = "dev-khourypermitwebsite"
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


# SMTP4DEV Configuration
EMAIL_HOST = "localhost"
EMAIL_HOST_USER = ""
EMAIL_HOST_PASSWORD = ""
EMAIL_PORT = 2525


# Outside Configuration
ALLOWED_HOSTS = ["*"]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = ['*']

CORS_ALLOW_ALL_ORIGINS = True


# Dev Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
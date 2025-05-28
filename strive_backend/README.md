# Strive Backend

This is the backend API for the Strive Academics tutoring platform.

## Setup

1. Make sure you have Python 3.10+ and pipenv installed
2. Install dependencies:
   ```
   pipenv install
   ```
3. Run migrations:
   ```
   pipenv run python manage.py migrate
   ```
4. Start the development server:
   ```
   pipenv run python manage.py runserver
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register/` - Register a new student account
- `POST /api/auth/token/` - Get access token with username and password
- `POST /api/auth/token/refresh/` - Refresh access token
- `GET /api/auth/profile/` - Get user profile
- `POST /api/auth/logout/` - Logout (blacklist token)

## Request/Response Examples

### Register a new student

**Request:**
```json
POST /api/auth/register/
{
  "username": "student1",
  "email": "student1@example.com",
  "password": "securepassword123",
  "password_confirm": "securepassword123",
  "full_name": "John Doe",
  "phone_number": "+1234567890"
}
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "username": "student1",
    "email": "student1@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "student_profile": {
      "phone_number": "+1234567890"
    }
  },
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "message": "User account created successfully"
}
```

### Login

**Request:**
```json
POST /api/auth/token/
{
  "username": "student1",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
``` 
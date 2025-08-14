# Timestamp Microservice

A simple API that converts dates between unix timestamps and UTC strings.

## API Usage

**GET** `/api/:date?`

### Examples:
- `/api/1451001600000` → Returns unix timestamp and UTC string for the given unix timestamp
- `/api/2015-12-25` → Returns unix timestamp and UTC string for the given date string  
- `/api/` → Returns current time in both formats

### Response Format:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### Error Response:
```json
{
  "error": "Invalid Date"
}
```

## Features
- Accepts unix timestamps (numbers)
- Accepts date strings parseable by JavaScript Date constructor
- Returns current time when no date parameter provided
- Handles invalid dates gracefully

## Tech Stack
- Node.js
- Express.js

Part of freeCodeCamp Backend Development and APIs certification.
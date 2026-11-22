# Classic Tours & Travels — Deployment Fix

## Frontend Render environment variable
Set this in the frontend Static Site service (Environment):

- Key: `VITE_API_URL`
- Value: `https://classictoursandtravels.onrender.com` (use the exact live backend service URL)

Then click **Save and deploy**. The frontend now uses this same variable for customer bookings, admin login, and admin booking management.

## Backend CORS
The backend controllers allow these origins:
- `http://localhost:5173`
- `http://localhost:5176`
- `https://classic-tours-frontend.onrender.com`

If your frontend Render URL changes, update the allowed origin in both `BookingController.java` and `AdminController.java`, then redeploy the backend.

## Backend environment variables
Set these on the backend Render service (do not put database credentials in source code):
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `PORT` (Render supplies this; Spring already reads `${PORT:8081}`)

## Local development
The shared API config defaults to `http://localhost:8081` only while running Vite in development mode, so local work continues to function without setting `VITE_API_URL`.

## Verify
1. Deploy frontend and backend.
2. Open the frontend, DevTools → Network.
3. Submit a booking. Confirm the request URL starts with `https://classictoursandtravels.onrender.com/api/bookings`.
4. Open admin login and bookings; requests should use the same backend base URL.
5. If CORS appears, verify the exact frontend domain is listed in both backend controllers and redeploy backend.

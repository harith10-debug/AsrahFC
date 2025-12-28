# Asrah FC Website (IMS566 Individual Project)

A mini web application for my batch football team which named **Asrah FC**.  
The site includes a **authentication system**,**Team Hub dashboard** with meaningful analytics (Chart.js), a **Match History** data view that shows **results + scorers**, and a **Book Friendly** page for our opponent who want to set game or friendly with us.

> **Note:** This project uses **front-end only** (HTML/CSS/JS). Data is simulated (no database).

## Features Included

### ✅ 3.1 Authentication Page (Login/Register)
- Login + Sign Up UI (Bootstrap + custom styling)
- **Hardcoded credentials** (no database)
- Error feedback for invalid login
- Show/Hide password toggle
- Redirect to requested page after login using `?next=...`

### ✅ 3.2 Navigation Menu
- Consistent navigation bar across all pages
- Responsive (mobile-friendly hamburger menu)
- Logout button on protected pages

### ✅ 3.3 Dashboard Page (Team Hub)
- Protected page (requires login)
- Team profile + Season Card ID
- Analytics summary
- **Chart.js visualisation**: win/draw/loss breakdown

### ✅ 3.4 Data View Page (Match History)
- Protected page (requires login)
- Dataset table shows:
  - Date, competition, opponent, venue, score, result
  - **Asrah scorers & opponent scorers**
- Search + filter function for quick lookup

### ✅ Book Friendly (Protected)
- Friendly match request form (simulated)
- Opens **Admin WhatsApp** with full form details pre-filled
- Instagram DM helper:
  - auto-copies request message to clipboard
  - opens Asrah FC Instagram profile so user can paste & send

## Instructions to Test Login

### Demo Login Credentials
Use this account to access protected pages:
- **Username:** `admin`
- **Password:** `password123`

### How to Test
1. Open `index.html`
2. Click **Login / Sign Up**
3. Login using the demo credentials above
4. After login, you can access:
   - **Team Hub (dashboard.html)**
   - **Match History (dataview1.html)**
   - **Book Friendly (booking.html)**

### Invalid Login Test (Error Feedback)
- Try entering any other username/password
- You will see: **“Invalid username or password…”**

### Sign Up (Simulated)
- The Sign Up form is for UI simulation only (no database)
- After sign up, login using the demo account

---

## Frameworks / Libraries Used
- **Bootstrap 5** — responsive layout & UI components  
- **Google Fonts (Poppins)** — typography  
- **Chart.js** — meaningful chart visualisation (wins/draws/losses)  
- **Vanilla JavaScript** — authentication simulation, routing protection, filtering, WhatsApp link generation, clipboard helper  

---

## Notes (Important)
- This is a **front-end simulation** (no backend, no database).
- Instagram does not allow websites to auto-send DMs; therefore the project uses a **clipboard + open profile** method for Instagram messaging.
- WhatsApp supports pre-filled messages via URL, so the user can tap **Send**.

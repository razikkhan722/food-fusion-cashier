   < =================================  🍽️ Restaurant Management Software ================================== >


📖 Introduction : -----

=> This project is a Restaurant Management System built with React (Vite) + TailwindCSS + Node.js + MongoDB/MySQL (backend).
It is designed to help restaurants streamline their operations by managing orders, tables, and customers efficiently.

=> Unlike traditional systems where the admin role represents the owner, here the admin role is assigned to a staff member called a Shop Assistant. This makes it easier for restaurant staff to directly manage daily operations without requiring the owner's constant involvement.


👤 Roles in the System : -----

🔹 Shop Assistant (Admin Role)

=> Acts as the primary system operator.

=> Can manage tables, customers, and orders.

=> Responsible for updating menu items, assigning tables, and monitoring dine-in/delivery orders.

🔹 Customer

=> Places orders for dine-in, takeaway, or delivery.

=> Can view the menu and add items to their order.


⚙️ Features : -----

✅ Customer Management

=> Add, edit, and manage customer details.

=> Track dine-in, takeaway, and delivery customers.

✅ Order Management

=> Place and manage customer orders.

=> Link orders to tables (for dine-in).

=> Generate unique order IDs (ORD-001, ORD-002, etc.).

✅ Menu Management

=> Add categories, subcategories, and extra add-ons.

=> Update item availability in real-time.

✅ Table & Floor Management

=> Assign customers to available tables.

=> Track reservations and occupancy status.

✅ Staff Role: Shop Assistant

=> Manages all daily operations.

=> Reduces dependency on the restaurant owner.

✅ Reports & Insights (Planned)

=> Daily sales summary.

=> Customer trends & order statistics.


🏗️ Tech Stack

Frontend : -----

React + (Vite) ⚡

Tailwind CSS 🎨


Backend : -----

Node.js + Python


Database : -----

MongoDB 


📂 Project Structure (Frontend) : -----


cashier/
│── public/                
│── src/
│   ├── assets/             # Static resources
│   │   ├── images/         # PNG/JPG files
│   │   └── icons/          # SVG/PNG icons
│   │
│   ├── components/         # Reusable components
│   │   ├── ui/             # Small, reusable UI elements
│   │   │   └── Button.jsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── common/         # Generic/common widgets
│   │
│   ├── context/            # React Context providers
│   │   └── CashierContext.jsx
│   │
│   ├── features/           # Business logic modules
│   │   ├── auth/           
│   │   │   ├── AuthService.js
│   │   │   ├── AuthContext.jsx
│   │   │   └── useAuth.js
│   │   └── user/
│   │       ├── UserService.js
│   │       └── useUser.js
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useFetch.js
│   │   └── useLocalStorage.js
│   │
│   ├── pages/              # Page-level views
│   │   ├── Home.jsx
│   │   └── About.jsx
│   │
│   ├── router/             # Routing configuration
│   │   └── index.jsx
│   │
│   ├── services/           # API layer
│   │   └── api.js
│   │
│   ├── utils/              # Helper functions, constants
│   │   ├── constants.js
│   │   ├── formatDate.js
│   │   └── logger.js
│   │
│   ├── styles/             # Global styles, Tailwind overrides
│   │   └── global.css
│   │
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind imports
│
├── .env                    # Environment variables
├── package.json
├── tailwind.config.js
└── vite.config.js


🚀 Getting Started : -----

1. Clone Repo 

=> git clone https://github.com/your-repo/restaurant-management.git
=> cd restaurant-management

2. Install Dependencies

=> npm install

3. Run Frontend (Vite)

=> npm run dev
"# food-fusion-cashier" 

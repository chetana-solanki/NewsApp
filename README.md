# 📢 News App (React)

A modern **news web app** built with React that fetches latest news using **NewsData API** 📰.  
Users can select their country and browse news by category — such as Top, Sports, Politics, Business, Health, Technology, etc.

Live demo / preview (if deployed): `https://<your-live-url>`

---

## ⚙️ Features

✔ Fetches real news articles from NewsData API  
✔ Category-based filtering  
✔ Country selection  
✔ Loading indicator while fetching data  
✔ Truncated titles & descriptions for clean UI  
✔ Opens articles in new tab  

---

## 🧩 Tech Stack

- React  
- Tailwind CSS  
- React Router  
- NewsData API  
- JavaScript  

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/chetana-solanki/new-app.git
cd new-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

📁 Project Structure

new-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── News.jsx
│   │   ├── NewsCard.jsx
│   │   ├── Loading.jsx
│   ├── utils/
│   │   └── countries.js
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
├── tailwind.config.js
└── README.md

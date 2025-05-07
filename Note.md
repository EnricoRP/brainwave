📘 Developer Journey: -
📝 Deskripsi Umum

🧰 Teknologi Digunakan

🎯 Tujuan Fitur

✅ Milestone
#
## 🔹Instalasi Vite
- Create Project
    `npm create vite@latest ./ -- --template react`
    `npm i`
- Install Tailwind
    `npm install -D tailwindcss@3 postcss autoprefixer`
    `npx tailwindcss init -p` : membuat file config (tailwind.config.js & postcss.config.js)
- Configure template paths
    ```typescript
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ]
    ```
##

## 🔹Custom konfigurasi 
Menambahkan file settings.json pada folder .vscode
##

## 🔹Update Tailwind konfigurasi 
Mendefinisikan warna atau konfigurasi general untuk beberapa komponen
##

🔹Settings index.css
🔹Pembuatan komponen Button.jsx

# 

📅 Catatan Harian
#
## 📅 7 April 2025 2:38 PM
    Ternyata komponen bisa sangat flesibel dengan cara mendefinisikan komponen dengan sub function yang nanti ketika di render bisa memanfaatkan ternary operator. Contoh ada di Button.jsx
##
## 📅 7 April 2025 3:44 PM
    Pembuatan komponen Header.jsx yang dinamis yang memanfaatkan brainwave asset sebagai icon yang juga berfungsi sebagai link ke pusat, serta iteration dari constans file index.js untuk render navigation dan penggunakan useLocation dari react-router-dom untuk mengetahui link mana yang sedang aktif.
##
# 


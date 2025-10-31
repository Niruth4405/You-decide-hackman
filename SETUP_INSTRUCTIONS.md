# IT System Log Analyzer - Complete Setup Instructions

This document provides all the commands and setup instructions needed to run the IT System Log Analyzer application.

## 📋 Prerequisites

Before starting, ensure you have the following installed on your system:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **npm** or **pnpm** (comes with Node.js)
3. **Python 3.7+** - [Download](https://www.python.org/)
4. **Git** - [Download](https://git-scm.com/)
5. **Ganache** (GUI) - [Download](https://trufflesuite.com/ganache/)
6. **Truffle** - We'll install this globally
7. **Code Editor** (VS Code recommended)

---

## 🚀 Installation & Setup Steps

### Step 1: Clone or Navigate to the Project

```bash
cd sih-2023-it-log-master
```

### Step 2: Install Truffle Globally

```bash
npm install -g truffle
```

### Step 3: Setup Backend

#### 3.1 Navigate to Backend Directory

```bash
cd backend
```

#### 3.2 Install Backend Dependencies

```bash
npm install
```

The backend uses the following packages:
- express
- web3
- moralis
- cors
- dotenv
- csv-parser
- luxon
- @emailjs/nodejs

#### 3.3 Create Environment Variables File

Create a `.env` file in the `backend` directory with the following content:

```env
MORALIS_KEY=your_moralis_api_key_here
SECRET_KEY=your_secret_key_here
LOCAL_LOG_FOLDER=./logs
```

**Important Notes:**
- Get your Moralis API key from [Moralis.io](https://moralis.io/)
- SECRET_KEY can be any random string for encryption
- LOCAL_LOG_FOLDER is the directory where log files will be stored

Example `.env` file:
```env
MORALIS_KEY=sk_test_xxxxxxxxxxxx
SECRET_KEY=mysupersecretkey123456789
LOCAL_LOG_FOLDER=./logs
```

#### 3.4 Create Log Directory

```bash
mkdir logs
```

#### 3.5 Start Ganache

1. Open Ganache GUI application
2. Create a new workspace or use the default
3. Make sure it's running on port **7545**
4. Note the RPC server address: `http://127.0.0.1:7545`

#### 3.6 Compile and Deploy Smart Contracts

```bash
# Compile the contracts
truffle compile

# Deploy the contracts to Ganache
truffle migrate
```

#### 3.7 Start the Backend Server

```bash
node index.js
```

The backend server will run on **http://localhost:5001**

---

### Step 4: Setup Admin Panel

#### 4.1 Navigate to Admin Directory

Open a **new terminal** and navigate to:

```bash
cd sih-2023-it-log-master/admin
```

#### 4.2 Install Admin Dependencies

```bash
npm install
# OR if using pnpm
pnpm install
```

The admin panel uses:
- Next.js
- React
- Tailwind CSS
- NextUI
- Recharts
- Framer Motion
- SWR
- Other UI libraries

#### 4.3 Start the Admin Panel

```bash
npm run dev
# OR
pnpm dev
```

The admin panel will run on **http://localhost:3000**

---

### Step 5: Setup Demo App (Optional)

#### 5.1 Navigate to Demo App Directory

Open a **new terminal** and navigate to:

```bash
cd sih-2023-it-log-master/demoapp
```

#### 5.2 Install Demo App Dependencies

```bash
npm install
# OR if using pnpm
pnpm install
```

#### 5.3 Start the Demo App

```bash
npm run dev
# OR
pnpm dev
```

The demo app will run on **http://localhost:5173** (default Vite port)

---

## 🐍 Machine Learning Setup

### Setup Python Environment (Optional)

The ML threat detection model is located in the `ml` folder:

```bash
cd sih-2023-it-log-master/ml
```

#### Install Python Dependencies

```bash
pip install pandas numpy scikit-learn jupyter
```

#### Run the Jupyter Notebook

```bash
jupyter notebook threat-detection.ipynb
```

**Note:** The ML model is already integrated into the backend and doesn't need to be run separately.

---

## 📁 Project Structure

```
sih-2023-it-log-master/
├── backend/          # Node.js/Express backend with blockchain
│   ├── contracts/    # Solidity smart contracts
│   ├── routes/       # API routes
│   ├── build/        # Compiled contracts
│   └── logs/         # Log files storage
├── admin/            # Next.js admin panel
├── demoapp/          # React demo app for generating logs
└── ml/               # Python ML threat detection
```

---

## 🎯 Quick Start Commands Summary

### Terminal 1 - Ganache
```bash
# Open Ganache GUI and start the blockchain
```

### Terminal 2 - Backend
```bash
cd sih-2023-it-log-master/backend
npm install
# Create .env file (see Step 3.3)
mkdir logs
truffle compile
truffle migrate
node index.js
```

### Terminal 3 - Admin Panel
```bash
cd sih-2023-it-log-master/admin
npm install
npm run dev
```

### Terminal 4 - Demo App (Optional)
```bash
cd sih-2023-it-log-master/demoapp
npm install
npm run dev
```

---

## 🌐 Access the Application

- **Admin Panel**: http://localhost:3000
- **Demo App**: http://localhost:5173
- **Backend API**: http://localhost:5001
- **Ganache**: http://127.0.0.1:7545

---

## 🔧 Troubleshooting

### Common Issues:

1. **Port Already in Use**
   ```bash
   # Find process using the port (Windows)
   netstat -ano | findstr :5001
   # Kill the process or change the port
   ```

2. **Ganache Not Running**
   - Ensure Ganache is running before starting the backend
   - Check that it's running on port 7545

3. **Module Not Found Errors**
   ```bash
   # Delete node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

4. **Truffle Command Not Found**
   ```bash
   npm install -g truffle
   ```

5. **Environment Variables Not Loading**
   - Ensure the `.env` file is in the `backend` directory
   - Check that the file has no syntax errors

6. **Smart Contract Migration Fails**
   ```bash
   # Reset and recompile
   truffle migrate --reset
   ```

---

## 📝 Environment Variables Checklist

Create `.env` file in `backend/` directory with:

- [ ] `MORALIS_KEY` - Your Moralis API key
- [ ] `SECRET_KEY` - Any random string for encryption
- [ ] `LOCAL_LOG_FOLDER` - Path to log files (default: ./logs)

---

## 🔐 Getting Moralis API Key

1. Visit [Moralis.io](https://moralis.io/)
2. Sign up for a free account
3. Navigate to your dashboard
4. Copy your API key from the settings
5. Paste it in the `.env` file as `MORALIS_KEY`

---

## 📦 Dependencies Installed

### Backend
- express
- web3
- moralis
- cors
- dotenv
- csv-parser
- luxon
- @emailjs/nodejs

### Admin Panel
- next
- react
- react-dom
- tailwindcss
- @nextui-org/react
- recharts
- swr
- framer-motion
- lucide-react

### Demo App
- react
- react-dom
- vite
- @nextui-org/react
- tailwindcss

---

## 🎓 Usage

1. **Start Ganache** to run the local blockchain
2. **Start Backend** to run the API server and blockchain integration
3. **Start Admin Panel** to access the analytics dashboard
4. **Start Demo App** (optional) to generate sample log data
5. View logs and analysis in the Admin Panel

---

## 📞 Support

For issues or questions, refer to:
- Backend README: `backend/Readme.md`
- Admin README: `admin/README.md`
- Demo App README: `demoapp/README.md`
- ML README: `ml/Readme.md`

---

## ✅ Verification Checklist

Before considering the setup complete, verify:

- [ ] Ganache is running on port 7545
- [ ] Backend is running on port 5001
- [ ] Admin panel is running on port 3000
- [ ] Smart contracts are compiled and deployed
- [ ] `.env` file is configured with all necessary keys
- [ ] Logs directory exists in backend folder
- [ ] All dependencies are installed
- [ ] No errors in any of the terminal windows

---

**Happy Coding! 🚀**


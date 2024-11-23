# API Details

This project provides a RESTful API to manage `Bots`, `Workers`, and their associated `Logs` using Sequelize and Node.js.


---

## **Features**

- Manage Bots, Workers, and Logs.
- Fetch logs for a specific worker associated with a bot.
- Sequelize models for relational data:
  - A bot has many workers.
  - A worker has many logs.
  - A bot has many logs.

---

## **Endpoints**

### **1. Get All Bots**
- **URL**: `/api/v1/bot/list`
- **Method**: `GET`
- **Description**: Fetches all bots

### **2. Get specific Bot By Id**
- **URL**: `api/v1/bot/list/:id`
- **Method**: `GET`
- **Description**: Fetches a bot by id.

### **3. Get all workers of a Bot**
- **URL**: `api/v1/bot/list/:id/workers`
- **Method**: `GET`
- **Description**: Fetches all workers of a bot.

### **4. Get all logs of a Bot**
- **URL**: `api/v1/bot/list/:id/logs`
- **Method**: `GET`
- **Description**: Fetches all logs of a bot.

### **5. Get Logs for a Worker associated the Bot**
- **URL**: `api/v1/worker/:id/logs`
- **Method**: `GET`
- **Description**: Fetches all logs for a worker and its associated bot with the bot.

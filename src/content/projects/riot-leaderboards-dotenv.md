---
title: "Riot Leaderboards — Self-Hosted"
category: "Personal"
type: "Web App"
dates: "December 2022"
status: "Completed; runs locally or privately"
tech: [Python, Flask, Riot Games API, python-dotenv, Pytest, Gunicorn]
github: "https://github.com/daniel1wnl/riotLeaderboards-dotenv"
featured: true
description: "A local-first adaptation of my cloud leaderboard application, configured through environment variables for simple, secure self-hosting while retaining live Valorant and League of Legends rankings."
---

# Riot Games Leaderboard App (Self-Hosted)

A lightweight, self-hostable version of the **Riot Games Leaderboard** application. This project was inspired by a previous cloud-native version (deployed on Google Cloud Run) but was refactored to prioritize ease of deployment on local machines or private servers using simple environment variable management.

## 🚀 Key Features

- **Local-First Design**: Optimized for self-hosting without the need for complex cloud infrastructure or hosting costs.
- **Live Leaderboard Data**: Real-time competitive data fetched directly from the Riot Games API.
- **Multi-Game Support**:
  - **Valorant**: Top 100 players with rank, gamertag, rank rating (RR), and total wins.
  - **League of Legends**: Top Challenger players with rank, summoner name, league points (LP), and wins.
- **Simple Configuration**: Secure API key management using `.env` files via `python-dotenv`.

## 🛠️ Tech Stack

- **Backend**: Python, Flask
- **API Integration**: Riot Games API (Requests)
- **Environment Management**: python-dotenv
- **Testing**: Pytest

## 📋 Prerequisites

- Python 3.8+
- A [Riot Games Developer Account](https://developer.riotgames.com/) and API Key.

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daniel1wnl/riotLeaderboards-dotenv.git
   cd riotLeaderboards-dotenv
   ```

2. **Create and activate a virtual environment:**
   - **Unix/macOS:**
     ```bash
     python3 -m venv env
     source env/bin/activate
     ```
   - **Windows:**
     ```bash
     py -m venv env
     .\env\Scripts\activate
     ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configuration:**
   Create a `.env` file in the project root:
   ```text
   ACT_ID="YOUR_VALORANT_ACT_ID"
   API_KEY="YOUR_RIOT_API_KEY"
   ```
   *Note: You can find the current Act ID via the [Riot API status endpoint](https://na.api.riotgames.com/val/status/v1/platform-data).*

5. **Run the application:**
   ```bash
   python3 app.py
   ```

## 🧪 Testing

To run the unit tests, execute:
```bash
pytest
```

## 📸 Previews

### Valorant Leaderboard
![Valorant App Preview](https://raw.githubusercontent.com/daniel1wnl/riotLeaderboards-dotenv/main/imgs/appVal.png)

### League of Legends Leaderboard
![League App Preview](https://raw.githubusercontent.com/daniel1wnl/riotLeaderboards-dotenv/main/imgs/appLoL.png)

## 👤 Author

**Daniel Gregorio-Torres**
- [GitHub](https://github.com/daniel1wnl)
- [LinkedIn](https://www.linkedin.com/in/danielgregoriotorres/)

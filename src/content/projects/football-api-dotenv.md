---
title: "Football Data Dashboard"
category: "Personal"
type: "Web App"
dates: "October–December 2022"
status: "Completed; runs locally"
tech: [Python, Flask, Football-Data.org API, Jinja, Pytest, Gunicorn]
github: "https://github.com/daniel1wnl/footballAPI-dotenv"
featured: true
description: "A Flask dashboard that transforms nested football API data into league tables, tournament groups, and knockout-stage views for major domestic and international competitions."
---

# Football Data Dashboard

A passion project driven by a love for the "beautiful game" and a desire to master REST API integrations. This web application provides a comprehensive dashboard for football enthusiasts, fetching live data for global leagues and major international tournaments.

Built to explore the complexities of handling nested data structures and real-time API orchestration.

## 🚀 Key Features

- **Global League Standings**: Real-time table data for over 9 major leagues including the Premier League, La Liga, and the Bundesliga.
- **Tournament Coverage**: Specialized views for elite competitions like the **UEFA Champions League**, **Copa Libertadores**, and the **2022 FIFA World Cup**.
- **Playoff Visualization**: Dynamic rendering of group stages and knockout rounds.
- **Secure Integration**: Utilizes the **Football-Data.org** API with environment variable security.

## 🛠️ Tech Stack

- **Backend**: Python, Flask
- **API Integration**: [Football-Data.org](https://www.football-data.org/) (Requests)
- **Environment Management**: python-dotenv
- **Testing**: Pytest

## 📋 Prerequisites

- Python 3.8+
- A [Football-Data.org API Key](https://www.football-data.org/client/register) (Free tier supported).

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daniel1wnl/footballAPI-dotenv.git
   cd footballAPI-dotenv
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
   API_KEY="YOUR_FOOTBALL_DATA_API_KEY"
   ```

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

### Dashboard Home
![Home Page](https://raw.githubusercontent.com/daniel1wnl/footballAPI-dotenv/main/pagePreviews/index.png)

### League Standings
![League Standings](https://raw.githubusercontent.com/daniel1wnl/footballAPI-dotenv/main/pagePreviews/league_standings.png)

### World Cup 2022
![World Cup](https://raw.githubusercontent.com/daniel1wnl/footballAPI-dotenv/main/pagePreviews/world_cup.png)

## 👤 Author

**Daniel Gregorio-Torres**
- [GitHub](https://github.com/daniel1wnl)
- [LinkedIn](https://www.linkedin.com/in/danielgregoriotorres/)

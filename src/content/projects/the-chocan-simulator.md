---
title: "The ChocAn Simulator"
category: "School / University"
type: "Team CLI Application"
dates: "September–December 2022"
status: "Completed"
tech: [Python, Pytest, CSV, Colorama, Git]
github: "https://github.com/daniel1wnl/The-ChocAn-Simulator"
featured: true
description: "A six-person healthcare-management simulation supporting member and provider records, service billing, validation, directories, and weekly reports. I led service-registration work, testing, and documentation."
---

# The ChocAn Simulator

A comprehensive Terminal-based management system designed for **Chocoholics Anonymous (ChocAn)**. This application simulates the data processing needs of a healthcare organization, managing members, providers, and service billing with automated reporting features.

Developed as the final group project for **CS 314: Elements of Software Engineering**.

## 🚀 Key Features

- **Multi-Role Interface**: Dedicated modes for Members, Providers, and ChocAn Operators.
- **Interactive Data Management**: Full CRUD (Create, Read, Update, Delete) operations for managing Member and Provider records.
- **Service Billing**: Streamlined workflow for providers to bill ChocAn after providing healthcare services.
- **Automated Reporting**:
  - **Member Reports**: Weekly summaries of services received.
  - **Provider Reports**: Details of services provided and associated fees.
  - **Manager Reports**: Consolidated overview for administrative oversight.
- **Provider Directory**: Integrated directory for quick lookup of service codes and fees.
- **Input Validation**: Robust validation for 9-digit identification numbers and data entry lengths.

## 🛠️ Tech Stack

- **Language**: Python 3
- **Testing**: Pytest (Comprehensive unit test suite)
- **CLI Enhancement**: Colorama (Stylized terminal output)
- **Data Format**: CSV (Service directory management)

## 📋 Prerequisites

- Python 3.8 or higher
- `pip` (Python package installer)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daniel1wnl/The-ChocAn-Simulator.git
   cd The-ChocAn-Simulator
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

## 🖥️ Running the Application

To start the simulator, run:
```bash
python3 main.py
```

### Navigating the Menus
- **Member Mode**: Simulate member login and status checks.
- **Provider Mode**: Bill for services and view the Provider Directory.
- **ChocAn Mode**: Administrative operations, including managing records and generating weekly reports.

## 🧪 Testing

The project includes a comprehensive suite of unit tests. To run the tests, execute:
```bash
pytest
```

## 👥 Contributors

- Alex Teav
- Andy Iliesi
- Daniel Gregorio-Torres
- Jordan Nguyen
- Joseph Wornath
- Liam McCracken

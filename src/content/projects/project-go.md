---
title: "ProjectGo"
category: "School / University"
type: "Desktop Game"
dates: "January–March 2023"
status: "Completed"
tech: [Haskell, Gloss, Stack, Hspec, Functional Programming]
github: "https://github.com/daniel1wnl/ProjectGo"
featured: true
description: "A graphical implementation of Go in Haskell with interactive two-player play, captures, illegal-move handling, the Ko rule, passing, territory calculation, and scoring. I built nearly all application functionality."
---

# ProjectGo: A Haskell Implementation of Go

A functional implementation of the ancient board game **Go**, featuring a graphical user interface and robust rule enforcement. This project was developed as the final project for **CS 457/557: Functional Programming**.

## 🚀 Key Features

- **Graphical User Interface**: Built using the `Gloss` library for real-time rendering and interaction.
- **Full Game Logic**: Implements standard Go rules including capturing, Ko rule enforcement, and territory calculation.
- **Interactive Gameplay**:
    - Left-click to place stones.
    - Press **'p'** to pass your turn.
    - Press **'e'** to finalize the game after passing.
- **Automated Scoring**: Tracks and displays scores for both Black and White players in real-time.

## 🛠️ Tech Stack

- **Language**: Haskell
- **Graphics Library**: [Gloss](https://hackage.haskell.org/package/gloss)
- **Build Tool**: [Stack](https://docs.haskellstack.org/en/stable/README/)

## 🧩 Functional Programming Techniques

This project serves as a showcase of core functional programming concepts:

- **Immutability**: The entire game state is handled immutably using `Data.Map`, with every move producing a fresh version of the board.
- **Recursion**: Complex board traversals (like identifying dead stones or territory) are implemented through elegant recursive functions.
- **Higher-Order Functions**: Extensive use of `foldl`, `filter`, `foldr`, and `find` for data manipulation.
- **Pattern Matching**: Utilized throughout the codebase to handle game moves and board states cleanly.
- **Custom Algebraic Data Types (ADTs)**: Defined custom types for `Game`, `Stone`, `Move`, and `Point` to represent the domain model accurately.
- **Partial Application & Currying**: Employed to create specialized functions and integrate with the Gloss event loop.

## 📋 Prerequisites

- [Haskell Stack](https://docs.haskellstack.org/en/stable/install_and_upgrade/) installed on your system.
- An X11 server (like XQuartz on macOS) if running in a environment without a native display.

## ⚙️ Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daniel1wnl/ProjectGo.git
   cd ProjectGo
   ```

2. **Build the project:**
   ```bash
   stack build
   ```

3. **Run the application:**
   ```bash
   stack exec ProjectGo-exe
   ```

## 🎮 How to Play

1. Upon launching, follow the terminal prompts to start the game.
2. The game window will open. Black moves first.
3. Click on the intersections to place your stone.
4. Use **'p'** to pass if you cannot make a move. If both players pass consecutively, the game enters the scoring phase.
5. In the scoring phase, you can remove dead stones by clicking them, then press **'e'** to end and see the final result.

## 👤 Author

**Daniel Gregorio-Torres**
- [GitHub](https://github.com/daniel1wnl)
- [LinkedIn](https://www.linkedin.com/in/danielgregoriotorres/)

## 👥 Contributors

- Daniel Gregorio
- Tim Pham

## 🔗 Resources

- [Project Presentation Slides](https://docs.google.com/presentation/d/1t7ZB_lahoDdKBXRHghmFNikSLZnUVxnCWBWW-863YRM/edit?usp=sharing)

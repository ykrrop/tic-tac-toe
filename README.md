# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Gameplay](#gameplay)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive Tic-Tac-Toe game with a responsive UI.
- Keeps track of player turns and displays the winner.
- Includes a "Play Again" button to restart the game after it ends.
- Clear indication of the game status (Next player, Winner, or Draw).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/tic-tac-toe.git
    ```
    
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```
3. Install the dependencies:
   ```bash 
    npm install 
   ``` 
## Usage
To start the game locally, run the following command: 
```bash 
npm start
```

This will start the development server and open the game in your default browser. You can now play Tic-Tac-Toe.

Gameplay
 • Click on any cell to place your mark (X or O).
 • The game automatically switches between players.
 • The game ends when one player wins or when there are no more available moves (draw).
 • Click "Play Again" to restart the game.
 
Technologies Used
 • React: A JavaScript library for building user interfaces.
 • TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
 • Tailwind CSS: A utility-first CSS framework for rapid UI development

Project Structure
```
tic-tac-toe/
├── public/               # Public assets
│   └── index.html        # Main HTML file
├── src/                  # Source files
│   ├── components/       # Reusable components
│   │   ├── Board.tsx     # Board component
│   │   └── Square.tsx    # Square component
│   ├── App.tsx           # Root component
│   ├── index.tsx         # Entry point for React
│   └── styles/           # Tailwind CSS styles
│       └── index.css     # Main stylesheet
├── package.json          # NPM scripts and dependencies
└── README.md             # Project documentation
```

Contributing
Contributions are welcome! If you have any ideas or suggestions for improvements, please open an issue or create a pull request.


License
This project is licensed under the MIT License. See the LICENSE file for more details.

import React, { useState } from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      className="w-16 h-16 border-2 border-gray-300 flex items-center justify-center text-2xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [isNext, setIsNext] = useState(true);
  function handleClick(index: number) {
    if (calculateWinner(squares) || squares[index]) return;
    const newSquares = squares.slice();
    newSquares[index] = isNext ? "X" : "O";
    setSquares(newSquares);
    setIsNext(!isNext);
  }

  const renderSquare = (index: number) => {
    return (
      <Square
        key={index}
        onClick={() => handleClick(index)}
        value={squares[index]}
      />
    );
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
      </div>
      {(winner || squares.every((square) => square !== null)) && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleReset}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Board />
      </div>
    </>
  );
}

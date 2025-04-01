import { useState, useEffect } from 'react';

function AlarmComponent() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }, 1000);
    } else if (isRunning && minutes === 0 && seconds === 0) {
      alert("⏰ Time's up!");
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold">React Timer Alarm</h1>

      {!isRunning && (
        <input
          type="number"
          placeholder="Enter minutes"
          onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
          className="p-2 border rounded mt-2"
        />
      )}

      <p className="text-lg mt-2">
        Time Left: {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>

      {!isRunning ? (
        <button
          onClick={startTimer}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Start Timer
        </button>
      ) : (
        <button
          onClick={resetTimer}
          className="mt-2 p-2 bg-red-500 text-white rounded"
        >
          Reset Timer
        </button>
      )}
    </div>
  );
}

export default AlarmComponent;

function GoalTracker({
  goalAmount,
  setGoalAmount,
  totalInvestment,
}) {
  const progress =
    goalAmount > 0
      ? ((totalInvestment / goalAmount) * 100).toFixed(1)
      : 0;

  return (
    <div className="card">
      <h2>Goal Tracker</h2>

      <input
        type="number"
        placeholder="Enter Wealth Goal"
        value={goalAmount}
        onChange={(e) =>
          setGoalAmount(Number(e.target.value))
        }
      />

      <p>
        Current Value: ₹{totalInvestment}
      </p>

      <p>
        Goal: ₹{goalAmount || 0}
      </p>

      <p>
        Progress: {progress}%
      </p>

      <progress
        value={progress}
        max="100"
        style={{
          width: "100%",
          height: "20px",
        }}
      />
    </div>
  );
}

export default GoalTracker;
function Progress({ index, numQeustions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQeustions} value={index} />
      <p>
        Question <strong>{index + Number(answer !== null)}</strong> /{" "}
        {numQeustions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

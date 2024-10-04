// eslint-disable-next-line react/prop-types
const MoodSelector = ({ setMood }) => {
  return (
    <div>
      <button onClick={() => setMood("Happy")}>Happy</button>
      <button onClick={() => setMood("Sad")}>Sad</button>
      <button onClick={() => setMood("Excited")}>Excited</button>
      <button onClick={() => setMood("Tired")}>Tired</button>
    </div>
  );
};
export default MoodSelector;
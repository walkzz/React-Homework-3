// eslint-disable-next-line react/prop-types
const MoodDisplay = ({ mood, emoji }) => {
  return (
    <div>
      <h2>Current Mood: {mood} {emoji}</h2>
    </div>
  );
};
export default MoodDisplay;
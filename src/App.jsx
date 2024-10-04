/* eslint-disable react/no-children-prop */
import './App.css'
import { useState } from 'react';
import MoodSelector from './components/MoodEmojiExercise/MoodSelector';
import MoodDisplay from './components/MoodEmojiExercise/MoodDisplay';
// import Parent from './components/Parent/Parent';
// const family = {
//   name: "John (Parent)",
//   children: [
//     {
//       name: "Alex (Child)",
//       age: 30,
//       grandchildren: [
//         { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
//         { name: "Sophia (Grandchild)", hobby: "Drawing" },
//       ],
//     },
//     {
//       name: "Emma (Child)",
//       age: 28,
//       grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
//     },
//   ],
// };

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

function App() {
  const [currentMood, setCurrentMood] = useState("Happy");
  return (
    // <div>
    //   <Parent name={family.name} children={family.children} />
    // </div>
    <div>
      <h1>Mood Tracker</h1>
      <MoodSelector setMood={setCurrentMood} />
      <MoodDisplay mood={currentMood} emoji={moodEmojiMap[currentMood]} />
    </div>
  );
}
export default App
/* eslint-disable react/no-children-prop */
import './App.css'
import Parent from './components/Parent/Parent';
const family = {
  name: "John (Parent)",
  children: [
    {
      name: "Alex (Child)",
      age: 30,
      grandchildren: [
        { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
        { name: "Sophia (Grandchild)", hobby: "Drawing" },
      ],
    },
    {
      name: "Emma (Child)",
      age: 28,
      grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
    },
  ],
};

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

function App() {
  return (
    <div>
      <Parent name={family.name} children={family.children} />
    </div>
  );
}
export default App
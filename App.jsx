
import { useState } from "react";
import Highlighter from "./Highlighter.jsx";
import Palette from "./Palette.jsx";


const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "white",
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  
  return (
    <main>
      <Highlighter color={selectedColor} />
      <Palette color={COLORS} setSelectedColor={setSelectedColor} />
    </main>);
}

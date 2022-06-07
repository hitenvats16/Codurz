import { useEffect } from "react";
import "./index.css";
import NewsLetter from "./pages/NewsLetter";

function App() {

  useEffect(()=>{
    document.title="Codurz"
  })

  return (
    <NewsLetter/>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState({
    fullName: "ahmed",
    Bio: "ahmed_mami95",
    imageSrc: "Fichier 1-8.png",
    profession: "Responsable de communication et marketing",
  });
  const [show, SetShow] = useState(false);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, !show);

  return (
    <div className="App">
      <button onClick={() => SetShow(!show)}>show profile</button>
      {show ? (
        <div className="card">
          <img src={person.imageSrc} width="300px" />
          <h1>{person.fullName}</h1>
          <h1>{person.Bio}</h1>
          <h1>{person.profession}</h1>
        </div>
      ) : null}
    
   <h1>{seconds}</h1>
 

    </div>
    
  );

}

export default App;

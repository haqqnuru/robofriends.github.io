
import { useState, useRef, useCallback, useEffect } from "react";

const colors = [
  "bg-light-red", "bg-light-blue", "bg-light-green", "bg-light-yellow",
  "bg-light-purple", "bg-light-pink", "bg-light-gray", "bg-dark-red",
  "bg-dark-blue", "bg-dark-green", "bg-dark-gray"
];

// Fisher-Yates Shuffle Function
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Card = ({name, id, username, email}) => {


    const [bgColor, setBgColor] = useState(""); // Stores the current background color
  const colorQueueRef = useRef(shuffleArray(colors)); // Holds the shuffled color queue

  // Function to get the next color from the queue
  const getNextColor = useCallback(() => {
    if (colorQueueRef.current.length === 0) {
      colorQueueRef.current = shuffleArray(colors); // Reshuffle when all colors are used
    }
    return colorQueueRef.current.shift(); // Remove the first color and return it
  }, []);

  useEffect(() => {
    setBgColor(getNextColor()); // Set the initial color
  }, [getNextColor]);

    return ( 
        <div className={`${bgColor} dib br3 pa3 ma2 grow bw2 shadow-5`}>
          
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2> {name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
     );
}
 
export default Card;
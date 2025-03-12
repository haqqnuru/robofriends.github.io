import { useEffect } from "react";

export  function RandomBackgroundOnLoad() {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, []); 
}

export function RandomGradientBackground() {
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function getRandomGradient() {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const angle = Math.floor(Math.random() * 360);
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }
  
    useEffect(() => {
      document.body.style.background = getRandomGradient();
    }, []); // Runs only once when the component mounts
  
    return (
      <div className="w-full h-screen flex justify-center items-center">
    
      </div>
    );
  }
import { useEffect } from "react";


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

export function RandomBackgroundOnLoad() {
  useEffect(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, []);
}

export function RandomGradientBackground() {
  useEffect(() => {
    document.body.style.background = getRandomGradient();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Content goes here */}
    </div>
  );
}

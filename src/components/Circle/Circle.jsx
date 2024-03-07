import { useRef, useEffect } from "react";
import "./Cursor.css";

const colors = [
  "#E1E3E4", // Light Gray
  "#C8CACC", // Gray
  "#AFAFB3", // Gray
  "#96969B", // Gray
  "#7D7D82", // Gray
  "#646468", // Gray
  "#4B4B50", // Gray
  "#323236", // Dark Gray
  "#19191D", // Dark Gray
  "#000000", // Black
];

const CirclesAnimation = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newCircles = colors.map((color, index) => ({
        id: index,
        left: e.clientX - 12,
        top: e.clientY - 12,
        scale: (colors.length - index) / colors.length,
      }));
      circlesRef.current.forEach((circle, index) => {
        circle.style.left = newCircles[index].left + "px";
        circle.style.top = newCircles[index].top + "px";
        circle.style.transform = `scale(${newCircles[index].scale})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="circles-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
          style={{
            backgroundColor: color,
            transitionDelay: `${index * 2}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default CirclesAnimation;

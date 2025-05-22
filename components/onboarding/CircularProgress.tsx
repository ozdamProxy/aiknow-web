"useClient"
import { useEffect, useState } from "react";

interface CircularProgressProps {
  onComplete: () => void;
}


export default function CircularProgress({onComplete}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);

  // Otomatik olarak 0'dan 100'e kadar arttır
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80); // 50ms'de bir artır
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      onComplete(); // tamamlandığında üst komponenti bilgilendir
    }
  }, [progress, onComplete]);

  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="transparent"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
       
        <circle
          stroke="#F7C663"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
          <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="40"
          fill="#F7C663"
        
          fontWeight="bold"
        >
          {progress}
        </text>
      </svg>
     
    </div>
  );
}

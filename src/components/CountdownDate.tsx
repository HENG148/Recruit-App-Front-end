import React, { useEffect, useState } from 'react'

export default function CountdownDate() {
  const [dayCount, setDayCount] = useState<number>(1);
  useEffect(() => {
    const storedStartDate = localStorage.getItem('startDate');
    let startDate: Date;
    if (storedStartDate) {
      startDate = new Date(storedStartDate);
    } else {
      startDate = new Date();
      localStorage.setItem('startDate', startDate.toISOString());
    }

    const calculateDays = () => {
      const currentDate = new Date();
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const dayElaped = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
      setDayCount(dayElaped);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {dayCount}
    </div>
  )
}

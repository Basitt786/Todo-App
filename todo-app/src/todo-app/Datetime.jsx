import React, { useEffect, useState } from 'react'

export default function Datetime() {
  const [datetime ,Setdatetime] = useState(new Date());

   useEffect(() => {

  Setdatetime(new Date());

  const interval = setInterval(() => {
    Setdatetime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);

  
  return (
    <>
      <h2 className='date-time'>{datetime.toLocaleDateString()} - {datetime.toLocaleTimeString()}</h2>
    </>
  )
}

import React, { useEffect } from "react";


const AllHamsters = () => {
  
  const fetchHamsters = async () => {
    const data = await fetch('http://localhost:3001/hamsters')
    .then(res => res.json())
    console.log(data)
  }

  useEffect (() => {
    fetchHamsters();
  },[])
  
  return (
    <div>
      <h1>All hamsters</h1>
    
    </div>
  )
}

export default AllHamsters;
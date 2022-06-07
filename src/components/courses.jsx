import React from 'react'
import displayRazor from '../units/pay'
export const CourseCard = () => {
  return (
    <div>
        <h1>Payment Gateway</h1>
        <button onClick={displayRazor} className="course-button">Buy Course</button>
    </div>
  )
}

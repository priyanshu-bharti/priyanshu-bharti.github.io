import React from 'react'

export default function Title({title = "Sample Title", description = "Lorem ipsum sit amet dolor consecutur"}) {
  
  return (
    <div className="py-8 w-full" data-aos="fade-in">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="font-light text-md mt-4">{description}</p>
    </div>
  )
}

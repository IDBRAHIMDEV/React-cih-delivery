import React from 'react'

const Card = ({ id, title, image, description, onDeleteCourse }) => {

    const OnCourseDelete = () => {
        onDeleteCourse({id, message: "Daddy i want to delete this course from your data"})
    } 

  return (
    <>
        <div className="card">
                     <img className="card-img-top" src={image} alt={title} />
                     <div className="card-body">
                         <h4 className="card-title">{title}</h4>
                         <p className="card-text">{description}</p>
                         <button onClick={ () => OnCourseDelete() } className="btn btn-danger btn-sm me-2">Delete</button>
                         <button onClick={''} className="btn btn-warning btn-sm">Edit</button>
                     </div>
                 </div>
    </>
  )
}

export default Card

import React, { useState, useEffect } from 'react'
import Card from '../components/courses/Card'

const Courses = () => {

    const [headerOfPage, setHeaderOfPage] = useState("Courses")
    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [courses, setCourses] = useState([])

    const changeHeader = () => {
        setHeaderOfPage((currentHeader) => "elearning")
      console.log(headerOfPage)
    }

    const addCourse = () => {

        const myCourse = {
            title,
            image,
            description
        }

        fetch("http://localhost:3001/courses", {
            method: "POST",
            body: JSON.stringify(myCourse)
        })
          .then(response => response.json())
          .then((course) => setCourses((currentCourses) => [course, ...currentCourses]))
          .catch((err) => {console.log(err)})

        

          initCourse(null)

        console.log(courses)
    }


    const deleteCourse = (id) => {
        fetch(`http://localhost:3001/courses/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            // retreiveAllCourses()
            setCourses(courses.filter(course => course.id !== id))
        })
        .catch(err => console.log(err))
    }

    const retreiveAllCourses = () => {
        fetch("http://localhost:3001/courses")
        .then(response => response.json())
        .then((courseList) => {
            setCourses(courseList)
            console.log(courseList)
        })
        .catch((err) => { console.log(err) })
    }

   

    const updateCourse = () => {

        const myCourse = {
            title,
            image,
            description
        }

        fetch(`http://localhost:3001/courses/${id}`, {
            method: "PUT",
            body: JSON.stringify(myCourse)
        })
        .then(res => res.json())
        .then(res => {
            initCourse(null)
            retreiveAllCourses()
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const initCourse= (course) => {
        setId(course.id ?? '')
        setTitle(course.title ?? '')
        setImage(course.image ?? '')
        setDescription(course.description ?? '')
    }


    useEffect(() => {
        retreiveAllCourses()
    }, [])

  return (
    <>

        <div className="row my-5">
            <h1>{ headerOfPage }</h1>
            <button onClick={changeHeader} className="btn btn-success">change</button>
        </div>
       
        <div className="row">
            <div className="col-4 mx-auto">

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                <input onChange={ (e) => setTitle(e.target.value) } value={title} type="text" name="" id="title" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                <input onChange={ (e) => setImage(e.target.value) } value={image} type="url" name="" id="image" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                <textarea onChange={ (e) => setDescription(e.target.value) } value={description} id="description" rows="5" className="form-control"></textarea>
                </div>
                
                <div className="d-grid">
                    { id ? (<button onClick={updateCourse} className="btn btn-warning">Update</button>) 
                         : (<button onClick={addCourse} className="btn btn-primary">Add</button>) }
                    
                    
                </div>
            </div>
        </div>


        <div className="row my-5">
            { courses.map((course) => (
                 <div className="col-4 my-2">
                 
                <Card 
                    id={course.id} 
                    title={course.title} 
                    image={course.image} 
                    description={course.description}
                    onDeleteCourse={ (e) => deleteCourse(e.id) }
                />

             </div>
            ) ) }
           
        </div>
    </>
  )
}

export default Courses

import React, { useState } from 'react'

const Courses = () => {

    const [headerOfPage, setHeaderOfPage] = useState("Courses")

    const changeHeader = () => {
        setHeaderOfPage((currentHeader) => "elearning")
      console.log(headerOfPage)
    }

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
                <input type="text" name="" id="title" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                <input type="url" name="" id="image" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                <textarea name="" id="description" rows="5" className="form-control"></textarea>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>


        <div className="row my-5">
            <div className="col-4 my-2">
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Courses
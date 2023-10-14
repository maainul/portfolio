import React from 'react'
import './Project.css'


const Project = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          lLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="row" id="ads">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify">Full Stack</span>
              <img
                src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
                alt=""
              />
            </div>
            <div className="card-image-overlay">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body">
              <div className="ad-title">
                <h5 className="text-uppercase">Shopping Wesite</h5>
              </div>
              <a href="" className="ad-btn">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
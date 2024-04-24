const heroSection = () => {
    return (
      <div style={{
          paddingLeft:"90px",
          paddingRight:"90px"
      }} className="container text-center mt-5 rounded-3 py-5 bg-light">
          <h1 className="mt-4 fw-bold display-5">A warm welcome!</h1>
          <p className="fs-4 mt-3">
          Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary mb-5 mt-5 fs-5">Call to action</button>
      </div>
    )
  }
  
  export default heroSection
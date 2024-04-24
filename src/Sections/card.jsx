import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

const Card = () => {
  return (
    <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">                
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-collection"></i>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Fresh new layout</h4>
                        <p className="card-text">With Bootstrap 5, were created a fresh new layout for this template!</p>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-cloud-download"></i>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Free to download</h4>
                        <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-card-heading"></i>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Jumbotron hero header</h4>
                        <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                        
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="row mt-5">
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-bootstrap"></i>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Feature boxes</h4>
                        <p className="card-text">Weve created some custom feature boxes using Bootstrap icons!</p>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-code"></i>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Simple clean code</h4>
                        <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-5 col-xs-12 mb-3 mb-sm-0">
                    <div className="card border-0 bg-light p-4 text-center">
                    <i className="bi bi-patch-check"></i>
                    <div className="card-body">
                        <h4 className="fw-bold card-title">A name you trust</h4>
                        <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        
                    </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Card
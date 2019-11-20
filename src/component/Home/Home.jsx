import React, {Component} from 'react';
class Home extends Component{
	render(){
		return(
			<div className="col-12">
				<div className="container sliderimage slider justify-content-center flex-row p-4">
					<div className="row col-12">
						<img className="rounded" src={require('../../gambar/promo.png')} alt="Responsive image"/>
					</div>
				</div>
				<div className="container notive">
					<div className="row">
						<div className="col-md-12">
							<div className="alert alert-danger danger" role="alert">
								<p className="text-white text-center">A simple success alert-check it out</p>
							</div>
						</div>
					</div>
				</div>
				{/*end slider*/}
				<div className="container slide">
					<div className="row">
						<div className="col-md-8">
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={require('../../gambar/02.jpg')} alt="" className="img-fluid d-block w-100 slider-img"/>
									</div>
									<div className="carousel-item active">
										<img src={require('../../gambar/03.jpg')} alt="" className="img-fluid d-block w-100 slider-img"/>
									</div>
									<div className="carousel-item active">
										<img src={require('../../gambar/04.jpg')} alt="" className="img-fluid d-block w-100 slider-img"/>
									</div>
									<a href="" className="carousel-control-prev" href="caraouselExampleIndicators" role="button" data-slider="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a href="" className="carousel-control-next" href="caraouselExampleIndicators" role="button" data-slider="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<img src={require('../../gambar/s01.png')} alt="Responsive image" className="img-fluid rounded slide w-100"/>
							<img src={require('../../gambar/promo.png')} alt="Responsive image" className="img-fluid rounded slide"/>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Home;
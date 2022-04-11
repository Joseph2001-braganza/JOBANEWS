import React, { Component } from 'react'
export default class newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card" style={{ "width": "18rem", "margin": "20px" }}>
                    <img className="card-img-top" src={!imageUrl ? "https://www.unitedinfocus.com/static/uploads/14/2021/10/GettyImages-1347758654-768x506.jpg" : imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="text-dark">{title}</h6>
                        <p className="text-dark">{description}   ....</p>
                    </div>
                    <div>
                        <a href={newsUrl} className="btn btn-primary btn-sm" style={{ "marginLeft": "18px", "marginBottom": "10px" }} target="_blank">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

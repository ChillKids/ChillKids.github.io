import React from 'react';

function Resume({ title, subtitle, resume_id, items }) {
    var arr = [];
    Object.keys(items).forEach(function (key) {
        arr.push(items[key]);
    });
    return (
        <div className="section resume" id={resume_id}>
            <div className="content">

                <div className="titles">
                    <div className="title">{title}</div>
                    <div className="subtitle">{subtitle}</div>
                </div>

                <div className="content-carousel">
                    <div className="owl-carousel" data-slidesview="2" data-slidesview_mobile="1">

                        {arr.map(item => <Resumeitem key={item.name} date={item.date} name={item.name} description={item.description} />)}



                    </div>

                    <div className="navs">
                        <span className="prev fas fa-chevron-left"></span>
                        <span className="next fas fa-chevron-right"></span>
                    </div>

                </div>

            </div>
        </div>
    );
}

class Resumeitem {
    render() {
        return (
            <div className="item">
                <div className="resume-item active">
                    <div className="date">{this.props.date}</div>
                    <div className="name">{this.props.name}</div>
                    <div className="single-post-text">
                        <p>
                            {this.props.description}                        
                        </p>
                    </div>
                </div>
            </div>);
    }
}

export default Resume;
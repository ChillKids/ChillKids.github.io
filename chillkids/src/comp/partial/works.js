import React from 'react';

function Works() {
    return (
        <div className="section works" id="section-portfolio">
            <div className="content">

                <div className="titles">
                    <div className="title">Portfolio</div>
                    <div className="subtitle">Latest works</div>
                </div>

                <div className="filter-menu">
                    <div className="filters">
                        <div className="btn-group">
                            <label data-text="All" className="glitch-effect">
                                <input type="radio" name="fl_radio" value=".box-col" />All
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Video">
                                <input type="radio" name="fl_radio" value=".f-video" />Video
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Music">
                                <input type="radio" name="fl_radio" value=".f-music" />Music
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Links">
                                <input type="radio" name="fl_radio" value=".f-links" />Links
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Image">
                                <input type="radio" name="fl_radio" value=".f-image" />Image
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Gallery">
                                <input type="radio" name="fl_radio" value=".f-gallery" />Gallery
                            </label>
                        </div>
                        <div className="btn-group">
                            <label data-text="Content">
                                <input type="radio" name="fl_radio" value=".f-content" />Content
                            </label>
                        </div>

                    </div>
                </div>

                <div className="box-items">

                    <div className="box-col f-gallery">
                        <div className="box-item">
                            <div className="image">
                                <a href="#gallery-1" className="has-popup-gallery">
                                    <img src="images/works/work1.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-images"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                                <div id="gallery-1" className="mfp-hide">
                                    <a href="images/works/work1.jpg"></a>
                                    <a href="images/works/work2.jpg"></a>
                                    <a href="images/works/work3.jpg"></a>
                                    <a href="images/works/work4.jpg"></a>
                                </div>
                            </div>
                            <div className="desc">
                                <div className="category">Gallery</div>
                                <a href="#gallery-1" className="name has-popup-gallery">Alabaster Complete Collection</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-video">
                        <div className="box-item">
                            <div className="image">
                                <a href="https://youtu.be/S4L8T2kFFck" className="has-popup-video">
                                    <img src="images/works/work2.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-video"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Video</div>
                                <a href="https://youtu.be/S4L8T2kFFck" className="name has-popup-video">Book of John Paper</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-image">
                        <div className="box-item">
                            <div className="image">
                                <a href="images/works/work7.jpg" className="has-popup-image">
                                    <img src="images/works/work7.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-image"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Image</div>
                                <a href="images/works/work7.jpg" className="name has-popup-image">White Rose Photo</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-image">
                        <div className="box-item">
                            <div className="image">
                                <a href="images/works/work4.jpg" className="has-popup-image">
                                    <img src="images/works/work4.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-image"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Image</div>
                                <a href="images/works/work4.jpg" className="name has-popup-image">Honest Company</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-gallery">
                        <div className="box-item">
                            <div className="image">
                                <a href="#gallery-2" className="has-popup-gallery">
                                    <img src="images/works/work5.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-images"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                                <div id="gallery-2" className="mfp-hide">
                                    <a href="images/works/work5.jpg"></a>
                                    <a href="images/works/work2.jpg"></a>
                                    <a href="images/works/work3.jpg"></a>
                                    <a href="images/works/work4.jpg"></a>
                                </div>
                            </div>
                            <div className="desc">
                                <div className="category">Gallery</div>
                                <a href="#gallery-2" className="name has-popup-gallery">Brown Short Dog</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-music">
                        <div className="box-item">
                            <div className="image">
                                <a href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true" className="has-popup-music">
                                    <img src="images/works/work6.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-music"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Music</div>
                                <a href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true" className="name has-popup-music">Brown Concrete Building</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-links">
                        <div className="box-item">
                            <div className="image">
                                <a href="https://beshley.com/" className="has-popup-link" target="_blank">
                                    <img src="images/works/work3.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-link"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Links</div>
                                <a href="https://beshley.com/" className="name has-popup-link">Black Car</a>
                            </div>
                        </div>
                    </div>

                    <div className="box-col f-content">
                        <div className="box-item">
                            <div className="image">
                                <a href="#popup-1" className="has-popup-media">
                                    <img src="images/works/work8.jpg" alt="" />
                                    <span className="info">
                                        <span className="centrize full-width">
                                            <span className="vertical-center">
                                                <i className="icon fas fa-plus"></i>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="desc">
                                <div className="category">Content</div>
                                <a href="#popup-1" className="name has-popup-media">Yellow and Blue Striped</a>
                            </div>
                            <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                                <div className="content">
                                    <div className="image">
                                        <img src="images/works/work8.jpg" alt="" />
                                    </div>
                                    <div className="desc">
                                        <div className="category">Content</div>
                                        <h4>Yellow and Blue Striped</h4>
                                        <p>
                                            Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata
                                            suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                                        </p>
                                        <a href="#" className="btn">
                                            <span className="animated-button"><span>View Project</span></span>
                                            <i className="icon fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="clear"></div>
            </div>
        </div>
    );
}

export default Works;
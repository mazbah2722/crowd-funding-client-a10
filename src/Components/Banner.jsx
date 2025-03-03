import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full my-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://cdn.prod.website-files.com/62d95cab901208903052c89b/654c6f627cd2a36e76491c2e_654209631eb0104326030a4e_Crowdfunding-MME-01.jpeg"
      className="w-full  h-[400px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img 
      src="https://www.fundraisingscript.com/blog/wp-content/uploads/2023/10/Crowdfunding-Vs-Donation-based-funding-696x400.png"
      className="w-full h-[400px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/email_template/Impactguru-emailtemplate0.56978500%201639661815.jpg"
      className="w-full h-[400px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://lenderkit.com/wp-content/uploads/webp/2022/05/equity-crowdfunding-platform-workflow-png.webp"
      className="w-full  h-[400px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
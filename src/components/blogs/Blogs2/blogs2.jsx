/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import blogData from "../../../data/blog1.json"

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Get The Latest News</h6>
              <h3>What Our Trending News.</h3>
              <p>
                We provide company and finance service for startups and company
                business.
              </p>
              <Link href="/blog/blog-dark">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            
         {blogData.slice(0,3).map((blogItem,index)=>(
           <div className="item wow fadeInUp" data-wow-delay=".3s" key={index}>
           <div className="img valign">
             <img src={blogItem.image} alt="" />
           </div>
           <div className="cont valign">
             <div>
               <div className="info">
                 <Link href="/blog/blog-dark">
                   <a className="date">
                     <span>
                       <i>{blogItem.date.day}</i> {blogItem.date.month}
                     </span>
                   </a>
                 </Link>
                 <span>/</span>
                 <Link href="/blog/blog-dark">
                   <a className="tag">
                     <span>{blogItem.tags[1]}</span>
                   </a>
                 </Link>
               </div>
               <h5>
                 <Link href="/blog-details/blog-details-dark">
                   <a>
                   {blogItem.title}
                   </a>
                 </Link>
               </h5>
             </div>
           </div>
         </div>
         ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;

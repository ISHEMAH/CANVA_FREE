/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <a>
                      <img src={blogItem.image} alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <a className="date">
                          <span className="num">{blogItem.date.day}</span>{" "}
                          <span className="num">{blogItem.date.month}</span>{" "}
                          <span>{blogItem.date.year}</span>
                        </a>
                        <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <a key={index}>{tag}</a>
                          ))}
                        </div>
                        <h4 className="title">{blogItem.title}</h4>
                        <p>{blogItem.content}</p>
                        <Link
                          href={`/blog-details?id=${blogItem.id}`}
                        >
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;

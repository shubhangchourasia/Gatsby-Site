import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import "bulma/css/bulma.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  blogContainer,
  main,
  blogImg,
  blogTitle,
  blogText,
  blogTopImg,
} from "../styles/homepage.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

export default function Blogs({ data }) {
  const blogs = data.blogs.edges;
  const bloginfo = data.bloginfo;
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div className="container ">
            <div className="columns is-vcentered">
              <div className="column" data-aos="fade-up">
                <div className="title is-size-2 is-size-3-mobile has-text-info ">
                  {bloginfo.frontmatter.title}
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: bloginfo.html,
                    }}
                    className={
                      "is-size-4 is-size-5-mobile has-text-grey has-text-weight-semibold"
                    }
                  />
                </div>
              </div>
              <div
                className="column is-flex is-justify-content-center"
                data-aos="zoom-in"
              >
                <GatsbyImage
                  image={getImage(bloginfo.frontmatter.blogImg.childImageSharp)}
                  alt="Blog Image"
                  className={blogTopImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={main}>
        <div className={blogContainer}>
          {blogs.map((blog) => (
            <Link to={"/src/blogs" + blog.node.fields.slug} key={blog.node.id}>
              <div className="card" data-aos="fade-up" data-aos-duration="1500">
                <div className={"is-flex is-justify-content-center " + blogImg}>
                  <GatsbyImage
                    image={getImage(
                      blog.node.frontmatter.thumbnail.childImageSharp
                    )}
                    alt={blog.node.frontmatter.title}
                  />
                </div>

                <div className="card-content ">
                  <div className="content">
                    <div
                      className={
                        "has-text-weight-semibold is-size-5 " + blogTitle
                      }
                    >
                      {" "}
                      {blog.node.frontmatter.title}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.node.html,
                      }}
                      className={"mt-2 has-text-grey " + blogText}
                    />
                    ....
                  </div>
                  <div className="is-flex is-justify-content-space-between has-text-grey-light ">
                    <div>{blog.node.frontmatter.date}</div>
                    <div>{blog.node.frontmatter.readTime} min read</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query DisplayAllBlogs {
    blogs: allMarkdownRemark(
      filter: { fields: { slug: { nin: ["/homepage/", "/blogpage/"] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            readTime
            date(formatString: "MMMM DD YYYY HH:MM")
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
          fields {
            slug
          }
          id
        }
      }
    }
    bloginfo: markdownRemark(fields: { slug: { eq: "/blogpage/" } }) {
      frontmatter {
        title
        blogImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
      id
    }
  }
`;

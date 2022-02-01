import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import "bulma/css/bulma.css";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mainBlog, mainBlogImg } from "../styles/homepage.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { darkModeText } from "../styles/homepage.module.css";
import { defineCustomElements as deckDeckGoElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoElement();
const BlogDetails = ({ data }) => {
  const blog = data.markdownRemark;
  const icon = {
    fontSize: "18px",
    marginTop: "2px",
    marginRight: "5px",
  };
  // Init localStorage in development
  // const theme = JSON.parse(localStorage.getItem("darktheme"));

  //  Init localStorage in production
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("darktheme"))
      : null;

  // State for dark theme
  const [darkTheme, setDarkTheme] = useState();
  // Set theme when page loads
  useEffect(() => {
    setDarkTheme(theme);
  }, [theme]);

  return (
    <Layout>
      {/* Meta tags */}
      <Helmet>
        <title> {blog.frontmatter.title}</title>
        <meta name="description" content="Blog Details" />
      </Helmet>
      {/* Back to blogs link */}
      <Link to="/blogs">
        <div
          className={
            "mb-4 has-text-grey has-text-weight-semibold is-flex " + mainBlogImg
          }
        >
          <div style={icon}>
            <FaArrowLeft />
          </div>
          back to blogs
        </div>
      </Link>

      <div className={"is-flex is-justify-content-center " + mainBlogImg}>
        .{/* Blog image */}
        {blog.frontmatter.thumbnail != null ? (
          <GatsbyImage
            image={getImage(blog.frontmatter.thumbnail.childImageSharp)}
            alt="Blog Img"
          />
        ) : (
          " "
        )}
      </div>
      <div className={"mt-6 " + mainBlog}>
        <div
          className={
            (darkTheme ? "has-text-white" : "has-text-grey") +
            " is-size-3 is-size-5-mobile has-text-weight-bold"
          }
        >
          {" "}
          {/* Blog title */}
          {blog.frontmatter.title}{" "}
        </div>
        <div className="has-text-right mt-2 has-text-grey">
          {blog.frontmatter.date} • {blog.frontmatter.readTime} min read
        </div>
        {/* Blog content */}
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          className={
            (darkTheme ? darkModeText : "has-text-grey-darker") +
            " has-text-justified mt-2"
          }
        />
      </div>
    </Layout>
  );
};

export default BlogDetails;

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        readTime
        date(formatString: "MMMM DD YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;

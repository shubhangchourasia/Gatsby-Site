import { graphql, Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import "bulma/css/bulma.css";
import * as styles from "../styles/homepage.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const ReactMarkdown = require("react-markdown");

export default function Index({ data }) {
  const pageData = data.markdownRemark.frontmatter;
  const mar = {
    marginTop: "50px",
    marginBottom: "100px",
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

  // Init Aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Layout>
      {/* Meta tags */}
      <Helmet>
        <title>DigitalBiz Tech</title>
        <meta name="description" content="DBT Application" />
      </Helmet>
      {/* Home Section */}
      <section id="#">
        <div className="columns">
          <div
            className="column mt-6 pt-6 is-two-fifth ml-6 "
            data-aos="fade-up"
          >
            {/* Heading */}
            <ReactMarkdown
              children={pageData.heading}
              className={"has-text-weight-semibold mt-6 " + styles.heading}
            />
            {/* Slogan */}
            <ReactMarkdown
              children={pageData.slogan}
              className={"has-text-weight-semibold mt-6 " + styles.slogan}
            />
            {/* Contact us link */}
            <Link to="/#contact">
              <div className="buttons mt-2">
                <button className="button is-info">Contact Us</button>
              </div>
            </Link>
          </div>
          <div
            className="column is-flex is-justify-content-center"
            data-aos="zoom-in"
          >
            {/* Home image */}
            <figure className={"image " + styles.topImage}>
              <GatsbyImage
                image={getImage(
                  data.markdownRemark.frontmatter.topImage.childImageSharp
                )}
                alt="Top Image"
              />
            </figure>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div
            className="column is-flex is-justify-content-center"
            data-aos="zoom-in"
          >
            {/* Salesforce image */}
            <figure className={"image " + styles.salesfImg}>
              <GatsbyImage
                image={getImage(
                  data.markdownRemark.frontmatter.salesforceImage
                    .childImageSharp
                )}
                alt="Salesforce Image"
              />
            </figure>
          </div>
          {/* Subheading */}
          <div className="column" data-aos="fade-up">
            <ReactMarkdown
              children={pageData.subheading}
              className={
                (darkTheme ? "has-text-white" : "") +
                " has-text-weight-semibold has-text-centered " +
                styles.subheading
              }
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={mar}>
        <div
          className={
            "has-text-weight-semibold has-text-centered is-size-3 is-size-5-mobile " +
            styles.about
          }
          data-aos="fade-up"
        >
          About DBT
        </div>
        <div className="columns mt-2 is-vcentered">
          <div className="column" data-aos="fade-up">
            <div className="has-text-weight-semibold has-text-centered is-size-4 is-size-5-mobile has-text-info mb-4">
              Our Mission
            </div>
            {/* Mission Text */}
            <ReactMarkdown
              children={pageData.mission}
              className={
                (darkTheme ? "has-text-white " : "") +
                "has-text-weight-semibold has-text-centered " +
                styles.mission
              }
            />
          </div>
          <div
            className="column is-flex is-justify-content-center "
            data-aos="zoom-in"
          >
            {/* About image */}
            <figure className={"image "}>
              <GatsbyImage
                image={getImage(
                  data.markdownRemark.frontmatter.aboutImg.childImageSharp
                )}
                alt="About Image"
              />
            </figure>
          </div>
        </div>
        <div data-aos="fade-up">
          {/* Core Values  */}
          <ReactMarkdown
            children={pageData.coreValues}
            className={
              (darkTheme ? "has-text-light " : "has-text-grey") +
              " has-text-centered has-text-weight-medium " +
              styles.coreStyle
            }
          />
        </div>
      </section>
      {/* Services Section */}
      <section id="services" style={mar}>
        <div
          className={
            "has-text-weight-semibold has-text-centered is-size-3 is-size-5-mobile " +
            styles.about
          }
          data-aos="fade-up"
        >
          Our Services
        </div>
        <div className="columns is-vcentered mt-4">
          <div className="column is-two-fifths" data-aos="zoom-in">
            {/* Services image */}
            <figure className={"image "}>
              <GatsbyImage
                image={getImage(
                  data.markdownRemark.frontmatter.serviceImg.childImageSharp
                )}
                alt="Service Image"
              />
            </figure>
          </div>
          {/* All services with image and data */}
          <div className="column mt-3">
            <div className={"columns " + styles.cols}>
              <div
                className={
                  (darkTheme ? "has-background-black" : "") +
                  " column box ml-2 mr-2 " +
                  styles.boxMargin
                }
                data-aos="fade-up"
              >
                <div className="is-flex is-justify-content-center">
                  <figure className={"image is-64x64"}>
                    <GatsbyImage
                      image={getImage(
                        data.markdownRemark.frontmatter.serviceImg1
                          .childImageSharp
                      )}
                      alt="Service Image 1"
                    />
                  </figure>
                </div>
                <ReactMarkdown
                  children={pageData.service1}
                  className={
                    (darkTheme ? "has-text-light" : "has-text-grey") +
                    " has-text-weight-medium "
                  }
                />
              </div>
              <div
                className={
                  (darkTheme ? "has-background-black" : "") +
                  " column box ml-2 mr-2 " +
                  styles.boxMargin
                }
                data-aos="fade-up"
              >
                <div className="is-flex is-justify-content-center">
                  <figure className={"image is-64x64"}>
                    <GatsbyImage
                      image={getImage(
                        data.markdownRemark.frontmatter.serviceImg3
                          .childImageSharp
                      )}
                      alt="Service Image 3"
                    />
                  </figure>
                </div>
                <ReactMarkdown
                  children={pageData.service3}
                  className={
                    (darkTheme ? "has-text-light" : "has-text-grey") +
                    " has-text-weight-medium "
                  }
                />
              </div>
            </div>
            <div className={"columns " + styles.cols}>
              <div
                className={
                  (darkTheme ? "has-background-black" : "") +
                  " column box ml-2 mr-2 " +
                  styles.boxMargin
                }
                data-aos="fade-up"
              >
                <div className="is-flex is-justify-content-center">
                  <figure className={"image is-64x64"}>
                    <GatsbyImage
                      image={getImage(
                        data.markdownRemark.frontmatter.serviceImg2
                          .childImageSharp
                      )}
                      alt="Service Image 2"
                    />
                  </figure>
                </div>
                <ReactMarkdown
                  children={pageData.service2}
                  className={
                    (darkTheme ? "has-text-light" : "has-text-grey") +
                    " has-text-weight-medium "
                  }
                />
              </div>
              <div
                className={
                  (darkTheme ? "has-background-black" : "") +
                  " column box ml-2 mr-2 " +
                  styles.boxMargin
                }
                data-aos="fade-up"
              >
                <div className="is-flex is-justify-content-center">
                  <figure className={"image is-64x64"}>
                    <GatsbyImage
                      image={getImage(
                        data.markdownRemark.frontmatter.serviceImg4
                          .childImageSharp
                      )}
                      alt="Service Image 4"
                    />
                  </figure>
                </div>
                <ReactMarkdown
                  children={pageData.service4}
                  className={
                    (darkTheme ? "has-text-light" : "has-text-grey") +
                    " has-text-weight-medium "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" style={mar}>
        <div
          className={
            "has-text-weight-semibold has-text-centered is-size-3 is-size-5-mobile " +
            styles.about
          }
          data-aos="fade-up"
        >
          Contact Us
        </div>
        {/* Form for contact */}
        <div className="columns mt-4">
          <div className="column ml-6 mr-6 is-two-fifths" data-aos="fade-up">
            <form>
              <div className="field ">
                <label
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="control has-icons-left">
                  <input
                    className={
                      (darkTheme
                        ? "has-background-black has-text-light"
                        : "has-text-grey") +
                      " input " +
                      styles.txtBorder
                    }
                    type="text"
                    required
                    id="name"
                  />
                  <span className="icon is-left">
                    <FaUserAlt />
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                  htmlFor="email"
                >
                  Email
                </label>

                <div className="control has-icons-left">
                  <input
                    className={
                      (darkTheme
                        ? "has-background-black has-text-light"
                        : "has-text-grey") +
                      " input " +
                      styles.txtBorder
                    }
                    type="email"
                    required
                    id="email"
                  />
                  <span className="icon is-left">
                    <MdEmail />
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="control">
                  <textarea
                    className={
                      (darkTheme
                        ? "has-text-light has-background-black"
                        : "has-text-grey") +
                      " textarea " +
                      styles.txtBorder
                    }
                    required
                    id="message"
                  ></textarea>
                </div>
              </div>
              <div className="buttons is-centered">
                <button className="button is-info is-outlined is-fullwidth">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Contact Image */}
          <div className="column" data-aos="zoom-in">
            <div className="is-flex is-justify-content-center">
              <figure className={"image"}>
                <GatsbyImage
                  image={getImage(
                    data.markdownRemark.frontmatter.contactImg.childImageSharp
                  )}
                  alt="ContactImg"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Homepage {
    markdownRemark(fields: { slug: { eq: "/homepage/" } }) {
      frontmatter {
        salesforceImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        serviceImg1 {
          childImageSharp {
            gatsbyImageData
          }
        }
        serviceImg2 {
          childImageSharp {
            gatsbyImageData
          }
        }
        serviceImg3 {
          childImageSharp {
            gatsbyImageData
          }
        }
        serviceImg4 {
          childImageSharp {
            gatsbyImageData
          }
        }
        topImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        aboutImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        serviceImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        contactImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        heading
        coreValues
        mission
        slogan
        subheading
        service4
        service3
        service2
        service1
      }
    }
  }
`;

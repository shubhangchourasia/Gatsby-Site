import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  //   window.addEventListener('storage', () => {
  // console.log('session storage variable value changed');
  // });
  return (
    <Layout>
      <Helmet>
        <title>DigitalBiz Tech</title>
      </Helmet>
      <section id="#">
        <div className="columns">
          <div
            className="column mt-6 pt-6 is-two-fifths ml-6 "
            data-aos="fade-up"
          >
            <ReactMarkdown
              children={pageData.heading}
              className={"has-text-weight-semibold mt-6 " + styles.heading}
            />
            <ReactMarkdown
              children={pageData.slogan}
              className={"has-text-weight-semibold mt-6 " + styles.slogan}
            />
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
          <div className="column" data-aos="fade-up">
            <ReactMarkdown
              children={pageData.subheading}
              className={
                "has-text-weight-semibold has-text-grey-dark has-text-centered " +
                styles.subheading
              }
            />
          </div>
        </div>
      </section>
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
            <ReactMarkdown
              children={pageData.mission}
              className={
                "has-text-weight-semibold has-text-grey-dark has-text-centered " +
                styles.mission
              }
            />
          </div>
          <div
            className="column is-flex is-justify-content-center "
            data-aos="zoom-in"
          >
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
          <ReactMarkdown
            children={pageData.coreValues}
            className={
              "has-text-grey has-text-centered has-text-weight-medium " +
              styles.coreStyle
            }
          />
        </div>
      </section>
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
            <figure className={"image "}>
              <GatsbyImage
                image={getImage(
                  data.markdownRemark.frontmatter.serviceImg.childImageSharp
                )}
                alt="Service Image"
              />
            </figure>
          </div>
          <div className="column mt-3">
            <div className={"columns " + styles.cols}>
              <div
                className={"column box ml-2 mr-2 " + styles.boxMargin}
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
                  className={"has-text-grey has-text-weight-medium "}
                />
              </div>
              <div
                className={"column box ml-2 mr-2 " + styles.boxMargin}
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
                  className={"has-text-grey has-text-weight-medium "}
                />
              </div>
            </div>
            <div className={"columns " + styles.cols}>
              <div
                className={"column box ml-2 mr-2 " + styles.boxMargin}
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
                  className={"has-text-grey has-text-weight-medium "}
                />
              </div>
              <div
                className={"column box ml-2 mr-2 " + styles.boxMargin}
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
                  className={"has-text-grey has-text-weight-medium "}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
        <div className="columns mt-4">
          <div className="column ml-6 mr-6 is-two-fifths" data-aos="fade-up">
            <form>
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                  <span className="icon is-left">
                    <FaUserAlt />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                  <span className="icon is-left">
                    <MdEmail />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter Message"
                    required
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

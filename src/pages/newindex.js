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
import Recaptcha from "react-recaptcha";
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
  //ReCaptcha toggle function
  const reCaptchaToggle = () => {
    const ogURL = new URL(document.getElementsByTagName("iframe")[0].src); //Extract original url from iframe
    const params = new URLSearchParams(ogURL.search); //Get search parameters
    params.set("theme", "dark"); //Set theme
    const url =
      "https://www.google.com/recaptcha/api2/anchor?" + params.toString(); //Create new URL
    document.getElementsByTagName("iframe")[0].src = url; //Set new URL to iframe source.
  };
  // Set theme when page loads
  useEffect(() => {
    setDarkTheme(theme);
    document.getElementById("g-recaptcha").children[0].style.margin = "auto";
    if (theme) {
      reCaptchaToggle();
    }
  }, [theme]);

  // Init Aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  // Variable to store contact form details
  const [formDetails, setFormDetails] = useState({
    Name: null,
    Email: null,
    Message: null,
  });
  // Recaptcha code
  const verifyCallback = (res) => {
    if (res) {
      setIsVerified(true);
    }
  };

  // Verified variable
  const [isVerified, setIsVerified] = useState(false);

  const submitButton = React.useRef(); // To toggle loading in submit button.

  //Send function to submit contact form details.
  const sendForm = (e) => {
    e.preventDefault();
    if (isVerified) {
      submitButton.current.classList.toggle("is-loading");
      var xhr = new XMLHttpRequest();
      //Url of google sheets script.
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwcH2mGRIAQdwO2X51kUXr-rxnYul-ZOmpbxa_kjVKE-Dg3AF2atwKzfTyvGAbXrm4I/exec"
      );
      // xhr.open(
      //   "POST",
      //   "https://script.google.com/macros/s/AKfycbz1HuGxDCfo3UlZ_c_2-Z8e8boRuYE-kkHsAzkgXFuwOnnAapPxSol1FsQpGlA-O6k/exec"
      // );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Your message has been submitted successfully.");
          setIsVerified(false);
          e.target.reset();
          window.grecaptcha.reset();
          //Center the reCaptcha
          document.getElementById("g-recaptcha").children[0].style.margin =
            "auto";
          if (theme) {
            reCaptchaToggle();
          }
          submitButton.current.classList.toggle("is-loading");
        }
      };
      xhr.onerror = (err) => {
        console.log("err", err);
      };
      var encoded = Object.keys(formDetails)
        .map(function (k) {
          return (
            encodeURIComponent(k) + "=" + encodeURIComponent(formDetails[k])
          );
        })
        .join("&");
      xhr.send(encoded);
    } else {
      alert("Please verify reCaptcha.");
    }
  };

  return (
    <Layout>
      {/* Meta tags */}
      <Helmet>
        <title>Digital Biz Tech</title>
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
            {/* Form goes here */}
            <form onSubmit={sendForm}>
              <div className="field">
                <label
                  htmlFor="Name"
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                >
                  Name:
                </label>
                <div className="control has-icons-left">
                  <input
                    id="Name"
                    name="Name"
                    required
                    className={
                      (darkTheme
                        ? "has-background-black has-text-light"
                        : "has-text-grey") +
                      " input " +
                      styles.txtBorder
                    }
                    onChange={(event) =>
                      setFormDetails({
                        ...formDetails,
                        Name: event.target.value,
                      })
                    }
                  />{" "}
                  <span className="icon is-left">
                    <FaUserAlt />
                  </span>
                </div>
              </div>

              <div className="field">
                <label
                  htmlFor="Email"
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                >
                  Email:
                </label>
                <div className="control has-icons-left">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    className={
                      (darkTheme
                        ? "has-background-black has-text-light"
                        : "has-text-grey") +
                      " input " +
                      styles.txtBorder
                    }
                    onChange={(event) =>
                      setFormDetails({
                        ...formDetails,
                        Email: event.target.value,
                      })
                    }
                  />
                  <span className="icon is-left">
                    <MdEmail />
                  </span>
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="Message"
                  className={
                    "label has-text-weight-light " +
                    (darkTheme ? "has-text-light" : "has-text-grey")
                  }
                >
                  Message:{" "}
                </label>
                <div className="control">
                  <textarea
                    id="Message"
                    name="Message"
                    required
                    className={
                      (darkTheme
                        ? "has-text-light has-background-black"
                        : "has-text-grey") +
                      " textarea " +
                      styles.txtBorder
                    }
                    onChange={(event) =>
                      setFormDetails({
                        ...formDetails,
                        Message: event.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <Recaptcha
                  sitekey="6Ld6fukbAAAAAJumHsGXH7_lcqVVUTvwfjNpLaRa"
                  render="explicit"
                  verifyCallback={verifyCallback}
                />
              </div>
              <div className="buttons is-centered">
                <button
                  className="button is-info is-outlined is-fullwidth pure-button"
                  type="submit"
                  ref={submitButton}
                >
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
  query homepage {
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

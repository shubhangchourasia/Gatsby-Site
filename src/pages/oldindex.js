import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "bulma/css/bulma.css";
import * as styles from "../styles/home.module.css";

const ReactMarkdown = require("react-markdown");
export default function index({ data }) {

  const { frontmatter } = data.markdownRemark;

  const mar = {
    marginTop: "50px",
  };
  const homeSection = {
    marginTop: "50px",
  };
  return (
    <Layout>
      <section id="#" style={homeSection}>
        <div className={styles.head}>
          <ReactMarkdown
            children={frontmatter.heading}
            className={
              "has-text-weight-semibold has-text-info heading " + styles.heading
            }
          />
          <ReactMarkdown
            children={frontmatter.slogan}
            className={
              "mt-6 has-text-weight-semibold has-text-grey " + styles.subHeading
            }
          />
        </div>

        <figure className="image">
          <img src={frontmatter.topImage} alt="BGImage" />
        </figure>
        <ReactMarkdown
          children={frontmatter.subheading}
          className={
            "mt-6 has-text-weight-semibold has-text-grey has-text-centered is-size-3	is-size-5-mobile"
          }
        />
        <figure>
          <img
            src={frontmatter.salesforceImage}
            alt="SalesforceImage"
            className={styles.salesImg}
          />
        </figure>
      </section>
      <section id="about" style={mar}>
        <div className="has-text-centered has-text-info is-size-4 is-size-5-mobile has-text-weight-semibold">
          About DBT
        </div>
        <div className="has-text-centered is-size-4 is-size-5-mobile has-text-weight-medium">
          Our Mission
          <ReactMarkdown
            children={frontmatter.mission}
            className="has-text-weight-semibold has-text-grey has-text-centered is-size-3	is-size-5-mobile"
          />
          <ReactMarkdown
            children={frontmatter.coreValues}
            className={
              "has-text-grey has-text-centered " + styles.coreStyle
            }
          />
        </div>
      </section>
      <section id="services" style={mar}>
        <div className="has-text-centered has-text-info is-size-4 is-size-5-mobile has-text-weight-semibold">
          Our Services
        </div>
        <div className={"columns mt-6 mr-6 ml-6 " + styles.cols}>
          <div className={"column box mr-6 ml-6 " + styles.boxMargin}>
            <div className={styles.boxFlex}>
              <div className={styles.serve}>
                <figure className="image is-64x64">
                  <img src={frontmatter.serviceImg1} alt="serviceImg1" />
                </figure>
              </div>
              <div className={styles.serve}>
                <ReactMarkdown children={frontmatter.service1} />
              </div>
            </div>
          </div>
          <div className={"column box mr-6 ml-6 " + styles.boxMargin}>
            <div className={styles.boxFlex}>
              <div className={styles.serve}>
                <figure className="image is-64x64">
                  <img src={frontmatter.serviceImg3} alt="serviceImg3" />
                </figure>
              </div>
              <div className={styles.serve}>
                <ReactMarkdown children={frontmatter.service3} />
              </div>
            </div>
          </div>
        </div>
        <div className={"columns mt-6 mr-6 ml-6 " + styles.cols}>
          <div className={"column box mr-6 ml-6 " + styles.boxMargin}>
            <div className={styles.boxFlex}>
              <div className={styles.serve}>
                <figure className="image is-64x64">
                  <img src={frontmatter.serviceImg2} alt="serviceImg2" />
                </figure>
              </div>
              <div className={styles.serve}>
                <ReactMarkdown children={frontmatter.service2} />
              </div>
            </div>
          </div>
          <div className={"column box mr-6 ml-6 "+ styles.boxMargin}>
            <div className={styles.boxFlex}>
              <div className={styles.serve}>
                <figure className="image is-64x64">
                  <img src={frontmatter.serviceImg4} alt="serviceImg4" />
                </figure>
              </div>
              <div className={styles.serve}>
                <ReactMarkdown children={frontmatter.service4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" style={mar}>
        Contacts
      </section>
    </Layout>
  );
}
export const query = graphql`
  query Homepageqwer {
    markdownRemark(fields: { slug: { eq: "/homepage/" } }) {
      id
      frontmatter {
        service4
        service3
        service2
        service1
        mission
        coreValues
        slogan
        subheading
        heading
      }
    }
  }
`;

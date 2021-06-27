import React, { useEffect } from "react";
import { Link } from "gatsby";
import "bulma/css/bulma.css";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const img = {
    maxWidth: "70%",
    margin: "0 auto",
  };
  return (
    <Layout>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <div style={img} className="has-text-centered">
        <figure class="image" data-aos="zoom-in">
          <img src="/img/404Img.png" alt="404Img" />
        </figure>

        <Link to="/" data-aos="fade-up" data-aos-delay="200">
          <button className="button is-info">Go to Home</button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllBlogs {
      allMarkdownRemark {
        edges {
          node {        
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((node) => {
    var correctPath = node.node.fields.slug;
    actions.createPage({
      path: "src/blogs" + correctPath,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: correctPath},
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

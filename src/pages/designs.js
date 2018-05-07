import React from 'react'
import Section from '../components/Section'
import DesignUnit from '../components/DesignUnit'

import './style.scss'

const DesignPage = ({ data }) => (
    <div className="index">
      <div className="designs">
        <h5>
          <a href="/">🏠</a>
        </h5>

        <h3>Design</h3>

        <p>
          Illustration, cartoons, logos, and icons.
        </p>

        <Section>
          <div className="row">

            {data.allMarkdownRemark.edges.map(({ node }) => (
              <DesignUnit
                logo={node.frontmatter.image}
                colour='#FFFFFF'
                title={node.frontmatter.title}
                link={node.frontmatter.link}
                timeperiod='2014 - current'
                subtitle={node.frontmatter.subtitle}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
)

export const query = graphql `
  query DesignSectionQuery {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          subtitle
          image
          link
        }
      }
    }
  }
}
`;

export default DesignPage

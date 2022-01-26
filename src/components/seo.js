import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image, author, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const ogImage = image || 'https://blog.colecionando.games/assets/img/thumbnail_default.png'
  const contentAuthor = author || site.siteMetadata.author
  const contentType = type || 'website'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `aplication-name`,
          content: 'Colecionando.Games'
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: contentAuthor
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: contentType
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage
        },
        {
          name: `twitter:creator`,
          content: contentAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

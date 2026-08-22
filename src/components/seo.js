import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image, author, type, children }) {
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
  const pageTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
  
  const defaultMeta = [
    { name: `application-name`, content: `Colecionando.Games` },
    { name: `description`, content: metaDescription },
    { name: `author`, content: contentAuthor },
    { property: `og:image`, content: ogImage },
    { property: `og:title`, content: title || site.siteMetadata.title },
    { property: `og:type`, content: contentType },
    { property: `og:description`, content: metaDescription },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:image:src`, content: ogImage },
    { name: `twitter:creator`, content: contentAuthor },
    { name: `twitter:title`, content: title || site.siteMetadata.title },
    { name: `twitter:description`, content: metaDescription },
  ]

  const allMeta = defaultMeta.concat(meta)

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>

      {allMeta.map((item, index) => {
        if (item.name) {
          return <meta key={index} name={item.name} content={item.content} />
        }

        if (item.property) {
          return <meta key={index} property={item.property} content={item.content} />
        }

        return null
      })}
      {children}
    </>
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
  image: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
}

export default Seo

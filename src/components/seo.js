import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image, author, type, pathname, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata?.siteUrl || "https://blog.colecionando.games"
  const metaDescription = description || site.siteMetadata.description
  const contentAuthor = author || site.siteMetadata.author
  const contentType = type || 'website'
  const pageTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title

  const defaultImage = `${siteUrl}/assets/img/thumbnail_default.png`
  const ogImage = image ?
    image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`
    : defaultImage

  const canonicaUrl = pathname ? `${siteUrl}${pathname}` : null
  
  const defaultMeta = [
    { name: `application-name`, content: `Colecionando.Games` },
    { name: `description`, content: metaDescription },
    { name: `author`, content: contentAuthor },    
    { property: `og:title`, content: pageTitle },
    { property: `og:description`, content: metaDescription },
    { property: `og:image`, content: ogImage },
    { property: `og:type`, content: contentType },
    ...(canonicaUrl ? [{ property: `og:url`, content: canonicaUrl }] : []),
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:title`, content: pageTitle },
    { name: `twitter:description`, content: metaDescription },
    { name: `twitter:image`, content: ogImage },
    { name: `twitter:creator`, content: contentAuthor },    
  ]

  const extraMeta = Array.isArray(meta) ? meta : []
  const allMeta = defaultMeta.concat(extraMeta)

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>

      {allMeta.map((item, index) => {
        if (item.name) {
          return <meta key={item.name || index} name={item.name} content={item.content} />
        }

        if (item.property) {
          return <meta key={item.property || index} property={item.property} content={item.content} />
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
  pathname: PropTypes.string,
  children: PropTypes.node,
}

export default Seo

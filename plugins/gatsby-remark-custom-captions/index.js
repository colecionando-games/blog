const visit = require("unist-util-visit")

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "image", (node, index, parent) => {
    if (node && node.title) {
      const altText = node.alt || ""
      const captionText = node.title
      const imageUrl = node.url

      const figureHtml = `<figure class="gatsby-custom-figure" style="padding: 0 16px; text-align: center">
        <img src="${imageUrl}" alt="${altText}" style="margin:0 auto 5px"/>
        <figcaption class="gatsby-custom-figcaption">${captionText}</figcaption>
      </figure>`

      node.type = "html"
      node.value = figureHtml

      delete node.url
      delete node.alt
      delete node.title
    }
  })

  return markdownAST
}

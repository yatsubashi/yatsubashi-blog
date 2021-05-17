import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Meta =
  | {
      name: string
      content: string
    }
  | {
      property: string
      content: string
    }

interface SEOProps {
  title: string
  description: string
  lang: string
  meta: Meta[]
  pathname: string
}

const SEO: React.FC<Partial<SEOProps>> = ({
  title = ``,
  description = ``,
  lang = `ja`,
  meta = [],
  pathname = ``,
}) => {
  const { siteMetadata } = useStaticQuery<SEOQuery>(query).site

  const titleTag = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const canonical = {
    rel: 'canonical',
    href: `${siteMetadata.siteUrl}${pathname}`,
  }
  const defaultMeta: Meta[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.social.twitter,
    },
    {
      name: `twitter:title`,
      content: titleTag,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={titleTag}
      link={[canonical]}
      meta={defaultMeta.concat(meta)}
    />
  )
}

export default SEO

interface SEOQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      social: {
        twitter: string
      }
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`

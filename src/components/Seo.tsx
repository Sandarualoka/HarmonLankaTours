import { Helmet } from 'react-helmet-async';

type SeoProps = {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export default function Seo({
    title,
    description,
    canonical,
    image = 'https://yourdomain.com/og-image.jpg',
    type = 'website',
    schema,
}: SeoProps) {
    const schemaMarkup = schema
        ? Array.isArray(schema)
            ? JSON.stringify(schema)
            : JSON.stringify(schema)
        : null;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />

            {canonical ? <link rel="canonical" href={canonical} /> : null}

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {canonical ? <meta property="og:url" content={canonical} /> : null}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {schemaMarkup ? (
                <script type="application/ld+json">{schemaMarkup}</script>
            ) : null}
        </Helmet>
    );
}
const docsURL = process.env.NEXT_PUBLIC_DOCS_URL
console.log({docsURL})

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/docs",
                destination: `${docsURL}/docs`,
              },
              {
                source: "/docs/:path+",
                destination: `${docsURL}/docs/:path+`,
              },
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "shopo.quomodothemes.website", 
            },
            {
                protocol: "https",
                hostname: "*.cloudflarestorage.com", 
            },
            {
                protocol: "https",
                hostname: "storage.googleapis.com", 
            },
            {
                protocol: "https",
                hostname: "*.syssoftintegra.com", 
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '5002',
            },
        ],
    }
}

module.exports = nextConfig
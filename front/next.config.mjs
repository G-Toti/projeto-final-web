/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lastfm.freetls.fastly.net'],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '3001',
              pathname: '/public/**',
            },
          ],
    },

};

export default nextConfig;

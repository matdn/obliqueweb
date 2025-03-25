/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1338",
            },
        ],
    },
};

export default nextConfig; // ✅ Utilisation correcte en ESM

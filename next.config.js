/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        });

        return config;
    },
    async redirects() {
        return [
            {
                source: '/resume',
                destination:
                    'https://drive.google.com/file/d/1r0uxW-LG9kLH3reVpSsGy53iCE7WhDHg/view?usp=sharing',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

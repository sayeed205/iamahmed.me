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
                    'https://drive.google.com/file/d/1DA_-5kHlf3_2dXG8_cLQmPqPk72QjFmd/view?usp=sharing',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

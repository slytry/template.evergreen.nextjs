/** @type {import('next').NextConfig} */

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const { bindClassnames } = require('./scripts/bindClassnames');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/styles/')],
		additionalData: '@use "global" as *;',
	},
	webpack(config) {
		bindClassnames(config);

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);

// @ts-check

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config.js');
const { bindClassnames } = require('./scripts/bindClassnames');

/**
 * @type {import("next").NextConfig}
 * */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/styles/')],
		additionalData: '@use "global" as *;',
	},
	i18n,
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

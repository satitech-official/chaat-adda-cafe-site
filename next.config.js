/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = 'chaat-adda-cafe-site';
const repositoryBase = `/${repositoryName}`;

const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? repositoryBase : '',
  assetPrefix: isGitHubPages ? repositoryBase : '',
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: []
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack(config) {
    config.externals = config.externals || []
    config.externals.push({
      chromadb: 'chromadb',
      '@dqbd/tiktoken': 'tiktoken',
      'cohere-ai': 'cohere',
      '@huggingface/inference': 'huggingfaceInference',
      replicate: 'replicate',
      typeorm: 'typeorm',
    })
    config.experiments = { ...config.experiments, topLevelAwait: true }
    // config.resolve.preferRelative = true

    return config
  },
}

module.exports = nextConfig

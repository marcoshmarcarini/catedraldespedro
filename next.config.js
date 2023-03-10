/** @type {import('next').NextConfig} */

const nextConfig = {
  future: {
    webpack: true
  },
  webpack: (config) =>{
    //load worker files as a urls with 'file-loader'
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    })
    return config
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['img.icons8.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**/**'
      }
    ]
  },
}

module.exports = nextConfig

import createMDX from "@next/mdx";

/**
 * Configura o suporte a arquivos .mdx
 * (páginas e componentes)
 */
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite usar .mdx como página (app router e pages router)
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // Caso use next-mdx-remote ou componentes externos
  transpilePackages: ["next-mdx-remote"],

  // Libera carregamento de imagens externas (pode ajustar o host)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },

  // Se você usa SCSS/SASS (recomendado pro Once UI)
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);

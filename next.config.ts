import createMDX from '@next/mdx';
const withMDX = createMDX({ extension: /\.mdx?$/ });
const nextConfig = { pageExtensions: ['ts','tsx','mdx'] };
export default withMDX(nextConfig);


/*
const nextConfig = {
  // allow MDX pages alongside TS/TSX
  pageExtensions: ['ts', 'tsx', 'mdx'],
};
*/

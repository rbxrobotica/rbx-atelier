// Tells an address that stays inside this repository from one that leaves it,
// with the URL parser a browser uses. Shared by the CDN script check and by
// the lint rule on module specifiers.

// Stand for the addresses a page of this repository may be opened from: a web
// server without and with TLS, and the disk. The same text can resolve to a
// file of the repository from one and to another origin from the next
// (`//host/x.js`, `https:x.js`), so every address is resolved from all three.
const PAGES = ['http://repository.invalid/page.html', 'https://repository.invalid/page.html', 'file:///repository/page.html'].map(
  (page) => new URL(page)
);
export const PAGE_COUNT = PAGES.length;

const resolutions = (address) => PAGES.filter((page) => URL.canParse(address, page)).map((page) => ({ page, url: new URL(address, page) }));
const leaves = ({ page, url }) => url.protocol !== page.protocol || url.host !== page.host;

// The URLs `address` resolves to outside the repository, at most one per
// page. Empty for a file of the repository and for an address the URL parser
// rejects, which loads nothing.
export function otherOrigins(address) {
  return resolutions(address)
    .filter(leaves)
    .map(({ url }) => url);
}

// The paths `address` resolves to inside the repository, at most one per page.
export function repositoryPaths(address) {
  return resolutions(address)
    .filter((resolution) => !leaves(resolution))
    .map(({ url }) => url.pathname);
}

// Whether `path` goes through node_modules, which ESLint leaves out. A server
// and Node decode percent-escapes, and a file system may ignore case, so the
// path is decoded and compared without case.
export function entersNodeModules(path) {
  let plain = path;
  try {
    plain = decodeURIComponent(path);
  } catch {
    // Not a valid escape: the path is taken as written.
  }
  return plain.split(/[\\/]/).some((segment) => segment.toLowerCase() === 'node_modules');
}

// Whether the lint reads the file at `path`: eslint.config.js names these four
// extensions, in lower case, outside node_modules.
export function isLinted(path) {
  return /\.(?:js|mjs|cjs|jsx)$/.test(path) && !entersNodeModules(path);
}

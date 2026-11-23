// The archive directories of this repository: copies of published design
// artifacts, kept for reference, one directory per project at the root. Each
// artifact sits in <project>/<artifact>/ beside a _backup.json that records
// where it was published, the version read and the size and SHA-256 of every
// file.
//
// Nothing in the repository runs or serves these files, and they are kept as
// they were published: bundles a build wrote, prototype pages, scripts from a
// CDN with no integrity attribute. A finding there could only be answered by
// editing the copy, which would stop it being one. So the security lint and
// the CDN script check leave these directories out, and the secret scan does
// not: it reads every commit whole.
//
// What this gives up: a file in one of these directories is not linted, and
// the scripts its pages load are not checked or scanned. Two rules keep that
// from reaching the rest of the repository:
//   - a page outside the archive may not load a script from it
//     (repository-origin.mjs: isLinted is false there);
//   - a symbolic link is reported wherever it is, the archive included
//     (cdn-scripts.mjs: walk), so no path outside the archive can name a file
//     inside it.
//
// The list is closed and names whole directories at the root. A directory
// that is not on it is linted and checked in full. Code that runs does not
// belong in one of these: the design systems in use live in design-systems/.
export const ARCHIVE_DIRECTORIES = Object.freeze([
  'flightdeck',
  'gph',
  'informat',
  'initelo',
  'iteruno',
  'kairos',
  'kulinaryos',
  'lyra',
  'merovelis',
  'olha-escola',
  'psyctl',
  'robson',
  'satwake'
]);

// Whether `path`, written from the root of the repository with or without a
// leading `./` or `/`, is in an archive directory. A server decodes
// percent-escapes and a file system may ignore case, so the first segment is
// decoded and compared without case, as entersNodeModules does.
export function isArchived(path) {
  let plain = path;
  try {
    plain = decodeURIComponent(path);
  } catch {
    // Not a valid escape: the path is taken as written.
  }
  const [first] = plain.split(/[\\/]/).filter((segment) => segment !== '' && segment !== '.');
  return first !== undefined && ARCHIVE_DIRECTORIES.includes(first.toLowerCase());
}

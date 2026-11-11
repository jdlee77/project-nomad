/**
 * Where this build of NOMAD comes from: the GitHub repository that hosts its
 * content manifests, install scripts and releases, and the container image the
 * self-updater pulls.
 *
 * This fork is retargeted from upstream (Crosstalk-Solutions/project-nomad) so
 * that a deployed box takes content and updates only from our own channel. An
 * upstream release must never replace our build through auto-update.
 *
 * These are the build-time defaults and are safe to import from the browser.
 * Server code should read the effective values through
 * `app/utils/distribution.ts`, which lets a deployment override them with the
 * NOMAD_DIST_* environment variables (for example to point a client's boxes at
 * a mirror).
 */

/** GitHub "owner/repo" of this distribution. */
export const DEFAULT_DIST_REPO = 'jdlee77/project-nomad'

/** Branch that content manifests and install scripts are read from. */
export const DEFAULT_DIST_BRANCH = 'main'

/** Container image (without tag) for the NOMAD admin/core image. Must be lowercase. */
export const DEFAULT_DIST_IMAGE_REPO = 'ghcr.io/jdlee77/project-nomad'

export function githubRepoUrl(repo: string = DEFAULT_DIST_REPO): string {
  return `https://github.com/${repo}`
}

export function githubIssuesUrl(repo: string = DEFAULT_DIST_REPO): string {
  return `${githubRepoUrl(repo)}/issues`
}

/** Browser link to a file in the repository. */
export function githubBlobUrl(
  path: string,
  repo: string = DEFAULT_DIST_REPO,
  branch: string = DEFAULT_DIST_BRANCH
): string {
  return `${githubRepoUrl(repo)}/blob/${branch}/${path.replace(/^\/+/, '')}`
}

/** Raw download URL for a file in the repository. */
export function githubRawUrl(
  path: string,
  repo: string = DEFAULT_DIST_REPO,
  branch: string = DEFAULT_DIST_BRANCH
): string {
  return `https://raw.githubusercontent.com/${repo}/refs/heads/${branch}/${path.replace(/^\/+/, '')}`
}

/** GitHub REST endpoint listing the repository's releases. */
export function githubReleasesApiUrl(repo: string = DEFAULT_DIST_REPO): string {
  return `https://api.github.com/repos/${repo}/releases`
}

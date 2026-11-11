import env from '#start/env'
import {
  DEFAULT_DIST_BRANCH,
  DEFAULT_DIST_IMAGE_REPO,
  DEFAULT_DIST_REPO,
  githubRawUrl,
  githubReleasesApiUrl,
} from '../../constants/distribution.js'

/**
 * Effective distribution settings for this server: the build-time defaults in
 * constants/distribution.ts, overridable per deployment with NOMAD_DIST_REPO,
 * NOMAD_DIST_BRANCH and NOMAD_DIST_IMAGE_REPO. Read lazily so tests and
 * scripts that never touch the network do not need the env loaded.
 */
export function distRepo(): string {
  return env.get('NOMAD_DIST_REPO')?.trim() || DEFAULT_DIST_REPO
}

export function distBranch(): string {
  return env.get('NOMAD_DIST_BRANCH')?.trim() || DEFAULT_DIST_BRANCH
}

export function distImageRepo(): string {
  return (env.get('NOMAD_DIST_IMAGE_REPO')?.trim() || DEFAULT_DIST_IMAGE_REPO).toLowerCase()
}

/** Raw URL of a file in this distribution's repository, e.g. `collections/maps.json`. */
export function distRawUrl(path: string): string {
  return githubRawUrl(path, distRepo(), distBranch())
}

/** GitHub releases API endpoint for this distribution. */
export function distReleasesApiUrl(): string {
  return githubReleasesApiUrl(distRepo())
}

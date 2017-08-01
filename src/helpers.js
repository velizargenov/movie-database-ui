export function formatOverview (overview) {
  return !overview
    ? 'N/A'
    : `${overview.substring(0, 100).trim()}...`
}

export function formatImage (imagePath) {
  return !imagePath
    ? 'https://dd6zx4ibq538k.cloudfront.net/static/images/2395/b455a76cdf770ca4eff883dbd23cbb79_440_656.jpeg'
    : `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${imagePath}`
}

export function formatTitle (title) {
  return !title
    ? 'No title yet'
    : title.substring(0, 100).trim()
}

export function formatReleaseYear (releaseYear) {
  return !releaseYear
    ? 'N/A'
    : releaseYear.split('-')[0]
}

export function formatAvarageVote (avarageVote) {
  return !avarageVote
    ? 'N/A'
    : Number((avarageVote).toFixed(2))
}

export function formatVoteCount (voteCount) {
  return !voteCount
  ? 'N/A'
  : voteCount
}

export function formatImdbLink (imdbId) {
  return !imdbId
    ? ''
    : `http://www.imdb.com/title/${imdbId}/`
}

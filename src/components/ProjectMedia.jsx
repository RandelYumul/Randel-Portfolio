import { useEffect, useRef, useState } from 'react'

// Decides WHAT to show inside the project screen, in this order:
//   1. video  → your own .mp4/.webm file, or a YouTube link
//   2. image  → your own screenshot (local file or full https:// link)
//   3. GitHub → the repo's automatic preview card (from the first github.com/owner/repo link)
//   4. placeholder with the project title
// If an image fails to load, it moves on to the next option automatically.

const isUrl = (s) => /^https?:\/\//.test(s)
// Local files need the site's base path on GitHub Pages ('/Randel-Portfolio/...')
const toSrc = (s) => (isUrl(s) ? s : import.meta.env.BASE_URL + s)

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
  return match ? match[1] : null
}

// Finds "owner/repo" in links like https://github.com/RandelYumul/SIKAPTala
export function getGitHubRepo(links = []) {
  for (const link of links) {
    const match = link.url?.match(/github\.com\/([\w.-]+)\/([\w.-]+)/)
    if (match) return `${match[1]}/${match[2].replace(/\.git$/, '')}`
  }
  return null
}

export default function ProjectMedia({ project }) {
  const { title, video, image, links } = project

  // List of images to try, best first
  const repo = getGitHubRepo(links)
  const images = []
  if (image) images.push({ src: toSrc(image), kind: 'image' })
  if (repo) images.push({ src: `https://opengraph.githubassets.com/1/${repo}`, kind: 'github' })

  // Which image in the list we are trying (goes up by 1 when one fails)
  const [tryIndex, setTryIndex] = useState(0)

  // 1. Video
  if (video) {
    const youTubeId = getYouTubeId(video)
    if (youTubeId) {
      return (
        <iframe
          className="screen-media"
          /* autoplay needs mute=1; loop needs playlist=<same id> */
          src={`https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&mute=1&loop=1&playlist=${youTubeId}&rel=0&playsinline=1`}
          title={`${title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    return <AutoPlayVideo src={toSrc(video)} poster={image ? toSrc(image) : undefined} />
  }

  // 2 + 3. Image (yours first, then GitHub's)
  const current = images[tryIndex]
  if (current) {
    return (
      <img
        src={current.src}
        alt={`Preview of ${title}`}
        className={current.kind === 'github' ? 'screen-media screen-github' : 'screen-media'}
        loading="lazy"
        onError={() => setTryIndex(tryIndex + 1)}
      />
    )
  }

  // 4. Placeholder
  return (
    <div className="screen-media screen-empty">
      <span>{title}</span>
      <small>Add an image, video, or GitHub repo link in portfolio.js</small>
    </div>
  )
}

// Video that plays by itself while it is on screen, and pauses when you scroll away
// (saves battery and data on phones).
function AutoPlayVideo({ src, poster }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Browsers only autoplay MUTED videos. React doesn't always set "muted"
    // on the real element, so we set it directly to be safe.
    video.muted = true

    const play = () => video.play().catch(() => {}) // if blocked, the controls still work

    if (!('IntersectionObserver' in window)) {
      play()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : video.pause()),
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      className="screen-media"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline /* iPhones: play inside the page, not fullscreen */
      controls
      preload="auto"
    />
  )
}

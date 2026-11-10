import { Code2, Image, MessageSquare, Sparkles, Zap } from 'lucide-react'

export default function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-middle" />
      <div className="orbit orbit-inner" />
      <div className="orbit-axis" />
      <span className="art-star star-one">✦</span>
      <span className="art-star star-two">✧</span>
      <span className="art-star star-three">✦</span>
      <span className="art-star star-four">✧</span>
      <div className="art-tile art-chat"><MessageSquare /></div>
      <div className="art-tile art-code"><Code2 /></div>
      <div className="art-tile art-image"><Image /></div>
      <div className="art-tile art-spark"><Sparkles /></div>
      <div className="art-core"><Zap fill="currentColor" strokeWidth={1.3} /></div>
    </div>
  )
}

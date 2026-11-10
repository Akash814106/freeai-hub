import { useState } from 'react'
import { ArrowUpRight, Check, Heart, Link2 } from 'lucide-react'
import { categories, pricingLabels } from '../data/tools'

export function ToolLogo({ tool }) {
  const [failed, setFailed] = useState(false)
  const initials = tool.name.split(/[^\p{L}\p{N}]+/u).filter(Boolean).slice(0, 2).map(word => word[0]).join('')
  const domain = new URL(tool.url).hostname

  return (
    <div className="tool-logo" data-category={tool.category} aria-hidden="true">
      {failed ? initials : (
        <img src={'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=64'}
          alt="" width="30" height="30" loading="lazy" referrerPolicy="no-referrer"
          onError={() => setFailed(true)} />
      )}
    </div>
  )
}

export default function ToolCard({ tool, saved, toggleFavorite, copyLink }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    if (await copyLink(tool.url)) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <article className="tool-card">
      <div className="card-top flex items-center gap-3">
        <ToolLogo tool={tool} />
        <div className="min-w-0">
          <h3>{tool.name}</h3>
          <p className="card-category">{categories[tool.category]}</p>
        </div>
        <button type="button" className={'icon-button favorite ' + (saved ? 'is-saved' : '')}
          aria-label={'Favorite ' + tool.name} aria-pressed={saved} onClick={() => toggleFavorite(tool.id)}>
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <span className={'pricing ' + tool.pricing}><span />{pricingLabels[tool.pricing]}</span>
      <p className="tool-description">{tool.description}</p>
      <ul className="use-list" aria-label="Use cases">{tool.uses.map(use => <li key={use}>{use}</li>)}</ul>
      <p className="tool-limit">{tool.limits}{tool.source && (
        <> <a href={tool.source} target="_blank" rel="noopener noreferrer" aria-label={'Free access details for ' + tool.name}>Details</a></>
      )}</p>
      <div className="card-footer">
        <a className="visit" href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={'Visit Website for ' + tool.name}>
          Visit Website <ArrowUpRight size={15} />
        </a>
        <button type="button" className="icon-button copy" title={copied ? 'Copied' : 'Copy website link'}
          aria-label={'Copy website link for ' + tool.name} onClick={copy}>
          {copied ? <Check size={17} /> : <Link2 size={17} />}
        </button>
      </div>
    </article>
  )
}

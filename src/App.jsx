import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft, ArrowRight, ChartNoAxesCombined, ChevronDown, Code2,
  FileText, Flame, Globe2, GraduationCap, Heart, Image, LayoutGrid, Mic, Moon, Music2,
  Presentation, Search, Shuffle, Sparkles, Sun, Terminal, Video, Workflow, X, Zap, MessageSquare,
  ClipboardList, PenLine, BookOpen, Layers3,
} from 'lucide-react'
import { categories, collections, pricingLabels, tools } from './data/tools'
import { filterTools, useLocalStorage } from './directory'
import ToolCard from './components/ToolCard'
import HeroArtwork from './components/HeroArtwork'

const categoryIcons = {
  chat: MessageSquare, code: Code2, image: Image, video: Video, slides: Presentation,
  resume: FileText, research: BookOpen, writing: PenLine, audio: Mic, music: Music2,
  web: Globe2, agents: Workflow, productivity: ClipboardList, students: GraduationCap,
  data: ChartNoAxesCombined, open: Terminal,
}
const collectionIcons = { featured: Sparkles, trending: Flame, students: GraduationCap, developers: Code2 }
const toolsById = new Map(tools.map(tool => [tool.id, tool]))
const defaultFilters = { query: '', category: '', pricing: '', sort: 'default' }
const quickCategories = [['chat', 'Chatbots'], ['code', 'Coding'], ['image', 'Image'], ['video', 'Video'], ['slides', 'Presentations'], ['writing', 'Writing']]

function currentPage() {
  const page = window.location.hash.slice(1)
  return ['directory', 'favorites', ...Object.keys(collections)].includes(page) ? page : 'home'
}

function Brand({ onClick }) {
  return (
    <a href="#home" className="brand" onClick={onClick}>
      <span className="brand-mark"><Zap size={18} fill="currentColor" /></span>
      <span>FreeAI<span className="brand-accent"> Hub</span></span>
    </a>
  )
}

function SearchBox({ value, onChange, inputRef, hero = false }) {
  return (
    <form className={'search-box ' + (hero ? 'hero-search' : '')} role="search" onSubmit={event => {
      event.preventDefault()
      document.getElementById('results')?.scrollIntoView({ block: 'start' })
    }}>
      <Search size={21} />
      <input type="search" ref={inputRef} aria-label="Search AI tools" placeholder="Search tools, use cases, and more..."
        value={value} onChange={event => onChange(event.target.value)} />
      {value ? <button type="button" className="icon-button" aria-label="Clear search"
        onClick={() => { onChange(''); inputRef.current?.focus() }}><X size={17} /></button> : <kbd>/</kbd>}
    </form>
  )
}

function Filters({ filters, change }) {
  return (
    <div className="filters">
      <label className="select-field"><span className="sr-only">Category</span><LayoutGrid size={15} />
        <select value={filters.category} onChange={event => change('category', event.target.value)}>
          <option value="">All categories</option>
          {Object.entries(categories).map(([key, label]) => <option value={key} key={key}>{label}</option>)}
        </select><ChevronDown size={14} />
      </label>
      <label className="select-field"><span className="sr-only">Pricing</span>
        <select value={filters.pricing} onChange={event => change('pricing', event.target.value)}>
          <option value="">All pricing</option>
          {Object.entries(pricingLabels).map(([key, label]) => <option value={key} key={key}>{label}</option>)}
        </select><ChevronDown size={14} />
      </label>
      <label className="select-field"><span className="sr-only">Sort</span>
        <select value={filters.sort} onChange={event => change('sort', event.target.value)}>
          <option value="default">Curated order</option>
          <option value="az">Name A–Z</option>
          <option value="za">Name Z–A</option>
        </select><ChevronDown size={14} />
      </label>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(currentPage)
  const [theme, setTheme] = useLocalStorage('freeaihub-theme', 'dark')
  const [favorites, setFavorites] = useLocalStorage('freeaihub-favorites', [])
  const [filters, setFilters] = useState(defaultFilters)
  const [discovery, setDiscovery] = useState(null)
  const [toast, setToast] = useState('')
  const searchInput = useRef(null)
  const randomDialog = useRef(null)
  const copyDialog = useRef(null)
  const manualLink = useRef(null)
  const toastTimer = useRef(null)
  const home = page === 'home'
  const favoritesPage = page === 'favorites'
  const collection = collections[page]
  const filtering = Boolean(filters.query.trim() || filters.category || filters.pricing || filters.sort !== 'default')
  const showResults = !home || filtering

  useEffect(() => {
    function handleHashChange() {
      setPage(currentPage())
      setFilters(defaultFilters)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark'
  }, [theme])

  useEffect(() => {
    function focusSearch(event) {
      if (event.key !== '/' || event.ctrlKey || event.altKey || event.metaKey
        || event.target.closest('input, textarea, select, [contenteditable], dialog') || document.querySelector('dialog[open]')) return
      event.preventDefault()
      searchInput.current?.focus()
    }
    window.addEventListener('keydown', focusSearch)
    return () => window.removeEventListener('keydown', focusSearch)
  }, [])

  const matches = filterTools(
    favoritesPage ? tools.filter(tool => favorites.includes(tool.id))
      : collection ? collection.ids.map(id => toolsById.get(id))
        : tools,
    categories,
    filters,
  )

  function resetHome() {
    setFilters(defaultFilters)
    window.scrollTo({ top: 0 })
  }

  function changeFilter(name, value) {
    setFilters(previous => ({ ...previous, [name]: value }))
  }

  function toggleFavorite(id) {
    setFavorites(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id])
  }

  async function copyLink(url) {
    try {
      await navigator.clipboard.writeText(url)
      setToast('Website link copied.')
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => setToast(''), 2200)
      return true
    } catch {
      manualLink.current.value = url
      copyDialog.current.showModal()
      manualLink.current.select()
      return false
    }
  }

  function surprise() {
    const verified = tools.filter(tool => tool.pricing !== 'unknown' && tool.id !== discovery?.id)
    setDiscovery(verified[Math.floor(Math.random() * verified.length)])
    if (!randomDialog.current.open) randomDialog.current.showModal()
  }

  function cards(list) {
    return (
      <div className="tools-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(tool => <ToolCard key={tool.id} tool={tool} saved={favorites.includes(tool.id)}
          toggleFavorite={toggleFavorite} copyLink={copyLink} />)}
      </div>
    )
  }

  return (
    <>
      <a href="#content" className="skip-link" onClick={event => {
        event.preventDefault()
        document.getElementById('content')?.focus()
      }}>Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand onClick={resetHome} />
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#directory" aria-current={page === 'directory' ? 'page' : undefined}><LayoutGrid size={15} /> Explore</a>
            <a href="#trending" aria-current={page === 'trending' ? 'page' : undefined}><Flame size={15} /> Trending</a>
            <a href="#favorites" aria-current={favoritesPage ? 'page' : undefined}><Heart size={15} /> Favorites {favorites.length > 0 && <span className="favorite-count">{favorites.length}</span>}</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button theme-toggle" type="button" title="Toggle color theme"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button className="button-primary surprise" type="button" onClick={surprise}><Shuffle size={16} /><span>Surprise me</span></button>
          </div>
        </div>
      </header>
      <main className="shell" id="content" tabIndex={-1}>
        {home ? (
          <>
            <section className="hero">
              <HeroArtwork />
              <div className="hero-content">
                <h1>Discover the Best<br /><span>Free AI Tools</span><br className="hero-mobile-break" /> in One Place</h1>
                <p>Find AI tools for work, study, and creative projects. Compare free plans and save the tools you want to try.</p>
                <SearchBox value={filters.query} onChange={value => changeFilter('query', value)} inputRef={searchInput} hero />
                <div className="stats">
                  <div><span className="stat-icon"><Layers3 size={17} /></span><div><strong>{tools.length}</strong><small>AI tools</small></div></div>
                  <div><span className="stat-icon"><LayoutGrid size={17} /></span><div><strong>{Object.keys(categories).length}</strong><small>Categories</small></div></div>
                  <div><span className="stat-icon"><Sparkles size={17} /></span><div><strong>{collections.featured.ids.length}</strong><small>Featured tools</small></div></div>
                </div>
              </div>
            </section>
            <section className="category-strip" aria-labelledby="browse-heading">
              <div className="category-heading"><h2 id="browse-heading">Browse by category</h2><a href="#directory">All categories <ArrowRight size={15} /></a></div>
              <div className="category-list">
                <button className={!filters.category ? 'active' : ''} type="button" aria-pressed={!filters.category}
                  onClick={() => changeFilter('category', '')}><LayoutGrid size={16} /> All tools</button>
                {quickCategories.map(([key, label]) => {
                  const Icon = categoryIcons[key]
                  return <button key={key} type="button" className={filters.category === key ? 'active' : ''}
                    aria-pressed={filters.category === key} onClick={() => changeFilter('category', key)}><Icon size={16} />{label}</button>
                })}
              </div>
            </section>
          </>
        ) : (
          <section className="page-heading">
            <a className="back-link" href="#home"><ArrowLeft size={16} /> Back to home</a>
            <h1>{favoritesPage ? 'Your Favorites' : collection?.title || 'Explore AI Tools'}</h1>
            <p>{favoritesPage ? 'The tools you save are kept here on this browser.'
              : collection?.description || 'Find tools by category, use case, and free access.'}</p>
            <SearchBox value={filters.query} onChange={value => changeFilter('query', value)} inputRef={searchInput} />
          </section>
        )}

        <section className="results" id="results" aria-label="Tool results">
          <div className="section-heading">
            <div>
              <h2>{showResults ? <LayoutGrid size={23} /> : <Sparkles size={23} />}{showResults ? 'Results' : 'Featured Tools'}</h2>
              <p aria-live="polite">{showResults ? matches.length + (matches.length === 1 ? ' tool found' : ' tools found') : collections.featured.description}</p>
            </div>
            <Filters filters={filters} change={changeFilter} />
          </div>
          {showResults ? matches.length > 0 ? cards(matches) : (
            <div className="empty-state">
              {favoritesPage && favorites.length === 0 ? <Heart size={28} /> : <Search size={28} />}
              <h3>{favoritesPage && favorites.length === 0 ? 'No favorites yet' : 'No matching tools'}</h3>
              <p>{favoritesPage && favorites.length === 0 ? 'Select the heart on any tool to save it here.' : 'Try a different search or clear your filters.'}</p>
              {favoritesPage && favorites.length === 0
                ? <a className="button-primary" href="#directory">Explore tools <ArrowRight size={16} /></a>
                : <button className="button-primary" type="button" onClick={() => setFilters(defaultFilters)}>Clear filters</button>}
            </div>
          ) : cards(collections.featured.ids.map(id => toolsById.get(id)))}
          {home && !filtering && <a className="browse-link" href="#directory">Explore all {tools.length} tools <ArrowRight size={17} /></a>}
          {home && filtering && <button className="text-button" type="button" onClick={() => setFilters(defaultFilters)}>Clear filters</button>}
        </section>

        {home && !filtering && Object.entries(collections).slice(1).map(([key, group]) => {
          const Icon = collectionIcons[key]
          return (
            <section className="collection" key={key}>
              <div className="section-heading"><div><h2><Icon size={23} />{group.title}</h2><p>{group.description}</p></div>
                <a href={'#' + key}>View collection <ArrowRight size={16} /></a></div>
              {cards(group.ids.slice(0, 3).map(id => toolsById.get(id)))}
            </section>
          )
        })}
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <Brand onClick={resetHome} />
          <span>Free plans and limits can change. Check each provider for details.</span>
          <a href="#directory">Explore tools <ArrowRight size={14} /></a>
        </div>
      </footer>
      <dialog ref={randomDialog} className="dialog" aria-labelledby="discovery-heading">
        <div className="dialog-heading"><h2 id="discovery-heading"><Sparkles size={20} /> Random discovery</h2>
          <form method="dialog"><button className="icon-button" aria-label="Close discovery"><X size={20} /></button></form></div>
        {discovery && <ToolCard key={discovery.id} tool={discovery} saved={favorites.includes(discovery.id)}
          toggleFavorite={toggleFavorite} copyLink={copyLink} />}
        <button type="button" className="button-primary" onClick={surprise}><Shuffle size={16} /> Try another</button>
      </dialog>
      <dialog ref={copyDialog} className="dialog" aria-labelledby="copy-heading">
        <div className="dialog-heading"><h2 id="copy-heading">Copy website link</h2>
          <form method="dialog"><button className="icon-button" aria-label="Close copy dialog"><X size={20} /></button></form></div>
        <p>Copy the selected URL with your browser or keyboard.</p>
        <input className="manual-link" aria-label="Official website URL" readOnly ref={manualLink} onFocus={event => event.target.select()} />
      </dialog>
      <div className={toast ? 'toast' : 'sr-only'} role="status">{toast}</div>
    </>
  )
}



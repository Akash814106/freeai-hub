import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key))
      if (Array.isArray(initialValue)) {
        return Array.isArray(saved) ? saved.filter(item => typeof item === 'string') : initialValue
      }
      return typeof saved === typeof initialValue ? saved : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Keep the current session usable when storage is unavailable.
    }
  }, [key, value])

  return [value, setValue]
}

export function filterTools(tools, categories, { query, category, pricing, sort }) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  const matches = tools.filter(tool => {
    const searchable = [tool.name, tool.description, categories[tool.category], ...tool.uses].join(' ').toLowerCase()
    return (!category || tool.category === category)
      && (!pricing || tool.pricing === pricing)
      && terms.every(term => searchable.includes(term))
  })

  if (sort === 'az') matches.sort((a, b) => a.name.localeCompare(b.name))
  if (sort === 'za') matches.sort((a, b) => b.name.localeCompare(a.name))
  return matches
}

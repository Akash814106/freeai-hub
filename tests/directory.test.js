import assert from 'node:assert/strict'
import test from 'node:test'
import { categories, collections, pricingLabels, tools } from '../src/data/tools.js'
import { filterTools } from '../src/directory.js'

const filters = { query: '', category: '', pricing: '', sort: 'default' }

test('catalog has unique entries, complete category coverage, and valid sources', () => {
  assert.ok(tools.length >= 60)
  const ids = new Set(tools.map(tool => tool.id))
  assert.equal(ids.size, tools.length)
  assert.deepEqual(new Set(tools.map(tool => tool.category)), new Set(Object.keys(categories)))

  for (const tool of tools) {
    assert.equal(new URL(tool.url).protocol, 'https:')
    assert.ok(tool.name && tool.description && tool.uses.length && tool.limits)
    assert.ok(pricingLabels[tool.pricing])
    if (tool.pricing === 'unknown') {
      assert.match(tool.limits, /Needs verification/)
    } else {
      assert.equal(new URL(tool.source).protocol, 'https:')
    }
  }

  for (const collection of Object.values(collections)) {
    assert.ok(collection.ids.every(id => ids.has(id)))
  }
})

test('search matches name, description, and use cases without regard to case', () => {
  for (const [query, id] of [['  CHATgpt  ', 'chatgpt'], ['applicant tracking', 'rezi'], ['quantized models', 'llama-cpp']]) {
    assert.ok(filterTools(tools, categories, { ...filters, query }).some(tool => tool.id === id))
  }
  assert.deepEqual(filterTools(tools, categories, { ...filters, query: 'no matching tool 12345' }), [])
})

test('pricing and category filters compose with alphabetical sorting', () => {
  for (const [sort, names] of [['az', ['Aider', 'Continue']], ['za', ['Continue', 'Aider']]]) {
    const matches = filterTools(tools, categories, { ...filters, category: 'code', pricing: 'free', sort })
    assert.deepEqual(matches.map(tool => tool.name), names)
  }
})

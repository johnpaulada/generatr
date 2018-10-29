// @flow

type Grammar = { [string]: string | string[] }

const Generatr = (grammar: Grammar): { generate: string => string } => ({
  generate: (key: string): string => {
    return resolve(key, grammar)
  }
})

function resolve(key: string, grammar: Grammar): string {
  const clause = grammar[key]
  const clauseIsArray = Array.isArray(clause)

  if (clauseIsArray) {
    const selected = pluck(clause)

    return resolveString(selected, grammar)
  } else if (typeof clause === "string") {
    return resolveString(clause, grammar)
  }

  return ""
}

function resolveString(clause: string, grammar: Grammar): string {
  const templates = findTemplates(clause)
  const noTemplates = templates.length === 0

  if (noTemplates) return clause

  const resolvedTemplates = templates.map(resolveTemplates(grammar))

  const resolved = templates.reduce((currentClause, template, index) => {
    return replaceOne(currentClause, template, resolvedTemplates[index])
  }, clause)

  return resolved
}

function findTemplates(clause) {
  const matches = clause.match(/\{\{\s*\w+\s*\}\}/g)

  return matches || []
}

function replaceOne(target, old, replacement) {
  const oldLocation = target.indexOf(old)
  const pretext = target.substring(0, oldLocation)
  const posttext = target.substring(oldLocation + old.length)

  return `${pretext}${replacement}${posttext}`
}

function resolveTemplates(grammar) {
  return template => {
    const key = template
      .replace("{{", "")
      .replace("}}", "")
      .trim()

    return resolve(key, grammar)
  }
}

function pluck(list) {
  const selectedIndex = getRandomIntInclusive(0, list.length - 1)
  const selectedItem = list[selectedIndex]

  return selectedItem
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Generatr

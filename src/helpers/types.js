export const isArray = val => Array.isArray( val )

export const isEvenIndex = idx => idx % 2 ===0 && true

export const isObject = val =>
    typeof val === 'object' && val !== null && !isArray( val )
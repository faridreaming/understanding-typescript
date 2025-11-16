let names = [
  [
    ['Farid', 'Pumbah', 'Svelte', 'Calli'],
    ['Farid', 'Pumbah', 'Svelte', 'Calli'],
  ],
  [
    ['Farid', 'Pumbah', 'Svelte', 'Calli'],
    ['Farid', 'Pumbah', 'Svelte', 'Calli'],
  ],
]

let copyOfNames = [
  [[[[[[[[[[[[['Farid', 'Pumbah', 'Svelte', 'Calli']]]]]]]]]]]]],
]

type DataStore<T> = {
  [key: string]: T
}

let store: DataStore<string> = {
  biji: 'mewing',
}

function merge<T1, T2>(a: T1, b: T2) {
  return [a, b]
}

const ids = merge(1, 'mewing :v')

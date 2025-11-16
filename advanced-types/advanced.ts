type DataStore = {
  [prop: string]: number | boolean | string
}

type DataStore2 = Record<string, number | boolean | string>

let store: DataStore = {}

store.id = 1
store.name = 'Data Mahasiswa'
store.isOpen = false

let nama = 'farid' as const
let roles: readonly ['admin', 'user', 'guest'] = ['admin', 'user', 'guest']
// roles.push('pumbah')
let firstRole = roles[0]

const dataEntries = {
  entry1: 12,
  entry2: -12,
} as const satisfies Record<string, number>

let entry1 = dataEntries.entry1

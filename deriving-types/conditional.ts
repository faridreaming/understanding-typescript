// let nama = 'farid' as const
// let nama2 = 'palid' as const
// type Farid = typeof nama | typeof nama2

// let figma: Farid = 'palid'

// type NamaArray = Farid[]
// type ElementType<T extends any[]> = T[number]
// type Contoh = ElementType<NamaArray>

type StringArray = string[]
type GetElementType<T> = T extends any[] ? T[number] : never
type Gtwu = GetElementType<StringArray>

type FullnamePerson = { firstName: string; lastName: string }
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>
  }

  throw new Error('No first name and / or last name found.')
}

const name = getFullName({ firstName: 'Farid', lastName: 'Keren' })

console.log(name)

type ReadPermissons = 'no-read' | 'read'
type WritePermissions = 'no-write' | 'write'

type FilePermissions = `${ReadPermissons}-${WritePermissions}`

type DataFile = {
  data: string
  permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Changed`

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void
}

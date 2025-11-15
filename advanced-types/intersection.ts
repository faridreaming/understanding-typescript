interface FileData {
  path: string
  content: string
}

interface DatabaseData {
  connectionUrl: string
  credentials: string
}

interface Status {
  isOpen: boolean
  errorMessage?: string
}

interface AccessedFileData extends FileData, DatabaseData {}
interface AccessedDatabaseData extends FileData, DatabaseData {}

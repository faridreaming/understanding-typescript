type FileSource = { type: 'file'; path: string }
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
}

type DBSource = { type: 'db'; connectionUrl: string }
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
}

type Source = FileSource | DBSource

function loadData(source: Source) {
  if (source.type === 'file') {
    console.log(source.path)
    return
  }
  console.log(source.connectionUrl)
}

loadData(dbSource)

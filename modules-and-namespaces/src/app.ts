import { ProjectInput } from './components/project-input.js'
import { ProjectList } from './components/project-list.js'
import { projectState } from './state/project.js'

new ProjectInput()
new ProjectList('active')
new ProjectList('finished')
projectState.loadFromLocalStorage()

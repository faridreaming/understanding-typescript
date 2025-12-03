import { Project, ProjectStatus } from '../models/project.js'

type Listener<T> = (items: T[]) => void

class State<T> {
  protected listeners: Listener<T>[] = []

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn)
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = []
  private static instance: ProjectState

  private constructor() {
    super()
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new ProjectState()
    return this.instance
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      crypto.randomUUID(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    )
    this.projects.push(newProject)
    this.updateListeners()
    this.saveToLocalStorage()
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId)
    if (project && project.status !== newStatus) {
      project.status = newStatus
      this.updateListeners()
      this.saveToLocalStorage()
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn([...this.projects])
    }
  }

  private saveToLocalStorage() {
    const stringifyProjects = JSON.stringify(this.projects)
    localStorage.setItem('projects', stringifyProjects)
  }

  public loadFromLocalStorage() {
    const loadedProjects = localStorage.getItem('projects')
    if (!loadedProjects) return
    const parsedProjects: {
      id: string
      title: string
      description: string
      people: number
      status: ProjectStatus
    }[] = JSON.parse(loadedProjects)
    for (const prj of parsedProjects) {
      const project = new Project(
        prj.id,
        prj.title,
        prj.description,
        prj.people,
        prj.status
      )
      this.projects.push(project)
    }
    this.updateListeners()
  }
}

export const projectState = ProjectState.getInstance()

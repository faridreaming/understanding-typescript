import { autobind } from '../decorators/autobind.js'
import { Dragable } from '../models/drag-and-drop.js'
import { Project } from '../models/project.js'
import { Component } from './base-component.js'

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Dragable
{
  constructor(hostListId: string, private project: Project) {
    super('single-project', hostListId, false, project.id)

    this.configure()
    this.renderContent()
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id)
    event.dataTransfer!.effectAllowed = 'move'
  }

  dragEndHandler(_: DragEvent) {
    console.log('DragEnd')
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  renderContent() {
    const titleElement = document.createElement('h2')
    const numOfPeopleElement = document.createElement('h3')
    const descriptionElement = document.createElement('p')

    titleElement.textContent = this.project.title
    numOfPeopleElement.textContent = this.peopleText
    descriptionElement.textContent = this.project.description

    this.element.appendChild(titleElement)
    this.element.appendChild(numOfPeopleElement)
    this.element.appendChild(descriptionElement)
  }

  get peopleText() {
    const numOfPeople = this.project.people
    return `${numOfPeople} ${numOfPeople > 1 ? 'people' : 'person'} assigned`
  }
}

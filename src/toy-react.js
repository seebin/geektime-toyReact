
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor(type) {
    this.props = Object.create(null);
    this.children = []
    this._root = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component)
  }

  get root(){
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

export function createElement(tagName, attributes, ...children) {
  let node;
  if (typeof tagName === 'string') {
    node = new ElementWrapper(tagName);
  } else {
    node = new tagName
  }

  for (let p in attributes) {
    node.setAttribute(p, attributes[p])
  }
  const insertChildren = (children)=>{
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (child instanceof Array) {
        insertChildren(child)
      } else {
        node.appendChild(child)
      }
    
    }
  }
  insertChildren(children)

  return node
}

export function render(component, parentElement) {
  console.log(component)
  parentElement.appendChild(component.root)
}
import {createElement, Component, render} from './toy-react'


class MyComponent extends Component{
  render(){
    return <div>
      <div>123</div>
      {this.children}
    </div>
  }
}


let a  = <MyComponent id="a" class="b"><span>123</span></MyComponent>;
render(a, document.body);
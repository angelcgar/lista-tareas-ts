import { render } from 'preact'
import { ToDoApp } from './components/ToDoApp'
import './index.css'

render(<ToDoApp />, document.getElementById('app')!)

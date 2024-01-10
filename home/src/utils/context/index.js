import { createContext } from 'react'

const ThemeContext = createContext({color: 'red'})
const TextContext = createContext({text: 'context'})
export {
  ThemeContext,
  TextContext
}
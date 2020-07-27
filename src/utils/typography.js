import Typography from 'typography'
import doelger from 'typography-theme-doelger'

doelger.overrideThemeStyles = () => ({
  a: {
    color: '#000',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #ccc 1px, #ccc 2px, rgba(0, 0, 0, 0) 2px)'
  }
})
const typography = new Typography(doelger)


export const { scale, rhythm, options } = typography
export default typography

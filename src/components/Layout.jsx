export default function Layout(props) {

  const { children } = props

  const header = (
      <header>
          <h1 className="text-gradient">The Brogram</h1>
          <p><strong>The 30 Simple Workouts Program</strong></p>
      </header>
  )

  const footer = (
      <footer>
          <p>Built by <a href="https://www.anvitdoestech.com" target="_blank">Anvit</a><br /></p>
      </footer>
  )

  //https://www,YOUR_USERNAME.netlify.app

  return (
      <>
          {header}
          {children}
          {footer}
      </>
  )
}
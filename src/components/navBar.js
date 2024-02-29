function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">projectr</div>
      </div>
      <div className="nav-right">
        <div className="buttons">
          <a href="/">Home</a>
          <a href="/user" style={{ display: 'none' }}>
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

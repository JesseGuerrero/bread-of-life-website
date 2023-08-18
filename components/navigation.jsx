export default function Navigation() {
  return (<>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-xs-100 w-sm-100 w-md-75 w-xl-50 mx-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bread Of Life</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">d
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/events">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://give.tithe.ly/?formId=605b93dd-b674-4476-b09c-ed8e87a220d3">Tithe</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="https://www.google.com/maps?q=317+W+Mitchell+St,+San+Antonio,+TX+78204">317 W Mitchell St, San Antonio, TX 78204</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>)
}
import "./HeaderStyles.css";


function Header({setCollapse}) {
  return (
    <header>
        <script src="https://kit.fontawesome.com/6a97ec8d8a.js" crossOrigin="anonymous"></script>
        <button className={"navbar-toggler collapsed"} onClick={()=>setCollapse(c=>!c)} type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-expanded='false'>
            <div className="icon"></div>
        </button>
        <img alt="Logo" className="logo" src="assets/images/Logo.png" />
        <ul className="social-icons" style={{fontSize:'2rem'}}>
            <li><a href="https://www.instagram.com/matthewdowning/?igshid=NGVhN2U2NjQ0Yg%3D%3D"><i className="fa-brands fa-instagram" style={{color:'var(--grey)'}}></i></a></li>
        </ul>
    </header>
  );
}

export default Header;

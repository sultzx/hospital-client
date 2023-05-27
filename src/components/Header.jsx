
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap"
import { Hospital } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../redux/slices/user";
import { Navigate } from "react-router-dom";

const Header = () => {

  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.user);

  const onClickLogout = () => {
    if (window.confirm("Жүйеден шығасыз ба?")) dispatch(logout());
    window.localStorage.removeItem("token");
  };

  let status = []

  console.log(data && data.role)

  if (data && data.role) {
    switch (data.role) {
      case 'admin': status.push ('Админ')
        break
      case 'patient': status.push('Пациент') 
        break
      case 'doctor': status.push('Дәрігер')
    }
  }

  console.log(status && status)

  isAuth && (<Navigate to={'/'} />)

  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-lg" fixed="top" style={{
      fontWeight: '600',
      fontSize: '18px',
      backgroundColor: 'white',
      color: '#1D7B72',
      height: '80px'
    }}>
      
      <Container>
        <Navbar.Brand href="/" style={{
          fontSize: '32px',
          color: '#FF9F1C'
        }}>
          <Hospital color="#FF9F1C" size={'32px'} />  Eмхана

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{
          backgroundColor: 'white'
        }}>
          <Nav className="me-auto" >
            <Nav.Link href="/profile">Профиль</Nav.Link>
            <Nav.Link href="/#services">Қызметтер</Nav.Link>
            <Nav.Link href="/#news">Жаңалықтар</Nav.Link>
            <Nav.Link href="/#about">Біз туралы</Nav.Link>
            <Nav.Link href="/#contact">Байланыс</Nav.Link>
            {data?.role === 'admin' &&
              <Nav.Link href="/admin">Админ панелі</Nav.Link>}
          </Nav>
          {
            isAuth ?
              <Nav>
                <Nav.Link>{data?.email} ({status != '' && status})</Nav.Link>
                <Nav.Link
                  className="signup-btn"
                  style={{
                    padding: 'auto 20px',
                    margin: 'auto 18px'
                  }}
                  eventKey={2} onClick={() => {
                    onClickLogout()
                  }}>
                  <div style={{ margin: 'auto 14px' }}>Шығу</div>
                </Nav.Link>
              </Nav>
              :
              <Nav>
                <Nav.Link href="/login">Кіру</Nav.Link>
                <Nav.Link
                  className="signup-btn"
                  eventKey={2} href="/switch-to-registration">
                  Тіркелу
                </Nav.Link>
              </Nav>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
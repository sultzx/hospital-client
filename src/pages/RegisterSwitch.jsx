import { Container, Row, Col, Button } from "react-bootstrap"
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, EnvelopeAtFill, FilePerson, HouseHeartFill, PencilFill, PersonFillGear, PersonGear, PersonVcard, PinMapFill } from "react-bootstrap-icons"
import LoginSwitch from "./Login"
import { Navigate, Link } from "react-router-dom"

const RegisterSwitch = () => {

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Жүйеге тіркелу</h3>
                    <Col md={12}><br /></Col>
                    <Col md={4} >
                        <Link to={'/admin/registration'} style={{ textDecoration: 'none' }}>
                            <div className="main-page-switch-to-card text-center">
                                <br />
                                <h4 style={{ margin: '12px auto 2px auto' }}>Админ үшін</h4>
                                <PersonGear size={'64'} className="icon" style={{ margin: '24px auto' }} />
                                <p style={{ margin: '0' }}>Админ ретінде сіз біздің аурухананың тиімді және тиімді жұмыс істеуін қамтамасыз ету, біздің пациенттер мен қызметкерлер үшін денсаулық сақтау тәжірибесін жақсарту үшін маңызды жауапкершілікке ие боласыз.</p>
                                <br />
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to={'/doctor/registration'} style={{ textDecoration: 'none' }}>
                            <div className="main-page-switch-to-card text-center">
                                <br />
                                <h4 style={{ margin: '12px auto 2px auto' }}>Дәрігер үшін</h4>
                                <FilePerson size={'64'} className="icon" style={{ margin: '24px auto' }} />
                                <p style={{ margin: '0' }}>Сізді біздің құрметті денсаулық сақтау ұжымының бір бөлігі ретінде көрсету мақтаныш. Мұнда тіркеліп, кәсіби профиліңізді жасай аласыз, қолжетімділігіңізбен бөлісуге және қызмет жазбаларыңызды сақтайды.</p>
                                <br />
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to={'/patient/registration'} style={{ textDecoration: 'none' }}>
                            <div className="main-page-switch-to-card text-center">
                                <br />
                                <h4 style={{ margin: '12px auto 2px auto' }}>Науқас үшін</h4>
                                <PersonVcard size={'64'} className="icon" style={{ margin: '24px auto' }} />
                                <p style={{ margin: '0' }}>Сіздің әл-ауқатыңыз біздің басты басымдылығымыз болып табылады және біз сізге ең жақсы денсаулық сақтау қызметтерін ұсынуға дайынбыз. Медициналық жазбаларыңызға қол жеткізеді.</p>
                                <br />
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default RegisterSwitch

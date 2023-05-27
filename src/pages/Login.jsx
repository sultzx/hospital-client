import { Container, Row, Col, Button } from "react-bootstrap"
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, DoorOpen, EnvelopeAtFill, FilePerson, HouseHeartFill, PencilFill, PersonFillGear, PersonGear, PersonVcard, PinMapFill } from "react-bootstrap-icons"
import { Navigate, Link } from "react-router-dom"
import { fetchLogin, selectIsAuth } from "../redux/slices/user"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

const Login = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth);

    const [email, setEmail] = React.useState()

    const [password, setPassword] = React.useState()

    const login = async () => {
        let data = ''
        if ((email && email) && (password && password)) {
           data =  await dispatch(fetchLogin({
                email: email && email,
                password: password && password,
            }))
            alert(data?.payload?.message)

            if ("token" in data.payload) {
                window.localStorage.setItem("token", data.payload.token);
            }
            
        } else {
            alert('Мәліметтерті толық енгізіңіз')
        }
    }

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    {/* <h3 className="con-heading">Жүйеге кіру</h3>
                    <Col className="col-12"><br /></Col> */}
                    <Col md={4}></Col>
                    <Col md={4}>
                        <div className="main-page-reg-card text-start">
                            <h4 style={{ margin: '12px auto 2px auto' }} className="text-start">Жүйеге кіру <DoorOpen size={'28'} className="icon" style={{ margin: '24px auto' }} /></h4>
                            {/* ////////////BEGIN */}
                            <label>Пошта</label>
                            <input type="text"  onChange={(e) => setEmail(e.target.value)}  className="form-control" />
                            <br />
                            <label>Құпиясөз</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}  className="form-control" />
                            <br />

                            <div className="text-end">
                                <Button variant="primary" onClick={login} className="reg-page-submin-btn">Тіркелу</Button>
                            </div>
                            {/* ////////////END */}
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default Login
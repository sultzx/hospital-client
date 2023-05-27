import { Container, Row, Col, Button } from "react-bootstrap"
import main from '../images/main.png'
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, EnvelopeAtFill, HouseHeartFill, PencilFill, Person, PinMapFill } from "react-bootstrap-icons"
import { fetchAuthMe, fetchUpdate, selectIsAuth } from "../redux/slices/user"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from '../axios.js'
import * as fetches from '../redux/slices/user.js'
import { fetchAttachment } from "../redux/slices/attachment"
import { fetchAppointment } from "../redux/slices/appointment"

const Laboratory = () => {

    return (<>
              <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Зерт.кабинет <CardChecklist className="icon" size={'42'} style={{ margin: '12px auto 12px auto' }} /></h3>
                    {/* <Col className="col-12"><br /></Col> */}
                    <Col md={12}>
                        <div className="main-page-reg-card text-start">
                            <h5 style={{ margin: '12px auto 2px auto', color: '#FEA020' }} className="text-start">Жеке ақпарат</h5>
                                <br />
                            {/* ////////////BEGIN */}
                            <Row>
                                <Col md={12}>
                                    <Row>
                                      
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Биохимия</h5></Col><Col md={6} className="text-end "><h5>7 980 KZT</h5></Col>
                                        <hr  />
                                        <Col md={6} className="text-start "><h5>Диагностика</h5></Col><Col md={6} className="text-end "><h5>19 800 KZT</h5></Col>
                                        <hr />  
                                        <Col md={6} className="text-start "><h5>Иммунология</h5></Col><Col md={6} className="text-end "><h5>20 000 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Паразитология</h5></Col><Col md={6} className="text-end "><h5>1 000 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Хроматография</h5></Col><Col md={6} className="text-end "><h5>29 800 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Гематология</h5></Col><Col md={6} className="text-end "><h5>720 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Гормондар</h5></Col><Col md={6} className="text-end " ><h5>3 080 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Аллергендер</h5></Col><Col md={6} className="text-end "><h5>7 500 KZT</h5></Col>
                                        <hr />
                                        <Col md={6} className="text-start "><h5>Генетика</h5></Col><Col md={6} className="text-end "><h5>97 260 KZT</h5></Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* ////////////END */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default Laboratory
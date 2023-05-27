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
import { fetchAttachment } from "../redux/slices/attachment"

const Attachment = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth);

    const { data } = useSelector((state) => state.user);

    const [fullname, setFullname] = React.useState(data?.personal?.fullname)

    const [phone, setPhone] = React.useState()

    const [birthday, setBirthday] = React.useState()

    const [address, setAddress] = React.useState()

    const attachment = async () => {
        const data = await dispatch(fetchAttachment())
        alert(data?.payload?.message)
    }

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Емханаға тіркелу <BuildingFillAdd className="icon" size={'42'} style={{ margin: '12px auto 12px auto' }} /></h3>
                    {/* <Col className="col-12"><br /></Col> */}
                    <Col md={12}>
                        <div className="main-page-reg-card text-start">
                            <h5 style={{ margin: '12px auto 2px auto', color: '#FEA020' }} className="text-start">Жеке ақпарат</h5>
                            <hr />
                            {/* ////////////BEGIN */}
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col md={6}>
                                            <label>Толық аты-жөніңіз</label>
                                            <input type="text" placeholder={data?.personal?.fullname} onChange={e => setFullname(e.target.value)} className="form-control" />
                                            <br />
                                        </Col>
                                        <Col md={6}>
                                            <label>Телефон</label>
                                            <input type="text" value={phone} placeholder={data?.personal?.phone} onChange={e => setPhone(e.target.value)}  className="form-control" />
                                            <br />
                                        </Col>
                                        <Col md={6}>
                                            <label>Жасыңыз</label>
                                            <input type="date" defaultValue={data?.personal?.birthday} onChange={e => setBirthday(e.target.value)} className="form-control" />
                                            <br />
                                        </Col>
                                        <Col md={6}>
                                            <label>Мекенжайыңыз</label>
                                            <input type="text" value={address} placeholder={data?.personal?.address} onChange={e => setAddress(e.target.value)} className="form-control" />
                                            <br />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <div className="text-end">
                                <Button 
                                    variant="primary" 
                                    onClick={() => attachment()} 
                                    className="reg-page-submin-btn">Сұраныс жіберу</Button>
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

export default Attachment
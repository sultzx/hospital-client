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
import { fetchAllAttachments, fetchAttachment, fetchSetAttachStatus } from "../redux/slices/attachment"

const AllAttachments = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth);

    const { data } = useSelector((state) => state.user);

    const { items } = useSelector((state) => state.attachment)

    React.useEffect(() => {
        dispatch(fetchAllAttachments())
    }, [])

    const setAttachStatus = async (id) => {
        const data = await dispatch(fetchSetAttachStatus({
            attachmentId: id
        }))
        alert(data?.payload?.message)
    }

    console.log(items && items)

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Емханаға тіркелу <BuildingFillAdd className="icon" size={'42'} style={{ margin: '12px auto 12px auto' }} /></h3>
                    {/* <Col className="col-12"><br /></Col> */}
                    <Col md={12}>
                        <div className="main-page-reg-card text-start">
                            <h5 style={{ margin: '12px auto 2px auto', color: '#FEA020' }} className="text-start">Пациентті емханаға тіркеу</h5>
                            <br />
                            {/* ////////////BEGIN */}
                            <Row style={{
                                backgroundColor: '#FFAD3E',
                                margin: '0',
                                border: '1px solid',
                                borderBottom: 'none'
                            }}>
                                <Col md={1} className="d-flex align-items-center justify-content-start thead">№</Col>
                                <Col md={3} className="d-flex align-items-center justify-content-center thead">Пациенттің аты-жөні</Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center thead">Телефоны</Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center thead">Туған күні</Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center thead">Мекенжайы</Col>
                                <Col md={2} className="d-flex align-items-center justify-content-end thead">Опция</Col>
                            </Row>

                            {
                                items?.map((item, i) => (
                                    <Row style={{
                                        backgroundColor: 'white',
                                        margin: '0',
                                        color: 'black',
                                        border: '1px solid',
                                        borderTop: 'none'
                                    }}>
                                        <Col md={1} className="d-flex align-items-center justify-content-start thead" style={{color: 'black'}}>{i + 1}</Col>
                                        <Col md={3} className="d-flex align-items-center justify-content-center thead" style={{color: 'black'}}>{item?.patient?.personal?.fullname}</Col>
                                        <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{color: 'black'}}>{item?.patient?.personal?.phone}</Col>
                                        <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{color: 'black'}}>{item?.patient?.personal?.birthday}</Col>
                                        <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{color: 'black'}}>{item?.patient?.personal?.address}</Col>
                                        <Col md={2} className="d-flex align-items-center justify-content-end thead" style={{color: 'black'}}>
                                            <button className="btn btn-primary" disabled={item?.status == 'attached'} onClick={() => setAttachStatus(item?._id)} style={{color: 'white'}}>{item?.status == 'attached' ? `Тіркелген` : `Тіркеу`}</button>
                                        </Col>
                                    </Row>
                                ))
                            }

                            <div className="text-end">
                                {/* <br />
                                <Button
                                    variant="primary"
                                    onClick={() => setAttachStatus()}
                                    className="reg-page-submin-btn">Сұраныс жіберу</Button> */}
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

export default AllAttachments
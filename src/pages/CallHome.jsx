import { Container, Row, Col, Button } from "react-bootstrap"
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, EnvelopeAtFill, HouseHeartFill, PencilFill, Person, Phone, PhoneFill, PinMapFill, TelephoneOutbound } from "react-bootstrap-icons"
import { fetchAuthMe, fetchUpdate, selectIsAuth } from "../redux/slices/user"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from '../axios.js'
import * as fetches from '../redux/slices/user.js'
import { fetchCallhome } from "../redux/slices/callhome"

const CallHome = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetches.fetchAllUsers())
    }, [dispatch])

    const { all_users, data } = useSelector(state => state.user)
    const [doctor, setDoctor] = React.useState()

    const doctorsOptions = [{
        value: 0,
        text: '--Дәрігерді таңдаңыз--',
        id: 0
    }]

    all_users?.items?.forEach(((user, i) => {
        if (user?.role == 'doctor') {
            doctorsOptions.push({
                value: i + 1,
                text: `${user?.personal?.fullname} - ${user?.specialization}`,
                id: user?._id
            })
        }
    }))

    console.log(doctor && doctor)

    const callHome = async () => {
        const data = await dispatch(fetchCallhome({ doctorId: doctor && doctor }))
        alert(data?.payload?.message)
    }

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Дәрігерді үйге шақыру <HouseHeartFill className="icon" size={'42'} style={{ margin: '12px auto 12px auto' }} /></h3>
                    {/* <Col className="col-12"><br /></Col> */}

                    <Col md={12}>
                        <div className="main-page-reg-card text-start">
                            <h5 style={{ margin: '12px auto 2px auto', color: '#FEA020' }} className="text-start">Жеке ақпарат</h5>
                            <hr />
                            {/* ////////////BEGIN */}

                            {data?.role == 'patient' ?
                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={6}>
                                                <label>Толық аты-жөніңіз</label>
                                                <h5>{data?.personal?.fullname}</h5>
                                                <br />
                                            </Col>
                                            <Col md={6}>
                                                <label>Телефон</label>
                                                <h5>{data?.personal?.phone}</h5>
                                                <br />
                                            </Col>
                                            <Col md={6}>
                                                <label>Мекенжайыңыз</label>
                                                <h5>{data?.personal?.address}</h5>
                                                <br />
                                            </Col>
                                            <Col md={6}>
                                                <label>Дәрігерді таңдаңыз</label>
                                                <select
                                                    selected={doctor}
                                                    onChange={e => setDoctor(doctorsOptions[e.target.value]?.id)}
                                                    className="form-control select-input"
                                                    style={{
                                                        backgroundColor: 'white'
                                                    }}
                                                >
                                                    {doctorsOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))}
                                                </select>                                            <br />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                :

                                <h5>Дәрігерді үйге шақыру үшін пациент ретінде тіркелуіңіз қажет</h5>
                            }
                            <div className="text-end">
                                <Button
                                    disabled={data?.role != 'patient'}
                                    variant="primary"
                                    style={{ backgroundColor: 'transparent', marginRight: '4px' }}
                                    onClick={() => window.location.assign(`tel:${doctor?.personal?.phone}`)}
                                    className=""><TelephoneOutbound /> Хабарласу</Button>
                                <Button
                                    disabled={data?.role != 'patient'}
                                    variant="primary"
                                    onClick={() => callHome()}
                                    className="reg-page-submin-btn">Үйге шақыру</Button>
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

export default CallHome
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

const Appointment = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth);

    const { all_users, data } = useSelector(state => state.user)

    const [day, setDay] = React.useState()

    const [time, setTime] = React.useState()

    const [phone, setPhone] = React.useState()

    const [birthday, setBirthday] = React.useState()

    const [address, setAddress] = React.useState()

    React.useEffect(() => {
        dispatch(fetches.fetchAllUsers())
    }, [dispatch])

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

    const currentDoctor = []

    all_users?.items?.forEach((user, i) => {
        if (user?._id == (doctor && doctor)) {
            currentDoctor.push(user)
        }
    })

    console.log(currentDoctor )

    const appointment = async () => {
        const data = await dispatch(fetchAppointment({
            day: day && day,
            time: time && time,
            doctorId: doctor && doctor
        }))
        alert(data?.payload?.message)
    }

    console.log({
        day: day && day,
        time: time && time,
        doctorId: doctor && doctor
    })

    return (<>
        <Container fluid className="main-page-news-con d-flex column align-items-center">
            <Container>
                <Row>
                    <h3 className="con-heading">Кездесуге жазылу <PencilFill className="icon" size={'42'} style={{ margin: '12px auto 12px auto' }} /></h3>
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
                                            <label>Күн</label>
                                            <input type="date" value={day} onChange={e => setDay(e.target.value)} className="form-control" />
                                            <br />
                                        </Col>
                                        <Col md={6}>
                                            <label>Сағат</label>
                                            <TimePicker 
                                                className={'form-control'} 
                                                minTime={currentDoctor?.working_hours?.begin} 
                                                maxTime={currentDoctor?.working_hours?.end}
                                                value={time} 
                                                locale={'kk-KZ'} 
                                            onChange={setTime}/>
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

                            <div className="text-end">
                                <Button 
                                    variant="primary" 
                                    onClick={() => appointment()} 
                                    className="reg-page-submin-btn">Кездесуге жазылу</Button>
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

export default Appointment
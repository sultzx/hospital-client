import { Container, Row, Col, Button } from "react-bootstrap"
import main from '../images/main.png'
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, EnvelopeAtFill, HouseHeartFill, PencilFill, Person, PinMapFill, TelephoneOutbound } from "react-bootstrap-icons"
import { fetchAuthMe, fetchUpdate, selectIsAuth } from "../redux/slices/user"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from '../axios.js'
import { fetchAllCalls } from "../redux/slices/callhome"
import { fetchAllAppointments, fetchSetAppointStatus } from "../redux/slices/appointment"

const Profile = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth);

    const { data } = useSelector((state) => state.user);
    const { items } = useSelector((state) => state.callhome);
    const appointments = useSelector(state => state.appointment.items)

    const [fullname, setFullname] = React.useState()

    const [phone, setPhone] = React.useState()

    const [birthday, setBirthday] = React.useState()

    const [address, setAddress] = React.useState()

    const doctorOptions = [
        { value: "0", text: "-- Қызметтер --" },
        { value: "1", text: "АЛЛЕРГОЛОГ" },
        { value: "2", text: "РЕАНИМАТОЛОГ" },
        { value: "3", text: "КАРДИОЛОГ" },
        { value: "4", text: "ОНКОЛОГ" },
        { value: "5", text: "РЕНТГЕНОЛОГ" },
        { value: "6", text: "ТРАВМАТОЛОГ" },
        { value: "7", text: "ПСИХИАТР" },
        { value: "8", text: "ТЕРАПЕВТ" },
        { value: "9", text: "ПЕДИАТР" },
        { value: "10", text: "НЕВРОПАТОЛОГ" },
        { value: "11", text: "СТОМАТОЛОГ" },
    ];

    const [specialization, setSpecialization] = React.useState(
        doctorOptions.forEach((option, i) => {
            if (option.text == data?.gender) {
                return doctorOptions[i].value
            }
        })
    )

    const [whbegin, setWhbegin] = React.useState()

    const [whend, setWhend] = React.useState()

    const [height, setHeight] = React.useState()

    const [weight, setWeight] = React.useState()

    console.log(specialization && specialization)

    const update = async () => {
        let data = await dispatch(fetchUpdate({
            fullname: fullname && fullname,
            phone: phone && phone,
            birthday: birthday && birthday,
            address: address && address,
            height: height && height,
            weight: weight && weight,
            specialization: specialization && specialization,
            whbegin: whbegin && whbegin,
            whend: whend && whend,
        }))
        alert(data?.payload?.message)
        dispatch(fetchAuthMe());
    }

    const handleAvatar = async (event) => {
        try {
            let file = event.target.files[0]
            const formData = new FormData();
            formData.append("image", file);
            const { data } = await axios.post("/api/upload/avatar", formData);
            console.log(data.url);
        } catch (error) {
            console.warn(error);
            alert("Аватар дұрыс көшірілген жоқ");
        }
        dispatch(fetchAuthMe());
    };

    React.useEffect(() => {
        dispatch(fetchAllCalls())
        dispatch(fetchAllAppointments())
    }, [])

    const setAppointment = async (id) => {
        const data = await dispatch(fetchSetAppointStatus({
            appointmentId: id && id
        }))

        alert(data?.payload?.message)
    }

    console.log('appointments', appointments && appointments, data && data)

    return (<>
        <Container fluid className=" d-flex column align-items-center">
            <Container>
                <Row>

                    <h3 className="con-heading" style={{ marginTop: '100px' }}>Жеке профиль</h3>
                    {/* <Col className="col-12"><br /></Col> */}
                    <Col md={12}>
                        <div className="main-page-reg-card text-start">
                            <h4 style={{ margin: '12px auto 2px auto' }} className="text-start">{data?.personal?.fullname ? data?.personal?.fullname : 'Аты-жөніңіз'}<Person size={'28'} className="icon" style={{ margin: '24px auto' }} /></h4>
                            {/* ////////////BEGIN */}
                            <Row>
                                <Col md={3}>
                                    <div className="d-flex">
                                        <img src={data?.avatarUrl ? `http://localhost:5000${data?.avatarUrl}` : "https://w7.pngwing.com/pngs/587/662/png-transparent-black-and-white-frame-white-border-frame-angle-rectangle-symmetry-thumbnail.png"}
                                            className="flex-fill img-fluid" style={{
                                                width: 'auto',
                                                height: '400px',
                                                border: '1px solid #FF9F1C'
                                            }} alt="" />
                                    </div>
                                    <input className="form-control" onChange={handleAvatar} type="file" style={{ borderRadius: '1px', borderTop: 'none' }} />
                                </Col>
                                <Col md={9}>
                                    <Row>
                                        <Col md={6}>
                                            <label>Толық аты-жөніңіз</label>
                                            <input type="text" value={fullname} placeholder={data?.personal?.fullname} onChange={e => setFullname(e.target.value)} className="form-control" />
                                            <br />
                                        </Col>
                                        <Col md={6}>
                                            <label>Телефон</label>
                                            <input type="text" value={phone} placeholder={data?.personal?.phone} onChange={e => setPhone(e.target.value)} className="form-control" />
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

                                        {data?.role == 'patient' &&
                                            <>
                                                <Col md={6}>
                                                    <label>Бойыңыз</label>
                                                    <input type="number" value={height} placeholder={data?.medical?.height} onChange={e => setHeight(e.target.value)} className="form-control" />
                                                    <br />
                                                </Col>
                                                <Col md={6}>
                                                    <label>Салмағыңыз</label>
                                                    <input type="number" value={weight} placeholder={data?.medical?.weight} onChange={e => setWeight(e.target.value)} className="form-control" />
                                                    <br />
                                                </Col>
                                            </>
                                        }

                                        {data?.role == 'doctor' &&
                                            <>
                                                <Col md={6}>
                                                    <label>Қабылдау уақытының басталуы: {data?.working_hours?.begin ? data?.working_hours?.begin : whbegin ? whbegin : ''}</label>
                                                    <br />
                                                    <TimePicker className={'form-control'} locale='kk-KZ' onChange={setWhbegin} value={whbegin} />
                                                    <br />
                                                </Col>
                                                <Col md={6}>
                                                    <label>Қабылдау уақытының аяқталуы: {data?.working_hours?.end ? data?.working_hours?.end : whend ? whend : ''}</label>
                                                    <br />
                                                    <TimePicker className={'form-control'} locale='kk-KZ' onChange={setWhend} value={whend} />
                                                    <br />
                                                </Col>
                                                <Col md={12}>
                                                    <br />
                                                    <label>Қызметі: {(data?.specialization)}</label>
                                                    <select
                                                        selected={specialization}
                                                        onChange={e => setSpecialization(doctorOptions[e.target.value]?.text)}
                                                        className="form-control select-input"
                                                        style={{
                                                            backgroundColor: 'white'
                                                        }}
                                                    >
                                                        {doctorOptions.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.text}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </Col>
                                            </>
                                        }
                                    </Row>
                                </Col>
                            </Row>

                            <div className="text-end">
                            <Button
                                    variant="primary"
                                    href="#appointments"

                                    className="reg-page-submin-btn" style={{
                                        backgroundColor: 'transparent',
                                        marginRight: '8px',
                                        color: '#FF9F1C'
                                    }}>Кездесулер</Button>
                            <Button
                                    variant="primary"
                                    href="#calls"

                                    className="reg-page-submin-btn" style={{
                                        backgroundColor: 'transparent',
                                        marginRight: '8px',
                                        color: '#FF9F1C'
                                    }}>Үйге шақырулар</Button>
                                <Button
                                    variant="primary"
                                    onClick={() => update()}
                                    className="reg-page-submin-btn">Сақтау</Button>
                            </div>
                            {/* ////////////END */}
                        </div>
                    </Col>

                    <Col md={12}>
                        {
                            data?.role == 'doctor' &&
                            <div className="main-page-reg-card text-start"id="calls">
                                <h4 style={{ margin: '12px auto 2px auto' }} className="text-start">{'Үйге шақыртулар'} <TelephoneOutbound size={'28'} className="icon" style={{ margin: '24px auto' }} /></h4>
                                {/* ////////////BEGIN */}
                                <Row>

                                    <Col md={12}>
                                        <Row style={{
                                            backgroundColor: '#F49C25',
                                            margin: '0',
                                            border: '1px solid',
                                            borderBottom: 'none'
                                        }}>
                                            <Col md={1} className="d-flex align-items-center thead" >№</Col>
                                            <Col md={1} className="d-flex align-items-center justify-content-center thead" >Аватар</Col>
                                            <Col md={2} className="d-flex align-items-center justify-content-center thead" >Пациенттің аты-жөні</Col>
                                            <Col md={2} className="d-flex align-items-center justify-content-center thead" >Телефоны</Col>
                                            <Col md={3} className="d-flex align-items-center justify-content-center thead" >Мекенжайы</Col>
                                            <Col md={2} className="d-flex align-items-center justify-content-center thead" >Шақыру уақыты</Col>
                                        </Row>
                                        {items?.map((call, i) => (
                                            <Row key={i} style={{
                                                backgroundColor: 'white',
                                                margin: '0',
                                                border: '1px solid',
                                                borderTop: 'none'
                                            }}>
                                                <Col md={1} className="d-flex align-items-center thead" style={{ color: 'black' }}>{i + 1}</Col>
                                                <Col md={1} className="d-flex align-items-center justify-content-center thead" >
                                                    <img  src={`http://localhost:5000${call?.patient?.avatarUrl}`} style={{width: '80px', height: '80px', border: '1px solid black'}} alt="" />
                                                </Col>
                                                <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{ color: 'black' }}>
                                                    {call?.patient?.personal?.fullname}
                                                </Col>
                                                <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{ color: 'black' }}>{call?.patient?.personal?.phone}</Col>
                                                <Col md={3} className="d-flex align-items-center justify-content-center thead" style={{ color: 'black' }}>{call?.patient?.personal?.address}</Col>
                                                <Col md={2} className="d-flex align-items-center justify-content-center thead" style={{ color: 'black' }}>
                                              { new Date((call?.createdAt)).toLocaleString('kk-KZ')}
                                                     </Col>
                                            </Row>
                                        ))

                                        }
                                    </Col>
                                </Row>
                                {/* ////////////END */}
                            </div>
                        }
                    </Col>
                    <Col md={12}>
                        {
                            data?.role == 'doctor' &&
                            <div className="main-page-reg-card text-start"id="appointments">
                                <h4 style={{ margin: '12px auto 2px auto' }} className="text-start">{'Пациентпен кездесу'}  <PencilFill className="icon" size={'30'} style={{ margin: '12px auto 12px auto' }} /></h4>
                                {/* ////////////BEGIN */}
                                <Row>
                                {appointments?.map((appointment, i) => appointment?.doctor?._id != data?._id && (
                                    <Col key={i} md={4}>
                                        <div style={{
                                            border: '1px solid #F49C25',
                                            borderRadius: '12px',
                                            padding: '12px',
                                            boxShadow: '1px 2px 12px #FF9F1C'
                                        }}>
                                            №{i + 1} - { new Date (appointment?.createdAt).toLocaleString('kk-KZ')}
                                            <hr />
                                            <Row>
                                                <Col md={8}>
                                                    <h6>{appointment?.patient?.personal?.fullname}</h6>
                                                    <h6>{appointment?.patient?.personal?.phone}</h6>
                                                    <h6>{appointment?.patient?.personal?.address}</h6>
                                                </Col>
                                                <Col className="col-auto">
                                                    <img src={`http://localhost:5000${appointment?.patient?.avatarUrl}`} style={{width: '100px', height: '100px', border: '1px solid', borderRadius: '6px'}} alt="" />
                                                </Col>
                                            </Row>
                                            <hr />
                                            <button className="btn btn-primary" onClick={() => {setAppointment(appointment?._id)}} disabled={appointment?.status == 'success'} style={{color: 'white'}}>{appointment?.status == 'success' ? 'Жазылды' : `Кездесуге жазу`}</button>
                                        </div>
                                    </Col>))}

                                </Row>
                                {/* ////////////END */}
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default Profile

import { Container, Row, Col, Button } from "react-bootstrap"
import * as fetches from '../redux/slices/user.js'

import main from '../images/main.png'
import { BuildingFillAdd, Calendar2DateFill, Capsule, CardChecklist, EnvelopeAtFill, HouseHeartFill, PencilFill, PinMapFill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

const Main = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetches.fetchAllUsers())
    }, [dispatch])

    const { all_users, data } = useSelector(state => state.user)

    const doctors = []

    all_users?.items?.forEach((user => {
        if (user?.role == 'doctor') {
            doctors.push(user)
        }
    }))

    console.log(doctors && doctors)

    console.log(data && data)

    return (<>
        <Container  >
            <Row style={{
                height: '100vh'
            }}>
                <Col md={12} className="d-flex column align-items-center text-center">
                    <div>
                        <h2 style={{
                            color: '#FF9F1C',
                            textShadow: '1px 1px 1px #FFBF69',
                            fontWeight: '600'
                        }}>Біздің ауруханаға қош келдіңіз: салауатты болашаққа жанашырлықпен қарау</h2>
                        <br />
                        <p style={{
                            fontSize: 'large'
                        }}>Біздің емханада біз жанашырлыққа, тәжірибеге және инновацияға баса назар аудара отырып, ерекше денсаулық сақтау қызметтерін ұсынуға міндеттенеміз. Біздің жоғары білікті дәрігерлерден, медбикелерден және көмекші персоналдан тұратын арнайы команда сіздің әл-ауқатыңызға құмар және бірегей қажеттіліктеріңізге сәйкес келетін жеке медициналық көмек көрсетуге тырысады.</p>
                        <br />
                        <Button className="main-page-btn">Жеке профиль</Button>
                    </div>
                </Col>

                {/* <Col md={3}>
                    <img src={main} alt="" className="main-page-img shadow" style={{borderLeft: '1px solid #2EC4B6'}} />
                </Col> */}
            </Row>
        </Container>

        <Container fluid className="main-page-services-con d-flex column align-items-center" id="services">
            <Container>
                <Row>
                    <h3 style={{
                        margin: '36px auto 12px auto',
                        color: '#FFFFFF'
                    }}>Емхана көресететін қызметтер</h3>
                    {/* <hr style={{color: 'white' }} /> */}
                    <Col md={4}>
                        <div className="main-page-service-card text-center"  onClick={() => {
                                    window.location.assign('http://localhost:3000/appointment')
                                }}>
                            <PencilFill className="icon" size={'42'} style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Кездесуге жазылу</h5>
                            <br />
                            <p>Процесті жеңілдету және сізге ыңғайлы болу үшін біз пайдаланушыға ыңғайлы кездесулер бөлімін жасадық.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="main-page-service-card text-center" onClick={() => {
                                    window.location.assign('http://localhost:3000/call-home')
                                }}>
                            <HouseHeartFill className="icon" size={'42'}
                                style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Дәрігерді үйге шақыру</h5>
                            <br />
                            <p>Біздің жоғары білікті және жанашыр дәрігерлер сізге өз үйіңізде отырып-ақ білікті медициналық көмек көрсетеді.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="main-page-service-card text-center" onClick={() => {
                            window.location.assign('https://i-teka.kz/karaganda/medicamentsalphabetically')
                        }}>
                            <Capsule className="icon" size={'42'} style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Дәрі-дәрмектер</h5>
                            <br />
                            <p>Біз дұрыс дәрі-дәрмекті табу денсаулық сақтау сапарының маңызды бөлігі екенін түсінеміз.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="main-page-service-card text-center" onClick={() => {
                            window.location.assign('http://localhost:3000/doctors')
                        }}>
                            <Calendar2DateFill className="icon" size={'42'} style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Дәрігерлердің жұмыс уақыты</h5>
                            <br />
                            <p>Біз сіздің сапарыңызды тиімді жоспарлау үшін біздің арнаулы дәрігерлеріміздің жұмыс уақытын реттейміз.</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="main-page-service-card text-center" onClick={() => {
                            window.location.assign('http://localhost:3000/laboratory')
                        }}>
                            <CardChecklist className="icon" size={'42'} style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Зерт.кабинет</h5>
                            <br />
                            <p>Біздің диагностикалық қызметтердің кең мүмкіндіктері қан анализін, бейнелеуді зерттеу т.б. туралы.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="main-page-service-card text-center" onClick={() => {
                            window.location.assign('http://localhost:3000/attachment')
                        }}>
                            <BuildingFillAdd className="icon" size={'42'} style={{ margin: '32px auto 12px auto' }} />
                            <br />
                            <h5>Емханаға тіркелу</h5>
                            <br />
                            <p> Біз ауруханаға жатқызу маңызды оқиға болуы мүмкін екенін түсінеміз процесте басшылық ету үшін осындамыз.</p>
                        </div>
                    </Col>
                </Row>
                <br />
            </Container>
        </Container>


        <Container fluid className="main-page-news-con d-flex column align-items-center" id="news">
            <Container>
                <Row>
                    <h3 style={{
                        margin: '36px auto 12px auto',
                        color: '#FF9F1C'
                    }}>Жаңалықтар</h3>

                    <Col md={6}>
                        <div className="main-page-news-card text-start">
                            <br />
                            <h6 style={{ margin: '12px auto 2px auto' }}>Отбасы күні</h6>
                            <p style={{ margin: '0', color: 'gray' }}>15-05-2023</p>
                            <p style={{ margin: '0' }}>15 мамырда бүкіл әлем мереке – Халықаралық отбасы күнін атап өтеді. Халықаралық отбасы күнін 1993 жылы БҰҰ Бас Ассамблеясы бекіткен. Бұл күнді белгілеуге халықаралық қауымдастықтың заманауи отбасы мәселелеріне, отбасы құндылықтарының жоғалуына және неке институтының құнсыздануына алаңдауы себеп болды. Бұл бақыт, махаббат, адалдық және адалдық мерекесі.</p>
                            <br />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="main-page-news-card text-start">
                            <br />
                            <h6 style={{ margin: '12px auto 2px auto' }}>Энтеровирусты инфекциялар</h6>
                            <p style={{ margin: '0', color: 'gray' }}>02-05-2023</p>
                            <p style={{ margin: '0' }}>Энтеровирусты инфекциялар — энтеровирустар тудыратын және жеңіл қызбадан менингитке дейінгі әртүрлі клиникалық көріністермен сипатталатын адамның вирустық жұқпалы ауруларының тобы. Барлық нысандарда температура 38 - 39 дейін күрт көтеріледі, тамақта герпетикалық бөртпелер болуы мүмкін, бұлшықеттерде пароксизмальды ауырсыну, кейде серозды менингиттің суреті (бас ауруы, құсу) дамиды.</p>
                            <br />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="main-page-news-card text-start">
                            <br />
                            <h6 style={{ margin: '12px auto 2px auto' }}>ДҮНИЕЖҮЗІЛІК иммунизациялау апталығы</h6>
                            <p style={{ margin: '0', color: 'gray' }}>25-04-2023</p>
                            <p style={{ margin: '0' }}>ДҮНИЕЖҮЗІЛІК ИММУНДАУ АПТАЛЫҒЫ (24 – 30 СӘІР) Қазақстан Республикасы Үкіметінің 2021 жылғы 12 қазандағы № 725 қаулысымен бекітілген ұлттық жобасын тиімді іске асыру шеңберінде вакцинамен басқарылатын жұқпалы аурулардың алдын — алу мақсатында 2023 жылғы 24 — 30 сәуір аралығында «Ауқымды толық иммундау!» ұранымен Дүниежүзілік иммундау апталығы өткізілуде.</p>
                            <br />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="main-page-news-card text-start">
                            <br />
                            <h6 style={{ margin: '12px auto 2px auto' }}>07 сәуір – Ашық есік күні!</h6>
                            <p style={{ margin: '0', color: 'gray' }}>07-04-2023</p>
                            <p style={{ margin: '0' }}>07 сәуір Ашық есік күні! ҚҰРМЕТТІ ТҰРҒЫНДАР 2023 жылдың 07 сәуірінде сағат 09.00 — 17.00 аралығында Қарағанды қаласының КМК «№3 Емханасында» Дүниежүзілік денсаулық күніне орайластырылған «Салауатты сандарға қол жеткіз!» ұранымен ашық есік күні өткізіледі. Емханаға тіркелген барлық тұрғындар келесі мамандардың кеңесіне жүгіне алады: Кардиолог: кабинет 324, сағат 15.00 — 16.00 кабинет 332, сағат 15.00.</p>
                            <br />
                        </div>
                    </Col>

                </Row>
            </Container>
        </Container>

        <Container fluid className="main-page-about-con d-flex column align-items-center" id="about">
            <Container>
                <Row>
                    <h3 style={{
                        margin: '36px auto 12px auto',
                        color: '#FF9F1C'
                    }}>Біз туралы</h3>
                    <Col md={12}>
                        <div className="main-page-about-card text-start">
                            <Row>
                                <Col md={6}>
                                    <p>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Қазақстан Республикасының азаматтарын жоғары сапалы медициналық қызметтермен қамтамасыз ететін заманауи инновациялық және басқару технологияларын пайдаланатын жоғары білікті мамандардан құралған бәсекеге қабілетті емдеу-профилактикалық кәсіпорын.
                                        Емхана 2004 жылы Оңтүстік-Шығыс өңіріндегі 4 отбасылық дәрігерлік амбулаторияны біріктіру арқылы ұйымдастырылған.
                                        «Гүлдер» шағын ауданында орналасқан төрт қабатты, бес блокты жаңа ғимарат 2009 жылдың қаңтар айында пайдалануға берілді. Жалпы ауданы 12500 шаршы метрден асады. Кәсіпорынның медициналық құрал-жабдықтармен жабдықталуы 88 пайызды құрайды.
                                        Жетекшісі: Буранкулова Сәния Нұртасқызы <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Халыққа сапалы әлеуметтік-бағдарланған алғашқы медициналық-санитарлық көмек көрсету. Медициналық көмек көрсетуде денсаулық сақтау жүйесінің инновациялық бағдарламалары тәжірибеде белсенді түрде қолданылады, соның ішінде балалық шақтағы ауруларды кешенді басқару, жүктілікті қауіпсіз қорғау. Денсаулық мектептері бар: бронх демікпесі, жүректің ишемиялық ауруы, артериялық гипертензия, отбасын жоспарлау, қант диабеті, сау бала. Бекітілген халыққа медициналық көмек көрсету процесіне ұйымның аумағы бойынша Қарағанды ​​мемлекеттік медицина университетінің кафедраларының ассистенттері, доценттері, профессорлары қатысады.
                                    </p>
                                </Col>
                                <Col md={6} className="d-flex">
                                    <img
                                        style={{ border: '1px solid #FF9F1C', borderRadius: '12px' }} className="img-fluid"
                                        src="http://poliklinika3.kz/wp-content/uploads/2013/02/2014-07-29-11.18.21-480x300.jpg?i=2581" alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>

        <Container fluid className="main-page-contact-con d-flex column align-items-center" id="contact">
            <Container>
                <Row>
                    <h3 style={{
                        margin: '36px auto 12px auto',
                        color: '#FF9F1C',
                        textShadow: '0px 0px 2px #E89119'
                    }}>Бізбен байланыс</h3>
                    <Col md={12}>
                        <div className="main-page-contact-card text-start">
                            <Row>
                                <Col md={6}>

                                    <EnvelopeAtFill className="icon" size={'30'} style={{ margin: '12px auto', color: '#FF9F1C' }} />&nbsp;&nbsp;&nbsp;
                                    <span style={{ marginTop: '24px', fontSize: '18px' }}>1sn_soul@mail.ru</span>
                                    <br />
                                    <PinMapFill className="icon" size={'30'} style={{ margin: '12px auto', color: '#FF9F1C' }} />&nbsp;&nbsp;&nbsp;
                                    <span style={{ marginTop: '24px', fontSize: '18px' }}>г. Караганда, пр. Шахтеров, 78</span>
                                    <br />
                                </Col>
                                <Col md={6} className="d-flex">

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>)
}

export default Main
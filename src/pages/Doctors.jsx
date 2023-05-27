import { Container, Row, Col, Button } from "react-bootstrap"
import * as fetches from '../redux/slices/user.js'
import { useDispatch, useSelector } from "react-redux"
import React from "react"


const Doctors = () => {

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

    return (<Container fluid className="main-page-doctors-con d-flex column align-items-center" id="doctors">
        <Container>
            <Row>
                <h3 style={{
                    margin: '36px auto 12px auto',
                    color: '#FF9F1C'
                }}>Біздің дәрігерлер</h3>
                {
                    doctors?.map((doc, i) => i < 8 && (
                        <Col md={3}>
                            <div className="main-page-doctor-card text-center">
                                <br />
                                <img
                                    style={{
                                        border: '1px solid #2EC4B6',
                                        borderRadius: '12px',
                                        margin: '0',
                                        padding: '0',
                                        height: '160px',
                                        width: '140px'
                                    }}
                                    src={doc?.avatarUrl ? `http://localhost:5000${doc?.avatarUrl}` : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgSFRIYGRgYGBgYGBIYEREYERgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrISs0NDQxNDQ0NTE0NDQ0NDQxNDQ0NDQ0NDQ0NDExNDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAgcFBQgCAgMAAAABAgADEQQSITEFQQYiUWFxgZETMqGxwQcjUtHwFEJicoKSsuHC8TNjJDVT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAgEEAgIDAQAAAAAAAAECEQMxIQQSQVEyYXGBEyKxBf/aAAwDAQACEQMRAD8A9TtGkSQiIRGSFhBRHMIKIBNTk6yGnJ1gERGscm8GGsF3iCwBGVGCi50EyOknHBhqRZQGcjqqdh3t+U8R410kxdR2dq7nXYPZR4KNoz1t7jU4/hgtRzU0pi7W3t3d/dLWD4lQq6U6qMbXyhlLW8N583jiNRtbkBlAO+pBudOe0kwfEqlNwyVCrbggkEHtHfA/a+mITz/oT05Ndlw+IsKh0WoBYMeSsOTHtnoECs0IQhEQhCEYEIQgBGx0QwBIR0IBTMQxxEQwSjMRY5ogiUlSTrIEk6wBrbxpYDU7DUmObeZHSDE5aeQG2a9z2KN4CTdebdPONPUqMENlBsXO2myjtnn1Z7mwN79wtNPjmKbEYk00HVVsiqNhY/OdDwvokoW77nlJyzmPbfHC5dOQq0tgLWAHaJHkYd47D9DO6foul9CZmY/oy66p/uTOSU7xWMTCVipBBOn9wnuvQnpAMVhwGP3iABv4h+6/nbXv8RPB2psrZWFmHxnT9CuKth8UjrcqxyOg5q1gbd+x8pW2dj3aLEU31iymZIsIRgQhCBkhFhAiQhCAVmEaY5zGXgDWjRHtGCIJUlhZXSWFgDXnH9O8SUpO43yZV8SdT+uydi886+0+oci09QDa5AJst+sxtyGnrFl0rHtyvQDgudjXcaZtCe2eg4xByEr9GcOEwClEzMSxCrYX6xtqTYC1plYvj7q2R6a3HJa1Mt6WExznm104XpZY2MRxflED5lFQA2PK2sxeI8YdGIzKijdiMzHwX85ljN+GuV0h41whX1A63I85zOFdqFYXFijBvQ3/ANzrOGcRR3C+3Ysf3XRApF7G1gCPH5zI6X4XJXVgPeUHu0JB+k2x3Lqsc9Wbj3XD1AyBhsQCPAi4ks5b7P8AiLVcIqvfMnVudyo0U9+xF/4Z1M2c3QhCEYAi2gIsQJaIRHRDAEhCEYQMsjKyVpGTAkbRoj2jBEEiSwsrpLCwBHmVxvhaV6ZVhrlIDDcA7jzE1XjSIWbmjl1dxzVHChMIKakhQWFxo2XbTs0nB8T6P0zVFRGvluLFFzHUnrn9467nsE9UZVZGKjq3a3ZcMVa3mDOIxmlS3foOcxytxdWEmR3B+HvTwzZiT1lK33HL8piYng6EsXv1t9Tbe4+npO6Yf/GJ7hpzGo3E57FqbaEXPLyk715i5Nzyo8N4dTSxVRfTrbtp3nlIOl+DLlLfhO5sNTzPkZdwFS7ZDoew/MHsmH9onEXR6KI9kek2YWH4gAQbXG5jx3lSz1jHe/Z0E/ZgFtoqMLfxIFf1dGJ7zOynCfZkfuV70F/5ldvoRO7m2PTky7EIQlEURYghECxDEhACEIRhE0jMlMjaBI2jI9oyIJFk6yBZOsAHkbtYE9gJ9JI8gri6EdunrCgxcOfYBASDl355jrf1M4HjVStTqColFKjsCPZszKAw/DbtsfQ909GOot2/LnMXimEV3FtHUhh32/VjMuTHqt+HLVsrn0NSvh1qUzlJU56RdwyMN1YXH+9OUxcWj0ab5qiZ7dSmpzuWNrXJvYa7906HjuEpsgutmG7ADN4eEw8HhERr2ue8C3pI3jK6cd3HtV4RgqqkGrUZ3y6kgABm5AAWGgM5bpvilqY4U1N1oolMnlmBLv6ZgPEGelUKdhmO51/KeLVq96jvuXd2v3FiZXHPNrHlvUe0/ZcwNE+LjwtkI/ynfTyj7HsXmapTPIM3qUB+k9YmuLC9khFhKSIkWJACEIQAhCEAjMY0fGNAkbSOSNGRA9ZOsgWTLAB9pHU29JI+0abW12gBmtc9mg8d/wApy/SHEgVGS9nADDkcrDQjzDDym7VZhoSCL3AHLTn37/Cc303wpNJMQvvU7Brc0awPobH1k8mNuNacWUmU2yBxuofu6gDchU2buDDY+MhXEG+lpmq4beT0Tacnl2+PhtvUAS99gSTudBvaeQ8Z4LUwzKGOam4+7rL7jAC5B/C3d6XnqSVgVP8AKR66TJ6P1Kbl8HiEV6ea2Rh7upyMOzsuNrTp4PO45ea60zvsw4klHFZnNlZcpbkMxGp7tJ7sDcXE8i4j9n/sr1MIxbmaDsCSBsEc7nfRt+2dl0KxdUU1w9W+ihqbN72S2tNr/vKbjy7ppZqsvFm3WWhCECESLCMEhFhACEIQCKNaOjWiJG0ZHtGQByyZZCgj3ewNoSbB7uBM7iOIIDW2UX08I6pUuAZS4gbq38SkedpcibUfBcWauFo1CdXpoT/NazfEGaGJpK9MowupBUjtBFiJyX2b4rPgQnOm7r/SzF1/yI8p19+UYeZ4rAtSqNTbdDofxKdVbzEdSXTym7034c5QYun79MZXHJqd73I55SSfAnsnO4HEh0utrjdOY/1OXl4rjPdOv+Oni9Rjll7MvF+P2lw7+8Oy3znP0cWExftv3Q7Bh2pfK3yv4gToaNM5mJWwIHqDecziaQV3UbZm/wAjNPSayyv8Ob/1MrhhMp9vXuFuSlib2Ngfl8LS+mhBtqDp+U5DoFxH2lM0yetTsp7bAWU/22HkZ0mIWoXBz9TKQaeRdSTo2bcWtttqe62+U86ThnMsZlG5Rrq2x8pLMDDuVNr7Ej8pq4bEX6p35H6SLjpcy2tQhCJQhCEAIQhEEURo4rEaBITGKuseZIi2W58fygDCbCU3q6kR+JfTfcgiVKzXGYbj9GaSJtSEypjv/H4ESdHuLxtYdUxwnDdAeq+Jo3IKVmtY2090f4TuGSp+M/CcRwr7vi+Jp/jRKi/05fqzTu1bSOg3DhtmN97g2NxOJ6R9HWwzftWHByDV6e/s+3xT5eG3dFecY7uu9mU8jvCVHJxzOfVnV+ZXCUMcjpnHmOYM5VnuS3aSfUmdX0l4AaeavhlORr56IBzJfmoG6fLw24/Cm9NT3fWPg4phlbOq4/Xc+WfFMc+5fP1f22Og+L9nxAKTpVRktyzDrL/iR5z1ZyOfj5CeJ0Kvsq9OrySojH+UN1vhee1rZgey1o+Wayaejz93Hr6c50dx1RqlfDVTepSqFg2vXpuS9Nh5HL3WAnSVKmXKw/ED8Jw/Eq1ROIrUoUmd6NIisi5bvSZrogB3YHMw8ROmwnEaeIpJVpNdGNxpZgRoVYciDfSS63Vqbi8WQYN7oO7STzJoIQhACEIQBjNGtEimIkVpLW2tG0xrFrHQ+EcFZzN+6fKVWOU25RzN2xr6iaRmgV8j25E/OWnGhHcRM7EtYX7JeDbeAlWBw/F+pxfDVP8A9KbIe+wa3xZZ3NI6ThOl7/eYSqNGTEZD5OoI88s7qjtFQsjUQA0tGKbSSJSM055z0x4etLEZkUBagzgAWAa9nt59b+qelzkvtCw2bDpUA1R7X7Fca/FVl8eWsnJ6zD3cV/Xl5vil0PhPXOieM9tg6VTmVs38ydRvipnk9TVbz0D7OsUP2J1AuadRxlG5DAOD8SPKac08bcvoMvNhi1PY8XcNtXoqVPPOjWsP6TeN4Z9zxCrTClaeJBrICAFWsthWQW5n3vOSdNeD1az4bEUbBkfUsbZVYX9bqBbtImj0ho5XSoFuVZXUgXOZDZwO8ozr5zGPUrp+H1OXbNCY2HexmwrXF5nlPKsaWEIRKEIQgEMIQiItOMxB0PhHk2AHbInFwR2iVCrJJjDptJHT/qMDcjNEM7jJC0me5FhrYTRUfCV8fRV6bodmUj1EmpvdAe0Xjt8BwnSXh1WrUyoVAp1TWOZiNBbbQ6zu8HVVkBDAjtmQ+BDqznL951MhGYFHZUBIJte5Vjpsbd8pfswwVaktMZadQtTamAQmZUzo+Xk1g9zzuOyFso1p1V5IrSsr6RUfWLQ2tBpl9JMNnwdVdCQhceKHP/xl9TeU+JPahV7qb/4GGPaeTVwsv08gvY25Gdb9m9TJXrU7mzorjsujEH4OPScc6nMJ0nQvEWx6LzZKg8gt/mJ0Z+ca8n01s5Zr5ek4+lnpso3I0PYRqp9QIjrnpAka5b2/iH+xJb7+EZQNiy+DDwO/xB9ZzPZFNwbW8fWa2De627Jz6NYDu09P9WmrgqtiO/eLKeBjfLThFMSQ0EIQiCGEIojIxtYzNB2se6Q1qmhPZ8o9FWfi0sxI5GMWoDvJnNzftlNhYzSJQ8VLCmcp12HnpLlAjIBbkBKmLTMo7jf8pPQOkd6DJx+M9lUSnUL+xJvnVSxXre6QqlrC9wdbeQmaML7XFB6ftPYU75DUBUs72DOFIBVQoAF9TdtALToalEPUVDswOvZYEx1AIugbbTWLxCSnTSIGiMt9mHrAo36MYWabazN6Tvlwlc/wEX/m6v1l1Cb6zG6c1D+xVcoJuUGnZnUn4QnaeT8b/DzaqeuttjrLvRGpbidA9pdfWm8zsNUDZRzBljo1UtxDDn/2Af3Ar9Zvl+LyeDxyT9PaB9JFV0AYb2K+u3xA9Y1Kre0KZDlC39pfQnstbx9I+qt0tz5HsN9D6zmeygw6338fp9BLyytTcEqe0HTsO9vIgiWgsKI102HgIsRdh4RZk0EIQgEMIRVgRrqLWlKvRtsd+Ut4iqF8eyZGJxTMdDLxhUhRhyjKic4iVX7b+Ij2c8xLSgdNIU5ZNO6k+ErbGAGG/wDJf8Kufhb6zLqN1j4zUoGxc/wH4kTIJ1Mm9nOjw5jlrEc/jIoQ2Wk64thzPrJkxzfoSlaOEe06W3qo/v00bxUH5yqOH4MOtQYZFdWDKyoqkMDcHq2iRSJUqbGxhsRnJ7hrtExzsFAW+pA03tY/6kXCl9499vQf7k+JLZltsAbgczYW+sXyudGYYFSFyHKTe+hyk76cuZ07TNBDy+MpozHullHPOKxTZp+6PAR0jw46okkyWSEWEAgirEiObA+BgTOxBux8ZBZQLtoPiZZSlfU6D5ytVIJ28uU0hVX/AGi/u02Pf1QPiY/O3NbDxBMkRbxXAOnZHsl0UQKdhrcXv2zJr6G01qVRSoAOw25zL4gmVsw2MIVQK9kc9wEypbepoR22lMSb2c6LFiQgDrxbxgMW8ZH3hfWNvEB18o4mtrhi/d37Sfy+kmojMWv+IgdoANvpeVKNZ0pjq9XKCDfrFmNwAJfwoOUX3tr4nU/GOqhcpGm/65xyEdkfUGl+yMQgyTbFL3R4D5R8YpsLRc4kKOhI2qAQgNmQhCIK9QGZ7AA6zVcazPxNLreMqUqrM5OgkqpZYKlpKfdJlErgm+8K93Qg78jEzQQ3MZOcapd2Xst+f1i2mzVwNM36tid3Fg/rz85l4vC1U1Azr2qOuPFefl6StSkhMSMo11fY+UkYRXGnsXgDIjUEA8g014g5xoaR4isEpvUOyqzf2gn6Rwq6RQrEJ+DKfO1h+vCWluJy2G4k6ICALtZmuLm/rH8E6aUqrilVXI5dkVxrSYhio13Unv074ZWTtUxtm466RotmHjJLREF2A74Eus5jLxH33jM7dkNfSdnkwkJqH8MIvbR7luLAxJDQ1pE4BktSQOYb0ET041tRaTq8a6cxKlLSjkjwoEc4IkRMoimMMcGgbGMmXxDhKuc6HI/4gOq38w5+O853iWIqYcEVVt2NujeB+m87ZF5zD6YAPhmohrGoQL2BIVSCxAPPYf1Quftm6eOPuunBvxtmNluSdgASfQSxTqYxtqbD+YqvwJvL3DcJSoLlRbk7sxGdvE/QS41YbE27hOO89vTrnBPllLicYh1pFh/Cyt8AbzVpVDVpMr0mFxlKMD1gdCLbzOxmJqrcpRZ7W2dBe+9gWv8A9iJwvGYhnBNF073ZcuhvyMJzZaX/AIMbWs6FltfbkV5985jE8GqJswYdtrHvJE6lKueo3WBIIDEbXy7eX1kfEWCj6fCZ3PK+N7VMJL03uhXEalbDlXN2ptkzE9ZlsCCe8XtfuE6aimpM5XotQNJVVtGcszDsJGg8gBOyo0+qO/WduO5jNuLOT3XRhjbSZkjCtpW2VgFInWEjfiFJNGe3jCL/AG+j/wBftYfeJHVRrGzNoZUkDyeptK7GAMvJ6QvpK95Zwg38PnCdimVKfIynUp9k0K0qaE/SaIVShiZZaKdsh9mRGCbTg+K8WNWsxXVF6qHtA5+ZufC07HidQhMoOraX7Bz/ACnN1sEu2UeNtZOfFc8dStOLOYXdjGevpr9JBTrpmAdiFvqVN28PW01qvCAQSCR5/nMbF4ampCmjY21a+bzBGvbOPLhyx7dmHJjn0t06tItZC1vxZ3uR4Ne0sNTRzZqzgfhGUH+615lPw6na6VGXzzfO9pYoYVUW7VHa3a5+J5yGlrcw701siDblzlqnw+pm9oVBbkN8vf4yLoxQVwaosVDFVIIPWG+3ZOopidXDx+Pdl/Tj5ubzqMvApUNZOqSAwuQDOzEy6D2YHvE1Cs1yYb2WNMIXiNC9BTuAfKElvCP3VPth9UaSGWH2laSs2ptKrmWam0p1GioNLay7hPdv2kfCZTVdbTVo6Ko7gfXWGPYoxB6pmdYmX3N9JWItNIimCodmHmI9yLXvGtIW2j0GdjkLaystDtmjVGkgtLlTUDpK9XCKRqAfES+VjWWBTwoDgFFrNZh2gNofWed9I6bLiqlMsSqP1FJ0CsMy/BhrPXKJ6onm3T6llxhb8dOm3zT/AIxYY4y+Iz9VyZezu9tX7L8ReniKR/dqK48HWx+KfGd4s80+zOsBiKqfiUHx/VjPRMFhUTMFv1iWNzzsPyjy7Piu8YuoZs02uAe0CYqzWwp6g/XOZ5N8U1ohWLCQowpFjoQIplUwhA0dX3TMnEOe2EJNDIdz7TedYmy+C/KEI8Pk8jK/vSB4QmrMN7sqvCEcKoa20ihCUVDRGhCBJKA0nBfaQPv6Z/8AUPg7fnFhDDtl6n8L/TL+z7/7AfyP9J6yN4kIZ9jg/BYmnhPcHn84sJnl06Me00IQkLEIQgT/2Q=="} alt="" />
                                <br />
                                <h6 style={{ margin: '12px auto 2px auto' }}>{doc.personal?.fullname}</h6>
                                <p style={{ margin: '0' }}>{doc?.specialization ? doc?.specialization : 'Мамандығы'}</p>
                                <p style={{ margin: '0', color: 'gray' }}>
                                    {doc?.working_hours?.begin ? doc?.working_hours?.begin : '11:00'}&nbsp;-&nbsp;{doc?.working_hours?.end ? doc?.working_hours?.end : '14:00'}</p>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </Container>)
}

export default Doctors
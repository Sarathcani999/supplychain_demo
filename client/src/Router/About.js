import React from 'react'
import { Container , Card , CardTitle , CardText , CardHeader , CardBody } from 'reactstrap'
import AppNavbar from '../components/AppNavbar' 
// import '../App.css'

function About() {
    return (
        <div>
            <AppNavbar />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle> <h2 >About</h2></CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                                This Project is created as a Boiler Plate.
                        </CardText>
                        <div style={{height : 100}}></div>
                        
                        <div>
                            Developed by xxx.
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default About

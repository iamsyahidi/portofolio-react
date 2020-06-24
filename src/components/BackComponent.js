import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const BackComponent = () => {
    return (
        <Row>
            <Col>
            <Link to="/">
                <Button color="dark">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>
            </Link>
            </Col>
            
        </Row>
    )
}

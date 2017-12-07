import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class DetailEs extends Component{
	state = {
		prescription:{}
	};

	componentDidMount() {
		API.getPrescription(this.props.match.params.id)
		.then(res=> this.setState({ prescription: res.data }))
		.catch(err => console.log(err));
	}

	render() {
		return(
			<Container fluid>
				<Row>
		          <Col size="md-12">
		            <Jumbotron>
		              <h1>
		                {this.state.prescription.DrugName} Para {this.state.prescription.PatientName}
		              </h1>
		            </Jumbotron>
		          </Col>
		        </Row>
		        <Row>
		          <Col size="md-10 md-offset-1">
		            <article>
		              <h1>Detalles de Receta </h1>
		              <p>
		                {this.state.prescription.DrugInstruct}
		              </p>
		            </article>
		          </Col>
		        </Row>
		        <Row>
		          <Col size="md-2">
		            <Link to="/MedicationES">← Regrese a Medicamentos</Link>
		          </Col>
		        </Row>
			</Container>
		);
	}
}

export default DetailEs;

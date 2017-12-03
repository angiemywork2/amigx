import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";
import './otc.css';

// Benadryl
// Motrin
// Mucinex
// Sudafed
// Tylenol

// Name, 
// Commonly Used for, 
// General Direction, 
// Strength, 
// Dosage, 
// Frequency



const otcEs = () =>

  <Container fluid>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <h1>Lista de referencia rápida de medicamentos sin receta
</h1>
          <Jumbotron>
            <div className="panel-group" id="accordion">
              <p>La lista se usa comúnmente en medicamentos de venta libre. 
              ¡Consulte a su médico antes de tomar cualquier medicamento!
              </p>
             

              <h3><strong>Advil | Motrin (Ibuprofen)</strong></h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>Sobre Advil | Motrin (Ibuprofen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea1" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Advil | Motrin se usa para:
                      <ul>
                        <li>Reductor de fiebre</li>
                        <li>Aliviar dolores de cabeza</li>
                        <li>Aliviar calambre menstruales</li>
                        <li>Dolores de cuerpo</li>
                      </ul> 
                    </p>  
                    <p>
                    Como funciona:
                      <ul>
                        <li>Reduce inflamación para disminuir la inflamación, reducir el dolor, o reducir la fiebre</li>

                      </ul>
                    </p>
                  </div>
                </div>
                

              <h3>Aleve (Naproxen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea2">
                        <h4>Sobre Aleve (Naproxen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea2" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Aleve se usa para for: 
                      <ul>
                        <li>Reductor de fiebre</li>
                        <li>Aliviar dolores de cabeza</li>
                        <li>Aliviar calambre menstruales</li>
                        <li>Dolores de cuerpos asociados con la gripe</li>
                        <li>Dolores musculares</li>
                      </ul> 
                    </p>  
                    <p>
                    Como funciona:
                      <ul>
                        <li>
                        Le impide al cuerpo la producción de sustancias naturales que causan la inflamación. 
                        Ayuda a disminuir la inflamación, dolor, o fiebre.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Benadryl (Diphenhydramine: an Antihistamine)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea3">
                        <h4>Sobre Benadryl <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea3" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Benadryl se usa para tratar los síntomas de: 
                      <ul>
                        <li>Alergias</li>
                        <li>Fiebre de heo</li>
                        <li>Resfriado</li>
                      </ul> 
                    </p>

                    <p>
                    Estos síntomas incluyen:
                     <ul>
                      <li>Sarpullido</li>
                      <li>Ojos lloroso e irritados</li>
                      <li>Toz</li>
                      <li>Congestion nasal</li>
                      <li>Estornudos</li>
                     </ul>
                    </p>  

                    <p> Benadryl se usa para prevenir or tratar estos sintomas de cinetosis:
                      <ul>
                        <li>Nausea</li>
                        <li>Vomito</li>
                        <li>Mareo</li>
                      </ul>
                    </p>
                    
                    <p>
                    Como funciona:
                      <ul>
                        <li>
                        Impide al cuerpo que fabrique la sustancia (histamina) durante una reacción alérgica. 
                        Combate los síntomas.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Mucinex (Un expectorante llamado Guaifenesin)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea4">
                        <h4>Sobre Mucinex <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea4" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Mucinex se usa para proveer alivio temporal de:
                      <ul>
                        <li>Toz</li>
                      </ul> 
                    </p>  
                    <p>
                    Como funciona:
                      <ul>
                        <li>
                         Funciona adelgazando y aflojando flema  en las vías respiratorias, 
                         despejando la congestión y facilitando la respiración.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Sudafed (Pseudoephedrine, un descongestionante)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea5">
                        <h4>Sobre Sudafed <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea5" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Sudafed se usa para proveer alivio temporal de: 
                      <ul>
                        <li>Dolor o Pression sinusal</li>
                        <li>Congestion nasal</li>
                      </ul> 
                    </p>  
                    <p>
                    Como funciona:
                      <ul>
                        <li>
                          Disminuye congestión y hinchazón al estrechar los vasos sanguíneos.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>




              <h3> Tylenol (Acetaminophen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea6">
                        <h4>Sobre Tylenol <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea6" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Tylenol se usa para aliviar dolor leve a moderado de:
                      <ul>
                        <li>dolores de cabeza</li>
                        <li>dolores menstruales</li>
                        <li>dolores dentales</li>
                        <li>dolores de espalda</li>
                        <li>osteoartritis</li>
                       <li>Dolores causado por la gripe o resfriados</li>
                      </ul> 
                    </p> 
                    <p>
                    Tylenol también se usa como: 
                    <ul>
                      <li>Reductor de fiebre</li>
                    </ul>
                    </p>
                    
                  </div>
                </div>
              

            </div>
          </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
 </Container>



export default otcEs;

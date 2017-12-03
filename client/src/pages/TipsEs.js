import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DisclaimerEs from "../components/DisclaimerEs";

const TipsEs = () =>
  <Container fluid>
    <Row>
    <Col size ="md-10">
      <h1>Consejos de Salud</h1>
      <Jumbotron>
        <div className="panel-group" id="accordion">
          <h1>Diabetes</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className= "panel-title">
                <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                  <h2>¿Qué es la Diabetes? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                 Diabetes es un grupo de desórdenes metabólicas en cual los los 
                 niveles de azúcar se mantienen altos por tiempos prolongados. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea2">
                  <h2>Síntomas <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Urinación y sed frecuente</li>
                    <li>El aumento de hambre</li>
                    <li>Fatiga</li>
                    <li>Vision borrosa</li>
                    <li>Entumecimiento de manos o pies</li>
                    <li>Pérdida de peso inexplicada</li>
                  </ul>
                  Síntomas pueden ocurrir rápidamente con diabetes tipo 1,
                   pero se puede tomar años o nunca ocurrir para la diabetes tipo 2.
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea3">
                  <h2>Tipos comunes <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                      <li>Tipo 1</li>
                      <p><small>El cuerpo no produce insulina porque el sistema inmune ataca 
                      las células productoras de insulina. Este tipos usualmente se diagnostica 
                      temprano.</small></p>
                      <li>Tipo 2</li>
                      <p><small>El cuerpo no produce insulina o no la utiliza bien. Este tipo se 
                      puede desarrollar a cualquier edad y es el tipo más común de diabetes.</small></p>
                      <li>Gestacional</li>
                      <p><small>Se desarrolla en algunas mujeres cuando están embarazadas.
                       Por lo general, desaparece después de que el embarazo ha terminado. Ahi esta,
                       sin embargo, una mayor posibilidad de desarrollar el tipo 2 más tarde en la vida.</small></p>
                    </ul>
                    </p>
              </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea4">
                  <h2>Problemas de Salud <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p> Diabetes puede causar:
                  <ul>
                    <li>Enfermedades del corazón</li>
                    <li>Derrame cerebral</li>
                    <li>Enfermedades del riñón</li>
                    <li>Problemas oculares</li>
                    <li>Daños a los nervios</li>
                    <li>Problemas en los pies</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea5">
                  <h2>Significance to the latino community <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Los latinos de ambos sexos tienen un riesgo más alto de desarrollar diabetes tipos dos que caucasianos.</li>
                    <li>Tienen una probabilidad 50%  más alta de morir por complicaciones relacionadas al diabetes que los caucasianos.</li>
                    <li>Latinos con diabetes tienen tasas más altas de muerte relacionada a enfermedades cardíacas que los latinos sin diabetes.</li>
                    <li>The prevalencia de la diabetes en la población latina se espera que aumente un 127%.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea6">
                  <h2>Encuentra más información <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea6" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Enlaces en Inglés
                  <ul>
                    <li><a href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63">https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63</a></li>
                    <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
                    <li><a href="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg"></a>http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg</li>
        
                  </ul>
                </p>
                <p>Enlaces en Español
                  <ul>
                    <li><a href="https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg">https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg</a></li>
                    <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
                    <li>
                      <a href= "http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg">
                        <img style= {{height: 100}} src="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg" />

                      </a>
                      </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>

      <Jumbotron>
        <div className = "panel-group" id="accordion2">
          <h1>Hipertensión</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb1">
                  <h2>¿Qué es hipertensión?<span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  La presión arterial alta (hipertensión) se define como la presión alta en las arterias, que son los vasos sanguíneos que transportan la sangre del corazón al resto del cuerpo.
. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb2">
                  <h2>Síntomas <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Dolores de cabeza</li>
                    <li>Mareo</li>
                    <li>Falta de aliento</li>
                    <li>Vision borrosa</li>
                    <li>Pulsaciones en el cuello o la cabeza</li>
                    <li>Náusea</li>
                  </ul>
                  La presión arterial alta puede no tener ningún síntoma, por lo que la hipertensión ha sido etiquetada como "el asesino silencioso".
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb3">
                  <h2>Problemas de Salud <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  La presión arterial alta de larga duración puede provocar complicaciones múltiples, que incluyen:
                  <ul>
                    <li>Ataque cardíaco y otras enfermedades cardiovasculares</li>
                    <li>Enfermedad del riñon</li>
                    <li>Carrera</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb4">
                  <h2>Significance to the Latino Community <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Las enfermedades del corazón y los accidentes cerebrovasculares 
                    son la principal causa de muerte entre los latinoamericanos</li>
                    <li></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb5">
                  <h2>Encuentra más información <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Enlaces en Inglés</p>
                <ul>
                  <li><a href="http://www.your-heart-health.com/en-US/heart-disease-facts/hispanic-americans.html">http://www.your-heart-health.com/en-US/heart-disease-facts/hispanic-americans.html</a></li>
                  <li><a href="https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_causes_high_blood_pressure">https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_causes_high_blood_pressure</a></li>
                  <li><a href="https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_is_high_blood_pressure">https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_is_high_blood_pressure</a></li>
                  
                </ul>
                <p>Enlaces en Español</p>
                <ul>
                  <li><a href="https://medlineplus.gov/spanish/ency/article/000468.htm">https://medlineplus.gov/spanish/ency/article/000468.htm</a></li>
                  <li><a href="http://www.cuidateplus.com/enfermedades/enfermedades-vasculares-y-del-corazon/hipertension-arterial.html">http://www.cuidateplus.com/enfermedades/enfermedades-vasculares-y-del-corazon/hipertension-arterial.html</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>

      <Jumbotron>
        <div className = "panel-group" id="accordion3">
          <h1> Colesterol Alto</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec1">
                  <h2>¿Que es el Colesterol alto? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec1" className="panel-collapse collapse ">
              <div className="panel-body">
                 <p>
                  <ul>
                    <li>
                      Colesterol es un tipo de grasa (lípido) en la sangre. El cuerpo produce todo el colesterol que las células necesitan para funcionar.
                    </li>
                    <li>
                      Si tiene demasiado colesterol, comienza a acumularse en su
                       arterias. (Las arterias son los vasos sanguíneos que transportan la sangre)
                       desde el corazón.) Esto se llama endurecimiento de las arterias, o
                       aterosclerosis camera.gif. Es el punto de partida para un corazón
                       y problemas de flujo sanguíneo. La acumulación puede estrechar las arterias y hacer
                       es más difícil que la sangre fluya a través de ellos.
                      </li> 
                    </ul>
                  </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec2">
                  <h2>Síntomas <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>
                      El colesterol alto no causa síntomas, se frecuentemente se diagnostica con pruebas de sangre que mide los niveles de colesterol

                    </li>
                    <li>
                      Algunas personas con trastornos de lípidos raros pueden tener síntomas como
                       bultos en la piel, manos o pies, que son causados por depósitos de
                       colesterol extra y otros tipos de grasa.
                    </li>
                  </ul>
                </p>              
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec3">
                  <h2>Tipos Comunes <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Diferentes tipos de Colesterol.
                  <ul>
                    <li>
                      LDL, el colesterol malo, puede aumentar el riesgo de enfermedades cardiovasculares, ataques al corazón, y derrames cerebrales.
                    </li>
                    <li>
                      HDL, el colesterol bueno, está vinculado con disminuir el riesgo de enfermedades cardiovasculares, ataque al corazón, y derrames cerebrales.

                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec4">
                  <h2>Problemas de Salud <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
            La acumulacion del colesterol puede conducir a coagulos de sangre peligrosos y inflamación que pueden causar ataques al corazón y derrames cerebrales. 

          </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec5">
                  <h2>Encuentra más información <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Enlaces en Inglés</p>
                <ul>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                  <li><a href="www.webmd.com/cholesterol-management/tc/high-cholesterol-symptoms">www.webmd.com/cholesterol-management/tc/high-cholesterol-symptoms</a></li>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                </ul>
                <p>Enlaces en Español</p>
                  <ul>
                    <li><a href="https://www.plusesmas.com/salud/colesterol/cuantos_tipos_de_colesterol_existen/3065.html">https://www.plusesmas.com/salud/colesterol/cuantos_tipos_de_colesterol_existen/3065.html</a></li>
                    <li><a href="https://www.mayoclinic.org/es-es/diseases-conditions/high-blood-cholesterol/symptoms-causes/syc-20350800">https://www.mayoclinic.org/es-es/diseases-conditions/high-blood-cholesterol/symptoms-causes/syc-20350800</a></li>
                    <li><a href="https://mejorconsalud.com/cuales-son-los-sintomas-que-advierten-el-colesterol-alto/
                    ">https://mejorconsalud.com/cuales-son-los-sintomas-que-advierten-el-colesterol-alto/
                    </a></li>
                  </ul>
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>

      <Jumbotron>
        <div className = "panel-group" id="accordion4">
          <h1>Salud Mental</h1>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed1">
                  <h2>¿Que es la Salud Mental? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>La salud mental se refiere al estado emocional, psicológico, y bienestar social. Afecto como uno piensa, siente, y actúa. Al mismo tiempo determina como uno maneja el estres, se relaciona con otros, y toma decisiones haciendo a la salud mental importante en todas las etapas de la vida.
                </p>
                <p>
                Factores importantes para la salud mental incluyen:
                  <ul>
                    <li>
                      Biologia, como los genes o la composicion quimica del cerebro
                    </li>
                    <li>
                      Experiencias, como abuso o trauma          
                    </li>
                    <li>
                      Historial familiar de problemas mentales
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed2">
                  <h2>Síntomas <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Sintiendose triste o deprimido</li>
                    <li>Pensamiento confundido o reduccion en la habilidad de concentracion</li>
                    <li>Miedos o preocupaciones excesivas</li>
                    <li>Cambios de ánimo excesivos</li>
                    <li>Retracción de los amigos o de las actividades</li>
                    <li>Cansancio excesivo, enegia baja, problemas de dormir</li>
                    <li>Hábitos anormales de comer</li>
                    <li>Habitos anormales de uso de drogas, fumar, o beber</li>
                    <li>La inhabilidad para poder hacer tareas matutinas, como proveer por la familia or ir al trabajo o a la escuela</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed3">
                  <h2>Tipos Comunes <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>Trastorno de ansiedad</li>
                    <li>Depression</li>
                    <li>Trastorno de estrés postraumático</li>
                    <li>Alcolismo</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed4">
                  <h2>La Importancia para la Comunidad Latina <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>
                      Muchos latinos no buscan tratamiento porque no reconocen los síntomas 
                      de enfermedades mentales o donde buscar ayuda.
                    </li>
                    <li>
                     Mientras que los latinos muestran susceptibilidad a las enfermedades 
                     mentales similares a la población general, hay disparidades en el acceso 
                     al tratamiento y la calidad del tratamiento accesible a ellos. Esta 
                     desigualdad los pone a un riesgo más alto para enfermedades mentales 
                     más severas y más persistentes.
                    </li>
                    <li>
                      La comunidad latina es menos propensa a buscar tratamiento para las 
                      enfermedades mentales. Un estudio en el 2001 del Cirujano General encontró 
                      que solo el 20% de los latinos con síntomas de desórdenes psicológicos hablan 
                      con su doctor sobre los síntomas. Y solo el 10% contacta a un especialista de 
                      salud mental. Y sin tratamiento, ciertas condiciones mentales pueden empeorar 
                      o volverse desabilitantes.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed5">
                  <h2>Encuentra más información <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Enlaces en Inglés</p>
                  <ul>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health ">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health </a></li>
                    <li><a href="https://www.mayoclinic.org/diseases-conditions/mental-illness/basics/symptoms/con-20033813">https://www.mayoclinic.org/diseases-conditions/mental-illness/basics/symptoms/con-20033813</a></li>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health</a></li>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health</a></li>
                    <li><a href="https://www.mentalhealth.gov/basics/what-is-mental-health/index.html">https://www.mentalhealth.gov/basics/what-is-mental-health/index.html</a></li>
                  </ul>
                <p>Enlaces en Español</p>
                  <ul>
                    <li><a href="https://medlineplus.gov/spanish/mentalhealth.html">https://medlineplus.gov/spanish/mentalhealth.html</a></li>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health/La-salud-mental-en-la-comunidad-latina">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health/La-salud-mental-en-la-comunidad-latina</a></li>
                    <li><a href="http://www.who.int/features/factfiles/mental_health/es/">http://www.who.int/features/factfiles/mental_health/es/</a></li>
                  </ul>
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>

      <Jumbotron>
        <div className = "panel-group" id="accordion5">
          <h1>Obesidad</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee1">
                  <h2>¿Que es la Obesidad? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2> 
                </a>
              </h1>
            </div>
            <div id="collapsee1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  La obesidad es cuanto el cuerpo tiene mucha grasa corporal. Obesidad ocurren a 
                  través del tiempo cuando uno consume más calorías que el cuerpo puede quemar. 
                  El balance entre el ingreso y consumo de calorias difiere entre persona a persona. 
                  Factores que pueden afectar el peso incluyen la composición genética, comer en 
                  exceso, el consumo de comidas altas en grasa, y una vida sedentaria. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee2">
                  <h2>Síntomas <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p> 
                  Un poco de sobrepeso no causara problemas perceptibles, pero a como se 
                  acumlan los kilogramos de sobrepeso sintomas que afectan la salud 
                  matutina pueden desarrollarse. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee3">
                  <h2>Problemas de Salud <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  La obesidad puede incrementar los riesgos de diabetes, enfermedades del 
                  corazón, derrames cerebrales, artritis, y unos cánceres. Si uno esta obeso, 
                  bajando un 5 a 10 por ciento de peso puede prevenir or retrasar unas 
                  enfermedades. Un ejemplo, seria perder 10 a 20 libras cuando uno pesa 200 
                  libras.
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee4">
                  <h2>La Importancia para la Comunidad Latina<span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  <ul>
                    <li>La obesidad aumenta el riesgo de todos los tipos de muertes.</li>
                    <li>La obesidad occurre frecuentemente en las comunidades latinas por falta de acceso a comidas saludabless a precios accesibles.</li>
                    <li>Los latinos tienden a ser menos activos al no tener acceso a lugares seguros para jugar o hacer actividades fisicas.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee5">
                  <h2>Encuentra más información <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Enlaces en Inglés</p>
                  <ul>
                    <li><a href="https://stateofobesity.org/disparities/latinos/">https://stateofobesity.org/disparities/latinos/</a></li>
                    <li><a href="www.healthdirect.gov.au/obesity-symptoms">www.healthdirect.gov.au/obesity-symptoms</a></li>
                    <li><a href="www.medlineplus.gov/obesity.html">www.medlineplus.gov/obesity.html</a></li>
                    <li><a href="https://medlineplus.gov/obesity.html">https://medlineplus.gov/obesity.html</a></li>
                  </ul>
                <p>Enlaces en Español</p>
                  <ul>
                    <li><a href="https://medlineplus.gov/spanish/obesity.html">https://medlineplus.gov/spanish/obesity.html</a></li>
                    <li><a href="http://www.who.int/mediacentre/factsheets/fs311/es/">http://www.who.int/mediacentre/factsheets/fs311/es/</a></li>
                    <li><a href="http://www.cuidateplus.com/enfermedades/digestivas/obesidad.html">http://www.cuidateplus.com/enfermedades/digestivas/obesidad.html</a></li>
                  </ul>
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>
    </Col>
    </Row>
    <Row>
      <DisclaimerEs />
    </Row>
  </Container>;

export default TipsEs;

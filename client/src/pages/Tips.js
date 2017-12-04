import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";
import "./Tips.css";
const Tips = () =>
  <Container fluid className="container">
    <Row>
    <div className="col-md-10 col-md-offset-1">
      <h1 className="text-center">Health Tips</h1>
      <Jumbotron>
        <div className="panel-group" id="accordion">
          <h1>Diabetes</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className= "panel-title">
                <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                  <h2>What is Diabetes? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                 Diabetese is a group of metabolic disorders in which high blood sugar levels over a prolonged period of time. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea2">
                  <h2>Symptoms <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea2" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>frequent urination & thirst</li>
                    <li>increased hunger</li>
                    <li>fatigue</li>
                    <li>blurred vision</li>
                    <li>numbness in hands or feet</li>
                    <li>unexplained weight loss</li>
                  </ul>
                <p>
                  Symptoms occur quickly in type 1 diabetes, but may take years or may not occur for type 2 diabetes.
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea3">
                  <h2>Common Types <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea3" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                      <li>Type 1</li>
                      <p><small>The body does not make insulin, since the immune system attacks and destroys cells that produce insulin. Its is usually diagnosed early in life.</small></p>
                      <li>Type 2</li>
                      <p><small>The body does not make or use insulin well. it can be developed at any age. It is the most common type.</small></p>
                      <li>Gestational</li>
                      <p><small>Develops in some women when they are pregnant. It usually gos away after the pregnancy is over. There is, however, a greater chance to develop Type 2 later in life.</small></p>
                    </ul>
                    
              </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea4">
                  <h2>Health Problems <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p> Diabetes can cause:</p>
                  <ul>
                    <li>heart disease</li>
                    <li>stroke</li>
                    <li>kidney disease</li>
                    <li>eye problems</li>
                    <li>nerve damage</li>
                    <li>foot problems</li>
                  </ul>
                
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
                
                  <ul>
                    <li>Latinos, both males and females have a higher risk of developing Type 2 Diabetes than whites.</li>
                    <li>They are 50% more likely to die from diabetes than whites.</li>
                    <li>Latinos with diabetes had higer rates of heart desease death than those without diabetes</li>
                    <li>The prevalence of diabetes among the Latino population is expected to increase 127%</li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapsea6">
                  <h2>Find more information <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsea6" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Links in English</p>
                  <ul>
                    <li><a href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63">https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63</a></li>
                    <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
                    <li><a href="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg"></a>http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg</li>
        
                  </ul>
                
                <p>
                  Links in Spanish
                </p>  
                  <ul>
                    <li><a href="https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg">https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg</a></li>
                    <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
                    <li>
                      <a href= "http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg">
                        <img style= {{height: 100}} src="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg" />

                      </a>
                      </li>
                  </ul>
                
              </div>
            </div>
          </div>

        </div>
      </Jumbotron>

      <Jumbotron>
        <div className = "panel-group" id="accordion2">
          <h1>High Blood Pressure</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb1">
                  <h2>What is High Blood Pressure? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  High blood pressure (hypertension) is defined as high pressure (tension) in the arteries, which are the vessels that carry blood from the heart to the rest of the body. 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb2">
                  <h2>Symptoms <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  High Blood pressure may not have any symtoms and so hypertension has been labled "the silent killer."
                </p>
                  <ul>
                    <li>Headache</li>
                    <li>Dizziness</li>
                    <li>Shortness of breath</li>
                    <li>Blurred vision</li>
                    <li>Feeling of pulsatins in the neck or head</li>
                    <li>Nausea</li>
                  </ul>
                  
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb3">
                  <h2>Health Problems <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  Longstanding high blood pressur can lead to multiple complications including:
                </p>
                  <ul>
                    <li>heart attack and other cardiovascular diseases</li>
                    <li>kidney disease</li>
                    <li>stroke</li>
                  </ul>
                
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
                
                  <ul>
                    <li>Diseases of the heart and srokes rank as the top killer of Latino Americans</li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseb5">
                  <h2>Find more information <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapseb5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Links</p>
                <ul>
                  <li><a href="http://www.your-heart-health.com/en-US/heart-disease-facts/hispanic-americans.html">http://www.your-heart-health.com/en-US/heart-disease-facts/hispanic-americans.html</a></li>
                  <li><a href="https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_causes_high_blood_pressure">https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_causes_high_blood_pressure</a></li>
                  <li><a href="https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_is_high_blood_pressure">https://www.medicinenet.com/high_blood_pressure_hypertension/article.htm#what_is_high_blood_pressure</a></li>
                  
                </ul>
                <p>Spanish Links</p>
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
          <h1>High Cholestorol</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec1">
                  <h2>What is High Cholesterol? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec1" className="panel-collapse collapse ">
              <div className="panel-body">
                 
                  <ul>
                    <li>
                      Cholesterol is a type of fat (lipid) in your blood. Your cells need cholesterol, and your body makes all it needs. But you also get cholesterol from the food you eat.
                    </li>
                    <li>
                      If you have too much cholesterol, it starts to build up in your arteries. (Arteries are the blood vessels that carry blood away from the heart.) This is called hardening of the arteries, or atherosclerosis camera.gif. It is the starting point for some heart and blood flow problems. The buildup can narrow the arteries and make it harder for blood to flow through them.
                      </li> 
                    </ul>
                 
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec2">
                  <h2>Symptoms <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec2" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>
                      High cholesterol does not cause symptoms. It is usually found during a blood test that measures cholesterol levels.
                    </li>
                    <li>
                      Some people with rare lipid disorders may have symptoms such as bumps in the skin, hands, or feet, which are caused by deposits of extra cholesterol and other types of fat.
                    </li>
                  </ul>
                              
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec3">
                  <h2>Common Types <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  There are different types of cholesterol.
                </p>
                  <ul>
                    <li>
                      LDL is the "bad" cholesterol. It's the kind that can raise your risk of heart disease, heart attack, and stroke.
                    </li>
                    <li>
                      HDL is the "good" cholesterol. It's the kind that is linked to a lower risk of heart disease, heart attack, and stroke.
                    </li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec4">
                  <h2>Health Problems <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  The buildup can also lead to dangerous blood clots and inflammation that can cause heart attacks and strokes.
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion3" href="#collapsec5">
                  <h2>More Information <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsec5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Links</p>
                <ul>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                  <li><a href="www.webmd.com/cholesterol-management/tc/high-cholesterol-symptoms">www.webmd.com/cholesterol-management/tc/high-cholesterol-symptoms</a></li>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                  <li><a href="https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview">https://www.webmd.com/cholesterol-management/tc/high-cholesterol-overview</a></li>
                </ul>
                <p>Spanish Links</p>
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
          <h1>Mental Health</h1>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed1">
                  <h2>What is Mental Health? <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Mental Health is a person's emotional, pyschological, and social well-being. It affects how one thinks, feels and acts. While also determining how one handles stress, relates to others, and makes choices, thus making it important in all stages of life.
                </p>
                <p>
                Important factors in mental health are:
                </p>
                  <ul>
                    <li>
                      Biological, like genes or brain chemistry
                    </li>
                    <li>
                      Life experiences, like trauma or abuse
                    </li>
                    <li>
                      Family history of mental health problems
                    </li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed2">
                  <h2>Symptoms <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed2" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>feeling sad or down</li>
                    <li>confused thinking or reduced ability to concentrate</li>
                    <li>excessive feers or worries</li>
                    <li>Extreme mood changes</li>
                    <li>Withdrawal from friends and activities</li>
                    <li>significant tiredness, low energy, or problems sleeping</li>
                    <li>abnormal eating habits</li>
                    <li>abnormal use of drugs, smoking, or drinking</li>
                    <li>inablity to perform daily tasks, like taking care of family or getting to work or school</li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed3">
                  <h2>Common Types <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed3" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>Anxiety disorder</li>
                    <li>Major Depression</li>
                    <li>Post-Traumatic Stress Disorder</li>
                    <li>Alcoholism</li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed4">
                  <h2>Significance to the latino community <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed4" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>
                      Many Latinos do not seek treatment because they don't recognize the signs and symptoms of mental health conditions or know where to find help
                    </li>
                    <li>
                     While Latino communities show similar susceptibility to mental illness as the general population, unfortunately, we experience disparities in access to treatment and in the quality of treatment we receive. This inequality puts us at a higher risk for more severe and persistent forms of mental health conditions.
                    </li>
                    <li>
                      As a community, Latinos are less likely to seek mental health treatment. A 2001 Surgeon General’s report found that only 20% of Latinos with symptoms of a psychological disorder talk to a doctor about their concerns. Only 10% contact a mental health specialist. Yet, without treatment, certain mental health conditions can worsen and become disabling.
                    </li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion4" href="#collapsed5">
                  <h2>Find more Information <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsed5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Links</p>
                  <ul>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health ">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health </a></li>
                    <li><a href="https://www.mayoclinic.org/diseases-conditions/mental-illness/basics/symptoms/con-20033813">https://www.mayoclinic.org/diseases-conditions/mental-illness/basics/symptoms/con-20033813</a></li>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health</a></li>
                    <li><a href="https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health">https://www.nami.org/Find-Support/Diverse-Communities/Latino-Mental-Health</a></li>
                    <li><a href="https://www.mentalhealth.gov/basics/what-is-mental-health/index.html">https://www.mentalhealth.gov/basics/what-is-mental-health/index.html</a></li>
                  </ul>
                <p>Spanish Links</p>
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
          <h1>Obesity</h1>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee1">
                  <h2>What it Obesity <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2> 
                </a>
              </h1>
            </div>
            <div id="collapsee1" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  Obesity means having too much body fat. Obesity happens over time when you eat more calories than you use. The balance between calories-in and calories-out differs for each person. Factors that might affect your weight include your genetic makeup, overeating, eating high-fat foods, and not being physically active 
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee2">
                  <h2>Symptoms <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p> 
                  Being a little overweight may not cause many noticeable problems. However, once you are carrying a few extra kilograms (or pounds), you may develop symptoms that affect your daily life
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee3">
                  <h2>Health Problems <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  Obesity increases your risk of diabetes, heart disease, stroke, arthritis, and some cancers. If you have obesity, losing even 5 to 10 percent of your weight can delay or prevent some of these diseases. For example, that means losing 10 to 20 pounds if you weigh 200 pounds Obesity increases your risk of diabetes, heart disease, stroke, arthritis, and some cancers.
                </p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee4">
                  <h2>Significance to the Latino Community <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee4" className="panel-collapse collapse ">
              <div className="panel-body">
                
                  <ul>
                    <li>Obesity tends to increase the risks of all types of death.</li>
                    <li>Tends to occur in the latino community due to the lack of access to affordable healthy food.</li>
                    <li>Latinos are less likely to maintain physically active due to have limited access to safe places to play or be active.</li>
                  </ul>
                
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion5" href="#collapsee5">
                  <h2>Find more Information <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h2>
                </a>
              </h1>
            </div>
            <div id="collapsee5" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>Links</p>
                  <ul>
                    <li><a href="https://stateofobesity.org/disparities/latinos/">https://stateofobesity.org/disparities/latinos/</a></li>
                    <li><a href="www.healthdirect.gov.au/obesity-symptoms">www.healthdirect.gov.au/obesity-symptoms</a></li>
                    <li><a href="www.medlineplus.gov/obesity.html">www.medlineplus.gov/obesity.html</a></li>
                    <li><a href="https://medlineplus.gov/obesity.html">https://medlineplus.gov/obesity.html</a></li>
                  </ul>
                <p>Spanish Links</p>
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
    </div>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
  </Container>;

export default Tips;

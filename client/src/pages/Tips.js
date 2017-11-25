import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";

const Tips = () =>
  <Container fluid>
    <Row>
    <Col size ="md-10, col-md-offset-1">
      <h1>Health Tips</h1>
      <Jumbotron>
        <h1>Diabetes</h1>
        <h2>What is Diabetes?</h2>
        <p>
         A group is metabolic disorders in which high blood sugar levels over a prolonged period of time. 
        </p>
        <h2>Symptoms</h2>
        <p>
          <ul>
            <li>frequent urination & thirst</li>
            <li>increased hunger</li>
            <li>fatigue</li>
            <li>blurred vision</li>
            <li>numbness in hands or feet</li>
            <li>unexplained weight loss</li>
          </ul>
          Symptoms occur quickly in type 1 diabetes, but may take years or may not occur for type 2 diabetes.
        </p>
        <h2>Common Types</h2>
        <p>
        <ul>
            <li>Type 1</li>
            <p><small>The body does not make insulin, since the immune system attacks and destroys cells that produce insulin. Its is usually diagnosed early in life.</small></p>
            <li>Type 2</li>
            <p><small>The body does not make or use insulin well. it can be developed at any age. It is the most common type.</small></p>
            <li>Gestational</li>
            <p><small>Develops in some women when they are pregnant. It usually gos away after the pregnancy is over. There is, however, a greater chance to develop Type 2 later in life.</small></p>
          </ul>
          </p>
        <h2>Health Problems</h2>
        <p> Diabetes can cause:
          <ul>
            <li>heart disease</li>
            <li>stroke</li>
            <li>kidney disease</li>
            <li>eye problems</li>
            <li>nerve damage</li>
            <li>foot problems</li>
          </ul>
        </p>
        <h2>Significance to the latino community</h2>
        <p>
          <ul>
            <li>Latinos, both males and females have a higher risk of developing Type 2 Diabetes than whites.</li>
            <li>They are 50% more likely to die from diabetes than whites.</li>
            <li>Latinos with diabetes had higer rates of heart desease death than those without diabetes</li>
            <li>The prevalence of diabetes among the Latino population is expected to increase 127%</li>
          </ul>
          <h2>Find more information</h2>
          <p>Links in English
            <ul>
              <li><a href="https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63">https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=63</a></li>
              <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
              <li><a href="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg"></a>http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg</li>
              <li><p><img src="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg" alt="Infographic on Diabetic Eye Disease Among Hispanics/Latinos" border="0" width="1545" height="1000" /></p></li>
              <li><a href=""></a></li>
            </ul>
          </p>
          <p>Links in Spanish
            <ul>
              <li><a href="https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg">https://infografiasencastellano.files.wordpress.com/2012/06/ladiabetes.jpg</a></li>
              <li><a href="http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/">http://www.diabetes.org/newsroom/press-releases/2014/diabetes-among-hispanics-all-are-not-equal.html?referrer=https://www.google.com/</a></li>
              <li><a href="http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg"></a>http://www.nei.nih.gov/sites/default/files/nehep-images/NEI_OJOinfographic.jpg</li>
             
              <li><a href=""></a></li>
            </ul>
          </p>
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>High Blood Pressure</h1>
        <h2>What is High Blood Pressure</h2>
          <p>
            High blood pressure (hypertension) is defined as high pressure (tension) in the arteries, which are the vessels that carry blood from the heart to the rest of the body. 
          </p>
        <h2>Symtoms</h2>
          <p>
            <ul>
              <li>Headache</li>
              <li>Dizziness</li>
              <li>Shortness of breath</li>
              <li>Blurred vision</li>
              <li>Feeling of pulsatins in the neck or head</li>
              <li>Nausea</li>
            </ul>
            High Blood pressure may not have any symtoms and so hypertension has been labled "the silent killer."
          </p>
        <h2>Health Problems</h2>
          <p>
            Longstanding high blood pressur can lead to multiple complications including:
            <ul>
              <li>heart attack and other cardiovascular diseases</li>
              <li>kidney disease</li>
              <li>stroke</li>
            </ul>
          </p>
        <h2>Significance to the Latino Community</h2>
          <p>
            <ul>
              <li>Diseases of the heart and srokes rank as the top killer of Latino Americans</li>
              <li></li>
            </ul>
          </p>
        <h2></h2>
          <p>
         
          </p>
      </Jumbotron>
      <Jumbotron>
        <h1>High Cholestorol</h1>
        <h2>what it high cholesterol ?</h2>
            <p>
              Cholesterol is a type of fat (lipid) in your blood. Your cells need cholesterol, and your body makes all it needs. But you also get cholesterol from the food you eat.
              If you have too much cholesterol, it starts to build up in your arteries. (Arteries are the blood vessels that carry blood away from the heart.) This is called hardening of the arteries, or atherosclerosis camera.gif. It is the starting point for some heart and blood flow problems. The buildup can narrow the arteries and make it harder for blood to flow through them. 
              </p>

        <h2>Symptoms</h2>
          <p>
            High cholesterol does not cause symptoms. It is usually found during a blood test that measures cholesterol levels.
            Some people with rare lipid disorders may have symptoms such as bumps in the skin, hands, or feet, which are caused by deposits of extra cholesterol and other types of fat.
          </p>

        <h2>Common types if applicable</h2>
          <p>There are different types of cholesterol.
          <ul>
            <li>
              LDL is the "bad" cholesterol. It's the kind that can raise your risk of heart disease, heart attack, and stroke.
            </li>
            <li>
              HDL is the "good" cholesterol. It's the kind that is linked to a lower risk of heart disease, heart attack, and stroke.
            </li>
          </ul>
        </p>

        <h2>health problems it causes</h2>
          <p>
            The buildup can also lead to dangerous blood clots and inflammation that can cause heart attacks and strokes.
          </p>

        <h2></h2>
          <p>
         
          </p>
      </Jumbotron>

      <Jumbotron>
        <h1>Mental Health</h1>
        <h2>Concerns</h2>
          <p>
         Many Latinos do not seek treatment because they don't recognize the signs and symptoms of mental health conditions or know where to find help
          </p>
        <h2>Symptoms</h2>
          <p>
            <ul>
              <li>feeling sad or down</li>
              <li>confused thinking or reduced ability to concentrate</li>
              <li>excessive feers or worries</li>
              <li>Extreme mood changes</li>
              <li>Withdrawal from friends and activities</li>
              <li>significant tiredness, low energy, or problems sleeping</li>
            </ul>
          </p>

        <h2>Common Types</h2>
          <p>
            <ul>
              <li>Anxiety disorder</li>
              <li>Major Depression</li>
              <li>Post-Traumatic Stress Disorder</li>
              <li>Alcoholism</li>
            </ul>
          </p>

        <h2>Significance to the latino community</h2>
          <p>
         While Latino communities show similar susceptibility to mental illness as the general population, unfortunately, we experience disparities in access to treatment and in the quality of treatment we receive. This inequality puts us at a higher risk for more severe and persistent forms of mental health conditions.

        As a community, Latinos are less likely to seek mental health treatment. A 2001 Surgeon General’s report found that only 20% of Latinos with symptoms of a psychological disorder talk to a doctor about their concerns. Only 10% contact a mental health specialist. Yet, without treatment, certain mental health conditions can worsen and become disabling.
          </p>
      </Jumbotron>

      <Jumbotron>
        <h1>Obesity</h1>
        <h2>what it obesity</h2> 
          <p>Obesity means having too much body fat. Obesity happens over time when you eat more calories than you use. The balance between calories-in and calories-out differs for each person. Factors that might affect your weight include your genetic makeup, overeating, eating high-fat foods, and not being physically active 
          </p>

        <h2>Symptoms</h2>
          <p> 
            Being a little overweight may not cause many noticeable problems. However, once you are carrying a few extra kilograms (or pounds), you may develop symptoms that affect your daily life
          </p>

        <h2>health problems </h2>
          <p>
            Obesity increases your risk of diabetes, heart disease, stroke, arthritis, and some cancers. If you have obesity, losing even 5 to 10 percent of your weight can delay or prevent some of these diseases. For example, that means losing 10 to 20 pounds if you weigh 200 pounds Obesity increases your risk of diabetes, heart disease, stroke, arthritis, and some cancers.
          </p>

        <h2>Significance to the Latino Community</h2>
          <p>
            <ul>
              <li>Among </li>
            </ul>
          </p>
        
      </Jumbotron>
    </Col>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
  </Container>;

export default Tips;

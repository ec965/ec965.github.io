import React, { useState } from 'react';
import PropTypes from 'prop-types';
//formik & yup
import { Formik, Form as FMKForm, useField } from 'formik';
import * as Yup from 'yup';
//bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
//sounds
import useSound from 'use-sound';
import countDownSfx from './sounds/beep0.mp3';
import moveSfx from './sounds/beep1.mp3';
import stopSfx from './sounds/beep2.mp3';
import finishSfx from './sounds/finish.mp3';

function FormInput (props){
  const [field, meta] = useField(props);

  return(
    <Form.Group controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type="text"
        name={props.name}
        isInvalid={meta.touched && meta.error}
        {...field}
      />
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

FormInput.propTypes = {
  controlId : PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

function WorkoutForm (props){
  return(
    <>
      <Formik
        // don't forget to change these back later
        initialValues={{
          sets: '',
          reps: '',
          active: '',
          rest: '',
        }}
        validationSchema={Yup.object({
          sets: Yup.number()
            .positive('No negative sets please.')
            .integer('No decimals please.')
            .required('Required'),
          reps: Yup.number()
            .positive('No negative reps please.')
            .integer('No decimals please.')
            .required('Required'),
          active: Yup.number()
            .positive('No negative active time please.')
            .integer('No decimals please.')
            .required('Required'),
          rest: Yup.number()
            .positive('No negative rest time please.')
            .integer('No decimals please.')
            .required('Required'),
        })}
        onSubmit={props.onSubmit}
      >
        <FMKForm>
          <Form.Row>
            <Col xs={props.colSpace}>
              <FormInput
                controlId="sets"
                name="sets"
                label="Sets"
              />
            </Col>
            <Col xs={props.colSpace}>
              <FormInput
                controlId="reps"
                name="reps"
                label="Repititions"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={props.colSpace}>
              <FormInput
                controlId="active"
                name="active"
                label="Active Time"
              />
            </Col>
            <Col xs={props.colSpace}>
              <FormInput
                controlId="rest"
                name="rest"
                label="Rest Time"
              />
            </Col>
          </Form.Row>
          <Row>
            <Col xs={props.colSpace}>
              <Button 
                variant="success" 
                type={props.B1Type} 
                onClick={props.B1OnClick}
              >
                Start
              </Button>
            </Col>
            <Col xs={props.colSpace}>
              <Button 
                variant={props.B2Variant} 
                onClick={props.B2OnClick}
              >
                {props.B2Label}
              </Button>
            </Col>
          </Row>
        </FMKForm>
      </Formik>
    </>
  );
}

WorkoutForm.propTypes = {
  onSubmit: PropTypes.func,
  colSpace: PropTypes.number,
  B1Type: PropTypes.string,
  B1OnClick: PropTypes.func,
  B2Variant: PropTypes.string,
  B2Label: PropTypes.string,
  B2OnClick: PropTypes.func,
  onChangeSets: PropTypes.func,
  onChangeTime: PropTypes.func,
  onChangeReps: PropTypes.func,
};

function Display (props){
  return(
    <Jumbotron >
      <Row>
        <Col>
          <h4 style={{fontSize: props.fontSize}}>Sets: {props.sets}</h4>
        </Col>
        <Col>
          <h4 style={{fontSize: props.fontSize}}>Reps: {props.reps}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 style={{fontSize: props.fontSize}}>Action: {props.action}</h4>
        </Col>
        <Col>
          <h4 style={{fontSize: props.fontSize}}>Time: {props.time}</h4>
        </Col>
      </Row>
    </Jumbotron>
  );
}

Display.propTypes ={
  sets: PropTypes.number,
  reps: PropTypes.number,
  action: PropTypes.string,
  time: PropTypes.number,
  fontSize: PropTypes.string,
};

//idk, i guess it has to be global... Doesn't seem right but it's what works
//this would probably be a place to use redux...
var pauseVar = false;//this controls logic
var formSets = 0;
var formReps = 0;
var formActive = 0;
var formRest = 0;

export default function WorkoutApp (){
  //recording form values
  // const [formSets, setFormSets] = useState(0);
  // const [formReps, setFormReps] = useState(0);
  // const [formActive, setFormActive] = useState(0);
  // const [formRest, setFormRest] = useState(0);

  const [inProgress, setInProgress] = useState(false);
  const [pause, setPause] = useState(false);//this controls the button2 color and label

  //for displaying and saving progress
  const [currSets, setCurrSets] = useState(0);
  const [currReps, setCurrReps] = useState(0);
  const [currActive, setCurrActive] = useState(0);
  const [currRest, setCurrRest] = useState(0);

  //display controls
  const [currAction, setCurrAction] = useState('Stop');
  const [currTime, setCurrTime] = useState(0);
  
  //sounds
  const [volume, setVolume] = useState(.5);
  const [playMove] = useSound(moveSfx,{volume: volume});
  const [playStop] = useSound(stopSfx,{volume: volume});
  const [playFinish] = useSound(finishSfx,{volume: volume});
  const [playCountDown] = useSound(countDownSfx, {volume: volume});

  //font size
  const [fontSize, setFontSize] = useState(2);

  //stop the app if out of focus


  const handlePause = () => {
    setPause(!pause);
    pauseVar = !pauseVar;
  }

  const handleRestart = () => {
    setPause(!pause);
    pauseVar = !pauseVar;
    count(currSets, currReps, currActive, currRest);
  }

  const handleReset = () => {
    setPause(!pause);
    pauseVar = !pauseVar;
    trackCurrent (0,0,0,0);
    setCurrAction('Stop');
    setCurrTime(0);
    setInProgress(false);
  }

  const handleSubmit = (values) =>{
    formSets = values.sets;
    formReps = values.reps;
    formActive = values.active;
    formRest = values.rest;
    // setFormSets(values.sets);
    // setFormReps(values.reps);
    // setFormActive(values.active);
    // setFormRest(values.rest);
    setInProgress(true);

    count(parseInt(values.sets), parseInt(values.reps), parseInt(values.active), parseInt(values.rest), 2);
  }
  
  //save the current state of the app so we can stop and strat
  const trackCurrent = (sets, reps, active, rest) =>{
    setCurrSets(sets);
    setCurrReps(reps);
    setCurrActive(active);
    setCurrRest(rest);
  }

  //timer core function
  var counter;
  //stop the app if we go to a different route... it's needed....
  const thisWindow = window.location.href;

  const count = (sets, reps, active, rest, countdown=0)=>{
    console.log('sets', sets, 'reps', reps, 'active', active, 'rest', rest);

    trackCurrent(sets, reps, active, rest);
    if (pauseVar || (thisWindow != window.location.href)){
      clearTimeout(counter);
      return;
    }

    else if (countdown > 0){
      if (countdown == 2){
        setCurrAction('Ready!');
      }
      if (countdown == 1){
        setCurrAction('Set!');
      }
      playCountDown();
      counter = setTimeout(count, 1000, sets, reps, active, rest, countdown-1);
    }

    else if (sets>0){
      if (reps>0){
        if(active >0){
          if (active == formActive){
            playMove();
          }
          setCurrAction('Move!');
          setCurrTime(active);
          counter = setTimeout(count, 1000, sets, reps, active-1, rest);
        }
        else if(rest > 0){
          if (rest == formRest){
            playStop();
          }
          setCurrAction('Rest.');
          setCurrTime(rest);
          counter = setTimeout(count, 1000, sets, reps, active, rest-1);
        }
        else{
          count(sets, reps-1, formActive, formRest);
        }
      }
      else{
        count(sets-1, formReps, formActive, formRest);
      }
    }
    else{
      setCurrSets(0);
      setCurrReps(0);
      setCurrTime(0);
      setCurrAction("Finished!");
      playFinish();
      setInProgress(false);
    }
  }

  const handleVolume = (event)=>{
    setVolume(event.target.value/100);
  }
  const handleFontSize = (event)=>{
    setFontSize(event.target.value/10);
  }
  
  return(
    <>
      <Row>
        <Col>
          <WorkoutForm
            onSubmit={handleSubmit}
            colSpace={2}
            B1Type={inProgress ? null : 'submit'}
            B1OnClick={inProgress && pause ? handleRestart : null}
            B2Variant={inProgress && pause ? "info" : "danger"}
            B2Label={inProgress && pause ? 'Reset' : 'Stop'}
            B2OnClick={inProgress && pause ? handleReset : handlePause}
          />
        </Col>
      </Row>
      <Row style={{marginTop: 20}}>
        <Col>
          <Form.Group controlId='soundRangeSlider'>
            <Form.Label>Volume: {Math.round(volume*100)}</Form.Label>
            <Form.Control 
              value={volume*100}
              type="range"
              onChange={handleVolume}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId='fontRangeSlider'>
            <Form.Label>Font Size: {Math.round(fontSize*10)}</Form.Label>
            <Form.Control 
              value={fontSize*10}
              type="range"
              onChange={handleFontSize}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Display
            sets={currSets}
            reps={currReps}
            time={currTime}
            action={currAction}
            fontSize= {fontSize+'em'}
          />
        </Col>
      </Row>
    </>
  );
}

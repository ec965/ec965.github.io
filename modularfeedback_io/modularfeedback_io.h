//Enoch Chau 2020: Adopted from Dr. Michael Klopfer, built for modularity
//Negative feedback
//built for SX1509 GPIO expander to interface with relay control pin
#ifndef MODULARFEEDBACK_IO_H
#define MODULARFEEDBACK_IO_H
#include <Arduino.h>
#include <SparkFunSX1509.h>

//******************Class for negative feedback control*******************
class NegFeedback_io{
  private:
    // Class Member Variables
    // These are initialized at startup
    //Interface Configuration Pins

    //Sensor calibration factors - this lets you use a sensor with a
    float PC1_gain; //Pressure sensor correction gain
    float PC1_offset;  //Pressure sensor correction offset

    //Hardware Pins - define your sensor pins and the output control pin for your connected load (assumed via a relay)
    int Sensor_Pin; // pin for sensor input, generally some analog input
    int RelayCtrl_1_Pin; // pin for control (generally a relay)

    int direct; //direct or inverse control (direct (true) = heating, reverse (false) = cooling) - basically does the action of your controlled device move the value toward your setpoint in a positive or negative direction.  Get this wrong and you will not get control, your controlled device wills tay on forever and keep moving in the wrong direction from the set point.
    double upper_hysteresis_1; //value for overshoot hysteresis (your calibrated units)
    double lower_hysteresis_1; //value for undershoot hysteresis (your calibrated units)
    int min_trans_time; // minimum time in a state (value in ms), prevents rapid switching for compressors or likewise which can not be rapidly cycled
    double pressure_set1;  //  Control setpoint value (your calibrated units)
    unsigned long runtime=0; //tracker for runtime
    bool RelayStatus_1=0; //status of relay
    bool overrideindicator=0; //used to detect millis() rollover

    // These maintain the current state
    unsigned long lastruntime=0;//used to detect millis() rollover and indicate transitions
    unsigned long lastswitcheventtime=0; //time in millis() since last switch event

    SX1509* io;
  public:
    // Constructor - creates a NegFeedback Object
    // and initializes the member variables and state
    NegFeedback_io(int readpin, int ctrlpin, double setp, double highhys, double lowhys, int dir, int trans, float gain, float offset, bool initialstate, SX1509* gpio_expander);
    void ChangeSetPoint(double setp);
    void ReInitializeSystem (int readpin, int ctrlpin, double setp, double highhys, double lowhys, int dir, int trans, float gain, float offset, bool initialstate, SX1509 *gpio_expander);
    bool UpdateFeedback();
  }


#endif

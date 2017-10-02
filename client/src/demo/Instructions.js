import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import Subheader from 'material-ui/Subheader';
import React from 'react';

const Instructions = () => (
  <div>
    <Subheader>Instructions</Subheader>
    <Stepper
      activeStep={0}
      orientation={'vertical'}
    >
      <Step>
        <StepLabel>Run the code to see it's output</StepLabel>
      </Step>
      <Step>
        <StepLabel>Alter the print statement to see it change</StepLabel>
      </Step>
      <Step>
        <StepLabel>Change the editor settings</StepLabel>
      </Step>
      <Step>
        <StepLabel>Refresh the page to see that the code and settings are unchanged</StepLabel>
      </Step>
    </Stepper>
  </div>
);

export default Instructions;

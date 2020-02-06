import React from 'react';
import './App.css';
import CustomDatePicker from './CustomDatePicker';

function App() {
  return (
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="form-group mb-4">
            <div id="dateform" class="input-group p-0 shadow-sm">
              <CustomDatePicker> </CustomDatePicker>
              <div class ="input-group-append"><span class="input-group-text px-4"><i class="fa fa-clock-o"></i></span></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

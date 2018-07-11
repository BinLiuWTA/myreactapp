import * as React from 'react';
import './App.css';
import { Test } from './Test';
interface ITestState {
  selectedValue: string;
}

export class App extends React.Component<{}, ITestState> {

  public render() {
    return (
      <div className="App">
         <p> app works </p>
         <Test/>
      </div>
    );
  }
}


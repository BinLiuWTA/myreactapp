import * as React from 'react';

import { Moment } from 'moment';
import * as moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ITestState {
  property: string;
  executer: string;
  jobDate: Moment;
  mileage: number;
  description: string;
}

export class Test extends React.Component<{}, ITestState> {

  constructor() {
    super({});
    this.state = { 
                   description: "",
                   executer: "",
                   jobDate: moment(),
                   mileage: 0,
                   property: ""
                }
    this.changeDate = this.changeDate.bind(this);
  }

  
 
  public render() {
        return (
            <div>
                <div>
                    <label htmlFor="property">
                        Properties 
                    </label>
                    <select className="form-control" id="property" onChange={ e => this.changeProperty(e) } value={ this.state.property }>
                        <option value="102 Chinabrook Ct">102 Chinabrook Ct</option>
                        <option value="103 Caraleigh Ct">103 Caraleigh Ct</option>
                        <option value="107 Chinabrook Ct">107 Chinabrook Ct</option>
                    </select>
                    <h1>{this.state.property}</h1>
                </div>
                <div>
                    <label htmlFor="executer">
                        Executer  
                    </label>
                    <select className="form-control" id="executer" onChange={ e => this.changeExecuter(e) } value={ this.state.executer }>
                        <option value="Desong Yu">Desong Yu</option>
                        <option value="Bin Liu">Bin Liu</option>
                    </select>
                    <h1>{this.state.executer}</h1>
                </div>
                <DatePicker
                    selected={this.state.jobDate}
                    onChange={this.changeDate}
                />
                <div>
                   <label htmlFor="mileage">
                        Mileage
                    </label>
                    <input 
                        type="number" 
                        name = "mileage"
                        className = "form-control"
                        value={this.state.mileage} 
                        onChange={e => this.inputMileage(e) } 
                    />
                </div>

                <div>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input 
                        type="text" 
                        name = "description"
                        className = "form-control"
                        value={this.state.description} 
                        onChange={e => this.inputDescription(e) } 
                    />
                </div>
                <button type="button"
                    className="btn btn-default"
                    onClick={ () => this.onSave()}
                >
                Save
                </button>
                <div> {JSON.stringify(this.state)}</div>
            </div>
        );
  }

  private changeProperty(event: React.FormEvent<HTMLSelectElement>) {
    // No longer need to cast to any - hooray for react!
    const selectedPropertyValue: string = event.currentTarget.value;

    this.setState({
        property: selectedPropertyValue
    });
  }
  private changeExecuter(event: React.FormEvent<HTMLSelectElement>) {
    // No longer need to cast to any - hooray for react!
    const selectedExecuterValue: string = event.currentTarget.value;

    this.setState({
        executer: selectedExecuterValue
    });
  }

  private changeDate(date:Moment) {
    this.setState({
      jobDate: date
    });
  }

  private inputMileage(event: React.ChangeEvent<HTMLInputElement>) {
    const mileageData : number = parseInt(event.currentTarget.value, 10);
    this.setState({
      mileage : mileageData
    });
  }

  private inputDescription(event: React.ChangeEvent<HTMLInputElement>) {
    const descriptionData : string = event.currentTarget.value;
    this.setState({
      description : descriptionData
    });
  }

  private onSave() {
    console.log("submit data"+ JSON.stringify(this.state));
  }

}


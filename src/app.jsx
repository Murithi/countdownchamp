import React, {
    Component
} from 'react';
import './app.css';
import Clock from './clock';
import { Form, FormControl, Button } from 'react-bootstrap';
class App extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadLine:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.changedDeadline = this.changedDeadline.bind(this);
    }
    changedDeadline() { 
        this.setState({ deadline: this.state.newDeadLine});
    }
    handleChange(e) { 
        this.setState({ newDeadLine: e.target.value });
    }
    render() {
        return (
            <div className="App" >
                <div className="App-Title"> Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl onChange={this.handleChange}
                        placeholder="new date" />
                <Button onClick={this.changedDeadline}>Submit</Button>
                </Form>

            </div >
        );
    }
}

export default App;
import React, {Component} from 'react';
import './builder.css';
import Select from 'react-select';

class Builder extends Component {
    constructor(props){
        super(props);
        this.state = {
            rowItems: [],
            firstSelectedOption: null,
            secondSelectedOption: null,
            inputValue: ''
        }
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleSecondChange = this.handleSecondChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFirstChange = (selectedOption) => {
        this.setState({ firstSelectedOption: selectedOption });
        console.log('Option selected:', selectedOption);
    }

    handleSecondChange = (selectedOption) => {
        this.setState({ secondSelectedOption: selectedOption });
        console.log('Option selected:', selectedOption);
    }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState });
    }

    render() {
        const firstOptions = [
            {value: 'userFirstName', label: 'User First Name'},
            {value: 'userLastName', label: 'User Last Name'},
            {value: 'userEmail', label: 'User Email'},
            {value: 'userNumOfVisits', label: 'User # of Visits'},
            {value: 'pageResponseTime', label: 'Page Response Time'}
        ];
        let secondOptions;
        if(this.state.firstSelectedOption === 'userNumOfVisits' || 'pageResponseTime'){
            secondOptions = [
                {value: 'startsWith', label: 'starts with'},
                {value: 'doesNotStartWith', label: 'does not start with'},
                {value: 'equals', label: 'equals'},
                {value: 'doesNotEqual', label: 'does not equal'},
                {value: 'contains', label: 'contains'},
                {value: 'doesNotContain', label: 'does not contain'}
            ];
        } else {
            secondOptions = [
                {value: 'range', label: 'range'},
                {value: 'lessThanOrEqual', label: 'less than or equal'},
                {value: 'equals', label: 'equals'},
                {value: 'doesNotEqual', label: 'does not equal'},
                {value: 'greaterThanOrEqual', label: 'greater than or equal'}
            ];
        }
        const { firstSelectedOption, secondSelectedOption } = this.state;
        return(
            <div className='builder-wrap'>
                <div className='top-body-wrap'>
                    <header>
                        <h2>SEARCH FOR SESSIONS</h2>
                    </header>
                    <div className='builder-body'>
                        <div className='row-item'>
                            <Select
                                value={firstSelectedOption}
                                onChange={this.handleFirstChange}
                                options={firstOptions}
                                className='first-select'
                            />
                            <Select
                                value={secondSelectedOption}
                                onChange={this.handleSecondChange}
                                options={secondOptions}
                                className='second-select'
                            />
                            <input name='inputValue' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                        </div>
                        <div className='and-btn-wrap'>
                            <button>AND</button>
                        </div>
                    </div>
                </div>
                <footer>
                    <button>SEARCH</button>
                </footer>
            </div>
        )
    }
}

export default Builder;
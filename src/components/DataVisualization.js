import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component} from 'react'
// import {csv} from 'd3-request';
import * as d3 from 'd3';
import data from '../data/WHO-COVID-19-global-table-data.csv';

class DataVisualization extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        d3.csv(data).then(function(data) {
            console.log(data)
        }).catch(function(err) {
            throw err;
        })
    }

    render() {
        return(
            <h1>Global Covid Cases</h1>
            // <h1>Global Access to Technology and Education</h1>
        )
    }
}

export default DataVisualization
import React from "react";
import {FilterH2, FilterItem, FilterStyle, Input, Label, Span} from "./styles";
import { observer } from "mobx-react";
import store from "../../store/store";

@observer
export default class Filter extends React.Component<any> {
    state = {
        stops: [
            {value: '0', isChecked: true, stops: 'All'},
            {value: '1', isChecked: true, stops: 'Non-stop'},
            {value: '2', isChecked: true, stops: '1 stop'},
            {value: '3', isChecked: true, stops: '2 stops'},
            {value: '4', isChecked: true, stops: '3 stops'}
        ]
    }

    handleInputChange = () => {
        // this.setState({
        //     stops: 
        //   });
    }

    render() {
        return (
            <FilterStyle>
                <FilterH2>Stops</FilterH2>
                {/* <FilterItem>
                    <Label>All
                        <Input 
                            value='0' 
                            checked={this.state.isGoing}
                            onChange={() => {store.filter(store.ticketsData, '0')}}
                        />
                        <Span/>
                    </Label>
                </FilterItem> */}
                    {this.state.stops.map((stop: any, index: number) => {
                        return (
                            <FilterItem key={index}>
                                <Label>{stop.stops}
                                    <Input 
                                        value={stop.value} 
                                        checked={stop.isChecked}
                                        onChange={this.handleInputChange}
                                        onClick={() => {
                                            store.filter(store.ticketsData, stop.value)
                                        }}
                                    />
                                    <Span/>
                                </Label>
                            </FilterItem>
                        )
                    })}         
            </FilterStyle>
        )
    }
}
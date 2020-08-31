import React  from "react";
import { observer } from "mobx-react";
import store from "../../store/store";
import {
    SortButtonOne,
    SortButtonsWrapper,
    SortButtonTwo
} from "./styles";

@observer
export default class Sort extends React.Component {
    state = {
        sort: false
    };
    sortHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ sort: !this.state.sort })
        store.sortTickets(event.currentTarget.value)
    }
    render() {
        const { sort } = this.state;
        return (
            <SortButtonsWrapper>
                <SortButtonOne 
                    value='0'
                    sort={sort}
                    disabled={!sort}
                    onClick={this.sortHandler}
                >Cheapest</SortButtonOne>
                <SortButtonTwo
                    value='1'
                    sort={sort}
                    disabled={sort}
                    onClick={this.sortHandler}
                >Quickest</SortButtonTwo>
            </SortButtonsWrapper>
        )
    }
}
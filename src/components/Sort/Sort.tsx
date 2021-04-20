import React from "react";
import { observer } from "mobx-react-lite";
import {
    SortButtonOne,
    SortButtonsWrapper,
    SortButtonTwo
} from "./styles";
import { useStore } from "../../store";

const Sort = () => {
    const [sort, setSort] = React.useState<boolean>(false);
    const { ticketsStore } = useStore();

    const sortHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSort(!sort)
        ticketsStore.sortTickets(event.currentTarget.value)
    }
    return (
        <SortButtonsWrapper>
            <SortButtonOne
                value='0'
                sort={sort}
                disabled={!sort}
                onClick={sortHandler}
            >Cheapest</SortButtonOne>
            <SortButtonTwo
                value='1'
                sort={sort}
                disabled={sort}
                onClick={sortHandler}
            >Quickest</SortButtonTwo>
        </SortButtonsWrapper>
    )
}

export default observer(Sort);
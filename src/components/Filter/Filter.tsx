import React from "react";
import { FilterH2, FilterStyle } from "./styles";
import { observer } from "mobx-react-lite";
import {useStore} from "../../store";

interface Stop {
    value: string
    isChecked: boolean
    label: string
}

const Filter = () => {
    const { ticketsStore } = useStore();
    const [stopsTest , setStops] = React.useState<any>({
        0: 'All',
        1: 'Non-stop',
        2: '1 stop',
        3: '2 stops',
        4: '3 stops'
    })
    console.log([...ticketsStore.countOfStops])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // for(let stop of stops) {
        //     stop.isChecked(!stop.isChecked);
        // }
    }

    return (
        <FilterStyle>
            <FilterH2>Stops</FilterH2>
            {/*{stops.map((stop: Stop) => {*/}
            {/*    return (*/}
            {/*        <FilterItem key={stop.value}>*/}
            {/*            <Label>{stop.label}*/}
            {/*                <Input*/}
            {/*                    value={stop.value}*/}
            {/*                    checked={stop.isChecked}*/}
            {/*                    onChange={handleInputChange}*/}
            {/*                />*/}
            {/*                <Span/>*/}
            {/*            </Label>*/}
            {/*        </FilterItem>*/}
            {/*    )*/}
            {/*})}*/}
        </FilterStyle>
    )
}

export default observer(Filter);
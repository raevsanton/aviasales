import React from 'react';
import { observer } from 'mobx-react-lite';
import { SortButtonOne, SortButtonsWrapper, SortButtonTwo } from './styles';
import { useStore } from '../../store';
import { SortValue } from '../../store/types';

export const Sort = observer(() => {
  const [sort, setSort] = React.useState<boolean>(false);
  const { ticketsStore: { sortBy } } = useStore();

  const sortHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = event.target as HTMLButtonElement;
    setSort(!sort);
    sortBy(value as SortValue);
  };

  return (
    <SortButtonsWrapper>
      <SortButtonOne
        value="cheapest"
        sort={sort}
        disabled={!sort}
        onClick={sortHandler}
      >
        Cheapest
      </SortButtonOne>
      <SortButtonTwo
        value="fastest"
        sort={sort}
        disabled={sort}
        onClick={sortHandler}
      >
        Quickest
      </SortButtonTwo>
    </SortButtonsWrapper>
  );
});

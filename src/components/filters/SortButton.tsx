import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FC, MouseEvent, useState } from 'react';
import StyledToggleButton from './styled/ToggleButton.styled';
import { ISortButton } from './types';



const SortButton: FC<ISortButton> = ({handleSort}) => {
  const [value, setValue] = useState(false);

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newOrder: boolean | null,
  ) => {
    if (newOrder !== null) {
      setValue(newOrder)
      handleSort(newOrder);
    }
  };

  const control = {
    value: value,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack>
      <ToggleButtonGroup size="small" {...control}>
        <StyledToggleButton value={true}>
          <KeyboardArrowUpIcon />
        </StyledToggleButton>
        <StyledToggleButton value={false}>
          <KeyboardArrowDownIcon />
        </StyledToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default SortButton;

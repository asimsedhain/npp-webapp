import React from 'react';
import styled from "styled-components";
import { Menu, MenuItem, Divider, Button } from '@material-ui/core';

const SortMenuText = styled.div`
    font-weight: bold;
    text-align:center;
    font-size: 1.15rem;
`;

const ListTitleSideButton = styled.div`
    font-weight: bold;
`;

export default function SortMenue() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}> <ListTitleSideButton>...</ListTitleSideButton> </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <SortMenuText> Sort By </SortMenuText>
        <Divider />
        <MenuItem onClick={handleClose}>Name</MenuItem>
        <MenuItem onClick={handleClose}>Prerequisite</MenuItem>
        <MenuItem onClick={handleClose}>Semester</MenuItem>
        <MenuItem onClick={handleClose}>Level</MenuItem>
      </Menu>
    </div>
  );
}

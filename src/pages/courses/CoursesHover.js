import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

function CoursesHover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Button sx={{color:'primary.main'}}>Courses</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href='/courses/domestic'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>Domestic IT Help Desk Attendent</MenuItem></Link>
        <Link href='/courses/assitantele'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>Assistant Electrician</MenuItem></Link>
        <Link href='/aboutus'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>Handset Repair Engineering</MenuItem></Link>
        <Link href='/aboutus'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>General Duty Assistant</MenuItem></Link>
        <Link href='/aboutus'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>F&B Service Steward</MenuItem></Link>
        <Link href='/aboutus'>
        <MenuItem sx={{color:'primary.dark'}} onClick={handleClose}>Sewing Machine Operator</MenuItem></Link>
      </Menu>
    </div>
  );
}

export default CoursesHover;


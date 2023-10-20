import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Box } from '@mui/material';

function ProjectHover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [nsdcSubMenuAnchorEl, setNsdcSubMenuAnchorEl] = useState(null);
  const [tnstcSubMenuAnchorEl, setTnstcSubMenuAnchorEl] = useState(null);
  const [daySubMenuAnchorEl, setDaySubMenuAnchorEl] = useState(null);
  const [dduSubMenuAnchorEl, setDduSubMenuAnchorEl] = useState(null);
  const [momaSubMenuAnchorEl, setMomaSubMenuAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNsdcSubMenuOpen = (event) => {
    setNsdcSubMenuAnchorEl(event.currentTarget);
  };

  const handleTnstcSubMenuOpen = (event) => {
    setTnstcSubMenuAnchorEl(event.currentTarget);
  };
  const handleDaySubMenuOpen = (event) => {
    setDaySubMenuAnchorEl(event.currentTarget);
  };

  const handleDduSubMenuOpen = (event) => {
    setDduSubMenuAnchorEl(event.currentTarget);
  };

  const handleMomaSubmenuOpen = (event) => {
    setMomaSubMenuAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
    setNsdcSubMenuAnchorEl(null);
    setTnstcSubMenuAnchorEl(null);
    setDaySubMenuAnchorEl(null);
    setDduSubMenuAnchorEl(null);
    setMomaSubMenuAnchorEl(null);
  };

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Box sx={{ color: 'primary.main' }}>Projects</Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/projects/NSDC">
          <MenuItem
            onMouseEnter={handleNsdcSubMenuOpen}
            onClick={handleClose}
          >
            NSDC
          </MenuItem>
        </Link>
        <MenuItem
          onMouseEnter={handleTnstcSubMenuOpen}
          onClick={handleClose}
        >
          TNSTC
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Day-NULM
        </MenuItem>
        <MenuItem onClick={handleClose}>
          DDU-GKY
        </MenuItem>
        <MenuItem onClick={handleClose}>
          MoMA
        </MenuItem>
      </Menu>

      {/* Sub-menu for NSDC */}
      <Menu
        anchorEl={nsdcSubMenuAnchorEl}
        open={Boolean(nsdcSubMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link href='/projects/NSDC/PMKK-PMKVY'>
          <MenuItem onClick={handleClose}>PMM-PMKVY</MenuItem>
        </Link>
        <Link href='/projects/NSDC/RPL'>
          <MenuItem onClick={handleClose}>RPL</MenuItem>
        </Link>
      </Menu>

      {/* Sub-menu for TNSTC */}
      <Menu
        anchorEl={tnstcSubMenuAnchorEl}
        open={Boolean(tnstcSubMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* Add Day sub-menu items here */}
        <Link href='/projects'>
          <MenuItem onClick={handleClose}>Shortterm</MenuItem>
        </Link>
      </Menu>


      {/* Sub-menu for Day */}
      <Menu
        anchorEl={daySubMenuAnchorEl}
        open={Boolean(daySubMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* Add TNSTC sub-menu items here */}
        <Link href='/projects/TNSTC/Shortterm'>
          <MenuItem onClick={handleClose}>Shortterm</MenuItem>
        </Link>
      </Menu>
      {/* Sub-menu for DDu */}
      <Menu
        anchorEl={dduSubMenuAnchorEl}
        open={Boolean(dduSubMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* Add DDU sub-menu items here */}
        <Link href='/projects'>
          <MenuItem onClick={handleClose}>Shortterm</MenuItem>
        </Link>
      </Menu>

       {/* Sub-menu for NSDC */}
       <Menu
        anchorEl={momaSubMenuAnchorEl}
        open={Boolean(momaSubMenuAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link href='/projects/NSDC/PMKK-PMKVY'>
          <MenuItem onClick={handleClose}>PMM-PMKVY</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default ProjectHover;




import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Divider } from '@mui/material';

function HoverDropdownMenu() {
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
      <Button sx={{color:'primary.main'}}>About us</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href='/aboutus' underline="none">
        <MenuItem onClick={handleClose} sx={{color:'primary.main'}}>About us</MenuItem></Link>
        <Divider/>
        <Link href='/aboutus/vision' underline="none">
        <MenuItem onClick={handleClose} sx={{color:'primary.main'}}>Vission</MenuItem></Link>
        <Divider/>
        <Link href='/aboutus' underline="none">
        <MenuItem onClick={handleClose} sx={{color:'primary.main'}}>Option 1</MenuItem></Link>
      </Menu>
    </div>
  );
}

export default HoverDropdownMenu;



// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Link from 'next/link';

// function HoverDropdownMenu() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleOpen = (event) => {
//     console.log('Mouse Enter');
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     console.log('Mouse Leave');
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         sx={{ color: 'primary.main' }}
//         onMouseEnter={handleOpen}
//         onMouseLeave={handleClose}
//       >
//         About us
//       </Button>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <Link href='/aboutus'>
//           <MenuItem onClick={handleClose}>About us</MenuItem>
//         </Link>
//         <Link href='/aboutus/vision'>
//           <MenuItem onClick={handleClose}>Vision</MenuItem>
//         </Link>
//         <Link href='/aboutus'>
//           <MenuItem onClick={handleClose}>Option 1</MenuItem>
//         </Link>
//       </Menu>
//     </div>
//   );
// }

// export default HoverDropdownMenu;

// import React from 'react';
// import Popover from '@mui/material/Popover';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Link from 'next/link';

// const AboutUsMenu = ({ anchorEl, open, onClose }) => {
//   const menuLinks = [
//     { label: 'About', path: '/aboutus' },
//     { label: 'Vision', path: '/aboutus/vision' },
//     { label: 'Histsory', path: '/history' },
//   ];
// //   const menuCourses = [
// //     { label: 'About', path: '/aboutus' },
// //     { label: 'Vision', path: '/aboutus/vision' },
// //     { label: 'History', path: '/history' },
// //   ];

//   return (
//     <div>
//     <Popover
//       open={open}
//       anchorEl={anchorEl}
//       onClose={onClose}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <List>
//         {menuLinks.map((link, index) => (
//           <Link href={link.path} key={index}>
//             <ListItem Button onClick={onClose}>
//               <ListItemText primary={link.label} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </Popover>
//      {/* <Popover
//      open={open}
//      anchorEl={anchorEl}
//      onClose={onClose}
//      anchorOrigin={{
//        vertical: 'bottom',
//        horizontal: 'center',
//      }}
//      transformOrigin={{
//        vertical: 'top',
//        horizontal: 'center',
//      }}
//    >
//      <List>
//        {menuCourses.map((link, index) => (
//          <Link href={link.path} key={index}>
//            <ListItem button onClick={onClose}>
//              <ListItemText primary={link.label} />
//            </ListItem>
//          </Link>
//        ))}
//      </List>
//    </Popover> */}
//    </div>
//   );
// };

// export default AboutUsMenu;

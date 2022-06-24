import React from "react";
import {
  Box,
  Link,
  Card,
  Stack,
  Avatar,
  Typography,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Icon,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function EditDeleteButton({ handleDelete, handleEdit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleDelete} sx={{ mx: 1 }}>
        <Stack direction="row" spacing={2}>
          <DeleteIcon />
          <Box sx={{ flexGrow: 1 }} />
          Delete
        </Stack>
      </MenuItem>

      <MenuItem onClick={handleEdit} sx={{ mx: 1 }}>
        <Stack direction="row" spacing={2}>
          <EditIcon />
          <Box sx={{ flexGrow: 1 }} />
          Edit
        </Stack>
      </MenuItem>
    </Menu>
  );
  return (
    <Box>
      <IconButton onClick={handleProfileMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      {renderMenu}
    </Box>
  );
}

export default EditDeleteButton;

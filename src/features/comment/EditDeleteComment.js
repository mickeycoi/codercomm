import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import EditCommentForm from "./EditCommentForm";

function EditDeleteComment({ handleDelete, handleEdit, commentId }) {
  // Handel Modal Edit
  // **handle delete
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  // ** handle edit
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 0.4,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  //-----------------------------------
  //handel button del & edit
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
      <MenuItem sx={{ mx: 1 }}>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          style={{
            backgroundColor: "red",
            flexGrow: 1,
            display: "flex",
            alignItems: "start",
          }}
          onClick={handleOpenDelete}
        >
          {" "}
          Delete
        </Button>
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack spacing={2}>
              <Typography variant="h5">
                Your comment will be deleted. Are you sure?{" "}
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  variant="contained"
                  onClick={handleDelete}
                  style={{ backgroundColor: "red" }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseDelete}
                  style={{ backgroundColor: "red" }}
                >
                  No
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </MenuItem>

      <MenuItem sx={{ mx: 1 }}>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          style={{ flexGrow: 1, display: "flex", justifyContent: "start" }}
          onClick={handleOpenEdit}
        >
          {" "}
          Edit
        </Button>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack spacing={2}>
              <Typography variant="h5">Edit you post here </Typography>
              <EditCommentForm
                commentId={commentId}
                handleCloseEdit={handleCloseEdit}
                handleMenuClose={handleMenuClose}
              />
            </Stack>
          </Box>
        </Modal>
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

export default EditDeleteComment;

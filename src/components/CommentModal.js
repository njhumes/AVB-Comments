import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { TextField, Button, Box, Typography } from "@material-ui/core";

import {
  closeCommentsModal,
  getViewCommentsModalOpen,
} from "store/slices/view";
import { setComments, getComments } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 450,
    height: 300,
    backgroundColor: "#FFFFFF",
    margin: "auto",
  },
  input: {
    marginLeft: "25%",
    marginTop: 20,
    display: "block",
  },
  submitButton: {
    marginLeft: "35%",
    marginTop: 15,
  },
  modalTitle: {
    marginLeft: "30%",
    marginTop: 15,
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);
  const comments = useSelector(getComments);

  // I'm keeping track of what the user enters for their name and their comment in state in order to dispatch this info into the SetComments reducer function
  const [commenterName, setCommenterName] = useState();
  const [newComment, setNewComment] = useState();
  const handleClose = () => dispatch(closeCommentsModal());

  const postComment = () => {
    // The if check prevents a user from commenting without entering a name or comment
    if (commenterName && newComment) {
      dispatch(
        setComments({
          id: comments.length + 1,
          name: commenterName,
          comment: newComment,
        })
      );
    }
  };

  // For a more seamless experience when the user clicks "Submit", the comment gets posted, closes the modal, and resets the name and comment in order for the next comment to start out blank
  const submit = () => {
    postComment();
    handleClose();
    setCommenterName();
    setNewComment();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={classes.box} component="form">
        <Typography variant="h5" className={classes.modalTitle}>
          Add Comment
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Enter Name"
          className={classes.input}
          onChange={(e) => setCommenterName(e.target.value)}
          required
        />
        <TextField
          multiline
          rows="3"
          variant="outlined"
          className={classes.input}
          label="Enter Comment"
          required
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
          onClick={submit}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CommentModal;

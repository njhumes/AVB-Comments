import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { TextField, Button, Box, Grid } from "@material-ui/core";

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
    width: 500,
    height: 300,
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  commentText: {
    display: "block",
  },
}));

const CommentModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isOpen = useSelector(getViewCommentsModalOpen);
  const comments = useSelector(getComments);
  const [commenterName, setCommenterName] = useState();
  const [newComment, setNewComment] = useState();
  const handleClose = () => dispatch(closeCommentsModal());

  const postComment = () =>
    dispatch(
      setComments({
        id: comments.length + 1,
        name: commenterName,
        comment: newComment,
      })
    );

  const submit = () => {
    postComment();
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Grid className={classes.box}>
        <p>Add Comments</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Name"
          onChange={(e) => setCommenterName(e.target.value)}
        />
        <TextField
          multiline
          rows="3"
          variant="outlined"
          className={classes.commentText}
          placeholder="Enter Comment"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={submit}>Submit</Button>
      </Grid>
    </Modal>
  );
};

export default CommentModal;

import {
  Avatar,
  Container,
  Divider,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { mockComments } from "../store/api";
import { useSelector, useDispatch } from "react-redux";

import { getComments } from "store/slices/comment";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
  },
  header: {
    color: theme.palette.secondary[900],
  },
}));

const CommentUI = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const comments = useSelector(getComments);

  // This function is demonstrating how I would pull in the comments from the API endpoint rather than the mockComments file
  const fetchComments = async () => {
    try {
      const comments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const jsonComments = await comments.json();
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container className={classes.container}>
      {comments.map((comment) => {
        return (
          <Card>
            <CardHeader
              avatar={<Avatar>{comment.name[0]}</Avatar>}
              title={<h3>{comment.name}</h3>}
              className={classes.header}
            />
            <CardContent>
              <Typography component="p">{comment.comment}</Typography>
            </CardContent>
            <Divider />
          </Card>
        );
      })}
    </Container>
  );
};

export default CommentUI;

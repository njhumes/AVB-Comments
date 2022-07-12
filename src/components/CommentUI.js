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
  // I would use dispatch and my reducer setComments to set these resolved comments from the API to our global store with Redux.
  // I wanted to demonstrate my use of Promises here, however the format for the comments on this API's result is different than the mockComments format, so I continued to use mockComments in the app
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

  // This is the useEffect hook that I would call to get results from the API endpoint when the component mounts by passing in and empty array to the dependencies array.
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container className={classes.container}>
      {comments.map((comment) => {
        return (
          <Card key={comment.id}>
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

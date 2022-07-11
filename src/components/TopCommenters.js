import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "store/slices/comment";
import { List, ListItem, Avatar, ListItemText } from "@material-ui/core";

const TopCommenters = () => {
  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  const [topCommenters, setTopCommenters] = useState();

  const countComments = () => {
    let commentCount = {};
    comments.forEach((comment) => {
      if (!commentCount[comment.name]) {
        commentCount[comment.name] = 1;
      } else {
        commentCount[comment.name]++;
      }
    });
    commentCount = Object.entries(commentCount).sort((a, b) => {
      console.log("a", a, b);
      return b[1] - a[1];
    });
    console.log("comment", commentCount);
    setTopCommenters(commentCount);
  };

  useEffect(() => {
    countComments();
    console.log("eff", topCommenters);
  }, [comments]);

  console.log("top", topCommenters);
  return (
    <List>
      {topCommenters &&
        topCommenters.map((commenter) => {
          return (
            <ListItem>
              <Avatar>{commenter[0][0]}</Avatar>
              <ListItemText primary={commenter[0]} />
              <ListItemText primary={`Number of Comments: ${commenter[1]}`} />
            </ListItem>
          );
        })}
    </List>
  );
};

export default TopCommenters;

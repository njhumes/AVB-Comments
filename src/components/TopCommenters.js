import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getComments } from "store/slices/comment";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    width: 400,
    margin: "auto",
  },
  tableTitle: {
    fontWeight: "bold",
    border: "none",
    fontSize: 18,
  },
  colTitle: {
    fontWeight: "bold",
  },
}));

const TopCommenters = () => {
  const comments = useSelector(getComments);
  const classes = useStyles();

  const [topCommenters, setTopCommenters] = useState();

  // Using commentCount object as a hashmap in order to keep track of each users total comment count
  const countComments = () => {
    let commentCount = {};
    comments.forEach((comment) => {
      if (!commentCount[comment.name]) {
        commentCount[comment.name] = 1;
      } else {
        commentCount[comment.name]++;
      }
    });
    // Sorting the commentCount object in order to more easily slice out the top 3 users with the most comments
    commentCount = Object.entries(commentCount).sort((a, b) => {
      return b[1] - a[1];
    });
    // Using the slice method to access the first three users
    commentCount = commentCount.slice(0, 3);
    setTopCommenters(commentCount);
  };

  // By passing in comments into this useEffect's dependency array, it allows the app to refresh and recalculate the top commenters each time a new comment is made
  // As you add new comments in the app, you can see the Top Commenters may change if a user enters the top 3 comment count
  useEffect(() => {
    countComments();
  }, [comments]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableTitle}
              align="center"
              colSpan={2}
            >
              Top Commenters
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.colTitle}>Name</TableCell>
            <TableCell className={classes.colTitle} align="center">
              Number of Comments
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topCommenters &&
            topCommenters.map((commenter) => {
              return (
                <TableRow key={commenter[0]}>
                  <TableCell>
                    <Avatar>{commenter[0][0]}</Avatar>
                    {commenter[0]}
                  </TableCell>
                  <TableCell align="center">{commenter[1]}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopCommenters;

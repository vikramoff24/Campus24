import React from "react";
import Comment from "./Comment";
export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4 text-right">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>
      {/* if there is no comments or it is in loading state */}
      {/* {props.comments.length === 0 && !props.loading ? (
                <div className="alert text-center alert-info">
                    Be the first to comment
                </div>
            ) : null} */}
      {/* {props.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))} */}
      <Comment comment={""} /> {/* temporary because there are no comments */}
      {Object.values(props.comments).map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

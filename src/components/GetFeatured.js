import React from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/Favorite';

const getFeatured = () => {
  return (
    <div style={{background: "#E6E5FF", padding: "2em"}}>
      <h2>Want to get featured<FavoriteIcon/></h2>
      <p>
        Our contributors get reward points for every contribution they do in the
        form of review or photos.
      </p>
      <Button variant="contained" color="primary">
        Add a review
      </Button>
      <Button variant="contained" color="primary">
        Add a photo
      </Button>
    </div>
  );
};

export default getFeatured;

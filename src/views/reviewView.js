import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NavBar from '../components/navbar';

export default function ReviewsPage() {
  // for populating the table and keeping track of individual row elements
  const initialReviewState = {
    review: {},
    loading: true,
  }
  const singleReviewState = {
    rowData: {}
  }

  // get ratings table
  const [review, setReview] = useState(initialReviewState)
  useEffect(() => {
    const getReview = async () => {
      const { data } = await axios.get("http://localhost:8080/index.php/review/read")
      setReview(data)
    }
    getReview()
  }, [])

  // get row elements
  const [singleReview, setSingleReview] = useState(singleReviewState)
  const handleRowClick = (rowData) => {
    setSingleReview(rowData);
  };

  // jwt for keeping track of current logged in user
  const storedToken = localStorage.getItem("token");
  const decoded = jwtDecode(storedToken);

  // for updating the rating
  const [updateData, setUpdateData] = useState({
    username: "",
    song: "",
    artist: "",
    rating: 0,
  })
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/index.php/review/update", updateData)
      .then((response) => {
        if (response.status === 200) {
          alert("Update successful!");
          console.log("Update successful", response);
        }
      })
      .catch((error) => {
        console.log("Update failed", error);
      });
  };

  return review.loading ? (
    <div><h1 class="display-3 text-center">Loading...</h1></div>
  ) : (
    <div>
      <NavBar />
      <div className="container-lg pt-5">
        <h1 className="display-5 fw-bold">Ratings</h1>
        <p className="lead mb-4">See all the ratings here!</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="h4" style={{display:"none"}}>id</th>
              <th className="h4">Username</th>
              <th className="h4">Song</th>
              <th className="h4">Artist</th>
              <th className="h4">Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {review.map((review) => (
              <tr key={review.id} data-id={review.id}>
                <td style={{display:"none"}}>{review.id}</td>
                <td>{review.username}</td>
                <td type="button"
                    className="badge-info"
                    data-bs-toggle="modal"
                    data-bs-target="#songinfo"
                    onClick={() => handleRowClick(review)}>{review.song}
                </td>
                <td>{review.artist}</td>
                <td>{review.rating}</td>
                <td>{review.username === decoded["user_id"] && (
                    <div>
                      <button
                        className="badge badge-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#updaterating"
                        onClick={() => handleRowClick(review)}>Update
                      </button>
                      <button className="badge badge-danger mx-1">Delete</button>
                    </div>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="songinfo" aria-labelledby="songinfoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="songinfoLabel">{singleReview.song}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Artist: {singleReview.artist}</p>
              <p>Rated by: {singleReview.username}</p>
              <p>Rating: {singleReview.rating}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="updaterating" aria-labelledby="updateratingLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateratingLabel">Update your rating for {singleReview.song}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <label className="text-muted mb-1">Song</label>
                <input className="form-control mb-3"
                       type="text"
                       placeholder={singleReview.song}
                       value={singleReview.song}
                       readOnly />
                <label className="text-muted mb-1">Artist</label>
                <input className="form-control mb-3"
                       type="text"
                       placeholder={singleReview.artist}
                       value={singleReview.artist}
                       readOnly />
                <label className="text-muted mb-1">Username</label>
                <input className="form-control mb-3"
                       type="text"
                       placeholder={singleReview.username}
                       value={singleReview.username}
                       readOnly />
                <label className="mb-1">Rating</label>
                <select class="form-control" id="updatedrating" value={updateData.rating}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
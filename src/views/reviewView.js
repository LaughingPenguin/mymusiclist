import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-hot-toast';
import NavBar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reviewView.css";
import {
  starrating5,
  starrating4,
  starrating3,
  starrating2,
  starrating1,
} from "../components";

export default function ReviewsPage() {
  // for populating the table and keeping track of individual row elements
  const initialReviewState = {
    review: {},
    loading: true,
  };
  const singleReviewState = {
    rowData: {},
  };

  // get ratings table
  const [review, setReview] = useState(initialReviewState);
  useEffect(() => {
    const getReview = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/index.php/review/read"
      );
      setReview(data);
    };
    getReview();
  }, []);

  // get row elements
  const [singleReview, setSingleReview] = useState(singleReviewState);
  const handleRowClick = (rowData) => {
    setSingleReview(rowData);
    setUpdateData(rowData);
    setDeleteData(rowData);
  };

  // jwt for keeping track of current logged in user
  const storedToken = localStorage.getItem("token");
  const decoded = jwtDecode(storedToken);

  // for updating the rating
  const [updateData, setUpdateData] = useState({
    id: NaN,
    username: "",
    song: "",
    artist: "",
    rating: 1,
  });
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
      .put("http://localhost:8080/index.php/review/update", updateData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Update successful", {
            duration: 1500,
            position: 'top-right',
          });
          console.log("Update successful", response);
          setTimeout(() => window.location.reload(), 1500);
        }
      })
      .catch((error) => {
        toast.error("Update failed", {
          duration: 2000,
          position: 'top-right',
        });
        console.log("Update failed", error);
      });
  };

  // for the create reviews form
  const [formData, setFormData] = useState({
    username: decoded["user_id"],
    song: "",
    artist: "",
    rating: NaN,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(formData.rating)) {
      toast.error("A rating was not provided", {
        duration: 2000,
        position: 'top-right',
      });
    } else {
      axios
        .post("http://localhost:8080/index.php/review/create", formData)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Create successful", {
              duration: 1500,
              position: 'top-right',
            });
            console.log("Create successful", response);
            setTimeout(() => window.location.reload(), 1500);
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            toast.error("You have already created a review for this song", {
              duration: 2000,
              position: 'top-right',
            });
          } else {
            toast.error("Create failed", {
              duration: 2000,
              position: 'top-right',
            });
          }
          console.error(error);
      });
    }
  };

  // for deleting the rating
  const [deleteData, setDeleteData] = useState({
    id: NaN,
    username: "",
    song: "",
    artist: "",
    rating: NaN,
  });
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(deleteData);
    axios
      .delete("http://localhost:8080/index.php/review/delete", {
        data: deleteData,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Delete successful", {
            duration: 1500,
            position: 'top-right',
          });
          console.log("Delete successful", response);
          setTimeout(() => window.location.reload(), 1500);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          toast.error("The review you tried to delete does not exist", {
            duration: 2000,
            position: 'top-right',
          });
        } else {
          toast.error("Delete failed", {
            duration: 2000,
            position: 'top-right',
          });
        }
        console.log(error);
      });
  };

  return review.loading ? (
    <div>
      <h1 className="display-3 text-center">Loading...</h1>
    </div>
  ) : (
    <div>
      <NavBar />
      <form className="create-review-form" onSubmit={handleSubmit}>
        <h1 className="display-5 mb-3">Create a Review</h1>
        <input
          type="text"
          placeholder="song"
          value={formData.song}
          name="song"
          className="form-control bd-1"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="artist"
          value={formData.artist}
          name="artist"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <div className="rating">
          <input
            type="radio"
            name="rating"
            id="star1"
            value="5"
            className="rating-input"
            onChange={handleChange}
          />
          <label className="star-label" htmlFor="star1">
            <FontAwesomeIcon class="star" icon="fas fa-star" />
          </label>
          <input
            type="radio"
            name="rating"
            id="star2"
            value="4"
            className="rating-input"
            onChange={handleChange}
          />
          <label className="star-label" htmlFor="star2">
            <FontAwesomeIcon class="star" icon="fas fa-star" />
          </label>
          <input
            type="radio"
            name="rating"
            id="star3"
            value="3"
            className="rating-input"
            onChange={handleChange}
          />
          <label className="star-label" htmlFor="star3">
            <FontAwesomeIcon class="star" icon="fas fa-star" />
          </label>
          <input
            type="radio"
            name="rating"
            id="star4"
            value="2"
            className="rating-input"
            onChange={handleChange}
          />
          <label className="star-label" htmlFor="star4">
            <FontAwesomeIcon class="star" icon="fas fa-star" />
          </label>
          <input
            type="radio"
            name="rating"
            id="star5"
            value="1"
            className="rating-input"
            onChange={handleChange}
          />
          <label className="star-label" htmlFor="star5">
            <FontAwesomeIcon class="star" icon="fas fa-star" />
          </label>
        </div>
        <button
          className="btn btn-sm btn-primary border-0 mx-3 mt-1 rate-btn"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="container-lg pt-5">
        <h1 className="display-5 fw-bold">Ratings</h1>
        <p className="lead mb-4">See all the ratings here!</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="h4" style={{ display: "none" }}>
                id
              </th>
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
                <td style={{ display: "none" }}>{review.id}</td>
                <td>{review.username}</td>
                <td
                  type="button"
                  className="badge-info"
                  data-bs-toggle="modal"
                  data-bs-target="#songinfo"
                  onClick={() => handleRowClick(review)}
                >
                  {review.song}
                </td>
                <td>{review.artist}</td>
                <td>
                  {review.rating === "1" && (
                    <img
                      className="rate"
                      src={starrating1}
                      alt={review.rating}
                    />
                  )}
                  {review.rating === "2" && (
                    <img
                      className="rate"
                      src={starrating2}
                      alt={review.rating}
                    />
                  )}
                  {review.rating === "3" && (
                    <img
                      className="rate"
                      src={starrating3}
                      alt={review.rating}
                    />
                  )}
                  {review.rating === "4" && (
                    <img
                      className="rate"
                      src={starrating4}
                      alt={review.rating}
                    />
                  )}
                  {review.rating === "5" && (
                    <img
                      className="rate"
                      src={starrating5}
                      alt={review.rating}
                    />
                  )}
                </td>
                <td>
                  {review.username === decoded["user_id"] && (
                    <div>
                      <button
                        className="badge bg-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#updaterating"
                        onClick={() => handleRowClick(review)}
                      >
                        Update
                      </button>
                      <button
                        className="badge bg-danger mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#deleterating"
                        onClick={() => handleRowClick(review)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="songinfo"
        aria-labelledby="songinfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="songinfoLabel">
                {singleReview.song}
              </h1>
            </div>
            <div className="modal-body">
              <p>Artist: {singleReview.artist}</p>
              <p>Rated by: {singleReview.username}</p>
              <p>Rating: {singleReview.rating}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="updaterating"
        aria-labelledby="updateratingLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateratingLabel">
                Update your rating for {singleReview.song}
              </h1>
            </div>
            <div className="modal-body">
              <form>
                <label className="text-muted mb-1">Song</label>
                <input
                  className="form-control mb-3"
                  name="song"
                  type="text"
                  placeholder={singleReview.song}
                  value={updateData.song}
                  readOnly
                />
                <label className="text-muted mb-1">Artist</label>
                <input
                  className="form-control mb-3"
                  name="artist"
                  type="text"
                  placeholder={singleReview.artist}
                  value={singleReview.artist}
                  readOnly
                />
                <label className="text-muted mb-1">Username</label>
                <input
                  className="form-control mb-3"
                  name="username"
                  type="text"
                  placeholder={singleReview.username}
                  value={singleReview.username}
                  readOnly
                />
                <label className="mb-1">Rating</label>
                <select
                  className="form-control"
                  type="int"
                  name="rating"
                  onChange={handleUpdateChange}
                  id="updatedrating"
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Submit
              </button>
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleterating"
        aria-labelledby="deleteratingLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p />
              Are you sure that you want to delete your rating for{" "}
              {singleReview.song} by {singleReview.artist}?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button className="btn btn-primary" data-bs-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

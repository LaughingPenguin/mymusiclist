import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NavBar from '../components/navbar';

export default function ReviewsPage() {
  const initialReviewState = {
    review: {},
    loading: true,
  }
  const singleReviewState = {
    rowData: {}
  }

  const [review, setReview] = useState(initialReviewState)
  useEffect(() => {
    const getReview = async () => {
      const { data } = await axios.get("http://localhost:8080/index.php/review/read")
      setReview(data)
    }
    getReview()
  }, [])

  const [singleReview, setSingleReview] = useState(singleReviewState)
  const handleRowClick = (rowData) => {
    setSingleReview(rowData);
  };
  const storedToken = localStorage.getItem("token");
  const decoded = jwtDecode(storedToken);
  return review.loading ? (
    <div><h1 class="display-3 text-center">Loading...</h1></div>
  ) : (
    <div>
      <NavBar />
      <div className="container-lg pt-5">
        <h1 class="display-5 fw-bold">Ratings</h1>
        <p class="lead mb-4">See all the ratings here!</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="h4" style={{display:"none"}}>id</th>
              <th class="h4">Username</th>
              <th class="h4">Song</th>
              <th class="h4">Artist</th>
              <th class="h4">Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {review.map((review) => (
              <tr key={review.id} data-id={review.id}>
                <td style={{display:"none"}}>{review.id}</td>
                <td>{review.username}</td>
                <td type="button"
                    class="badge-info"
                    data-bs-toggle="modal"
                    data-bs-target="#songinfo"
                    onClick={() => handleRowClick(review)}>{review.song}
                </td>
                <td>{review.artist}</td>
                <td>{review.rating}</td>
                <td>{review.username === decoded["user_id"] && (
                      <>
                      <button href="" className="btn btn-success"></button>
                      <button href="" className="btn btn-success"> Delete </button>
                      </>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="modal fade" id="songinfo" aria-labelledby="songinfoLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="songinfoLabel">{singleReview.song}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Artist: {singleReview.artist}</p>
              <p>Rated by: {singleReview.username}</p>
              <p>Rating: {singleReview.rating}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
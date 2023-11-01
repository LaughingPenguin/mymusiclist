import React from "react";
import { monkeyband } from ".";

const Hero = () => {
    return (
        <div class="container my-5">
            <div class="row p-4 pe-lg-0 pt-lg-5 pb-lg-3 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">The perfect complement</h1>
                    <p class="lead">to anyone who enjoys music! Share your favorite
                    songs, hear what friends have to say about the latest albums,
                    and get recommendations for your next favorite playlist.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" class="btn btn-primary bd-0 btn-lg px-4 me-md-2">Get Started</button>
                        <button type="button" class="btn btn-primary btn-lg px-4">Questions?</button>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-0 p-0 overflow-hidden">
                    <img class="rounded-lg-3" src={monkeyband} alt="" width="720"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero;
import React from 'react';
import { rateimg, reviewimg, searchimg } from '.';

const HeroTwo = () => {
    return (
        <div class="container-lg pt-5 my-5 text-center">
            <h1 class="display-5 fw-bold lh-1">Simple and easy to use</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">with a free online account.</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col">
                    <div class="card">
                        <img src={searchimg} class="card-img-top bg-YlnMnLightBlue" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Find a song!</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={reviewimg} class="card-img-top bg-YlnMnLightBlue" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Give it stars!</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={rateimg} class="card-img-top bg-YlnMnLightBlue" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Write a review!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroTwo;
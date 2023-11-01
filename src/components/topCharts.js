import React from "react";
import { starrating35, starrating4, starrating45, goodybagsong,
         loversong, pinktapesong, scarletsong, sevensong } from ".";

const TopCharts = () => {
    return (
        <div class="container-md pt-5 my-5">
            <h1 class="display-5 fw-bold lh-1 text-center">Charts</h1>
            <div class="col-lg-6 mx-auto text-center">
                <p class="lead mb-4">Here are what our users say are the songs you should listen to!</p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 pt-3 g-5">
                <div class="col pb-4">
                    <h4 class="bg-YlnMnLightBlue p-2 border-top border-bottom text-light">Top Songs</h4>
                    <ul class="list-group list-group-light">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={scarletsong} alt="" style={{ height: 75, width: 75 }} />
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Paint the Town Red</p>
                                    <p class="text-muted mb-1">Doja Cat</p>
                                    <img src={starrating45} alt="" />
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={goodybagsong} alt="" style={{ height: 75, width: 75 }}/>
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Goodie Bag</p>
                                    <p class="text-muted mb-1">Still Woozy</p>
                                    <img src={starrating45} alt="" />
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={loversong} alt="" style={{ height: 75, width: 75 }} />
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Cruel Summer</p>
                                    <p class="text-muted mb-1">Taylor Swift</p>
                                    <img src={starrating45} alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="col pb-4">
                    <h4 class="bg-YlnMnLightBlue p-2 border-top border-bottom text-light">Trending Songs</h4>
                    <ul class="list-group list-group-light">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={scarletsong} alt="" style={{ height: 75, width: 75 }} />
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Paint the Town Red</p>
                                    <p class="text-muted mb-1">Doja Cat</p>
                                    <img src={starrating45} alt="" />
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={sevensong} alt="" style={{ height: 75, width: 75 }} />
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Seven (feat. Latto) (Explicit Ver.)</p>
                                    <p class="text-muted mb-1">Jung Kook</p>
                                    <img src={starrating4} alt="" />
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <img src={pinktapesong} alt="" style={{ height: 75, width: 75 }}/>
                                <div class="ms-3">
                                    <p class="fw-bold mb-0">Goodie Bag</p>
                                    <p class="text-muted mb-1">Still Woozy</p>
                                    <img src={starrating35} alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default TopCharts;
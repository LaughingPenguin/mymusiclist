import React from "react";

const FrequentQuestions = () => {
    return (
        <div class="container-sm pt-5 my-5 text-center">
            <h1 class="display-5 fw-bold">Frequently Asked Question</h1>
            <div class="question-container">
                <details class="question">
                    <summary>How does the rating system work on this website?</summary>
                    <p>For every song, users can rate the song from one to five stars.
                        They can also write a review for the song to further boost the visibility
                        of their rating!
                    </p>
                </details>
                <details class="question">
                    <summary>Why use this app as opposed to another music rating app on the internet?</summary>
                    <p>With our app, you can rate music, customize your profile, create
                        custom playlists depending on your favorite songs, and listen to
                        music with friends in a listening party! Our music rating app
                        is both a central place for your songs and a social place for
                        you and your friends.
                    </p>
                </details>
                <details class="question">
                    <summary>Where do I start?</summary>
                    <p>It's super easy to get started! Just hit the sign up
                        button in the top right corner and rate away!
                    </p>
                </details>
                <details class="question">
                    <summary>How do I add friends?</summary>
                    <p>Your main feed has curated music ratings that fit your
                        preferred music tastes! If you see a review you like or
                        one that resonates with you, you can click on the profile
                        name next to the review! This will take you to the reviwer's
                        profile page where you can add them as friends!
                    </p>
                </details>
                <details class="question">
                    <summary>I have a question or feedback. How do I reach out?</summary>
                    <p>Go to the Contact Us section at the bottom of the home page.
                        There, you write your question or feedback and we'll read it!
                    </p>
                </details>
            </div>
        </div>
    )
}

export default FrequentQuestions;
function saveProgress(section, questionId, isCorrect) {

    /*
     * Get existing progress
     */

    let progressData =
        JSON.parse(localStorage.getItem("progressData")) || {

            attempted: 0,
            correct: 0,
            incorrect: 0,

            questions: {},

            sections: {

                aptitude: {
                    attempted: 0,
                    correct: 0
                },

                coding: {
                    attempted: 0,
                    correct: 0
                },

                coreEEE: {
                    attempted: 0,
                    correct: 0
                },

                technicalInterview: {
                    attempted: 0,
                    correct: 0
                },

                hrInterview: {
                    attempted: 0,
                    correct: 0
                }

            }

        };


    /*
     * Make sure old progress data
     * gets the new questions object
     */

    if (!progressData.questions) {

        progressData.questions = {};

    }


    /*
     * Make sure the section exists
     */

    if (!progressData.sections[section]) {

        progressData.sections[section] = {
            attempted: 0,
            correct: 0
        };

    }


    /*
     * Create a unique key
     */

    const questionKey =
        section + "_" + questionId;


    /*
     * Check whether this question
     * was already attempted
     */

    const previousAnswer =
        progressData.questions[questionKey];


    /*
     * FIRST ATTEMPT
     */

    if (!previousAnswer) {

        progressData.questions[questionKey] = {

            correct: isCorrect

        };


        /* Overall */

        progressData.attempted++;


        if (isCorrect) {

            progressData.correct++;

        } else {

            progressData.incorrect++;

        }


        /* Section */

        progressData.sections[section].attempted++;


        if (isCorrect) {

            progressData.sections[section].correct++;

        }

    }


    /*
     * QUESTION WAS ALREADY ATTEMPTED
     */

    else {

        /*
         * If the answer changed,
         * update the statistics.
         */

        if (previousAnswer.correct !== isCorrect) {


            /* Previous answer was correct */

            if (previousAnswer.correct === true) {

                progressData.correct--;

                progressData.incorrect++;

                progressData.sections[section].correct--;

            }


            /* Previous answer was incorrect */

            else {

                progressData.incorrect--;

                progressData.correct++;

                progressData.sections[section].correct++;

            }


            /*
             * Save the new answer
             */

            previousAnswer.correct =
                isCorrect;

        }

    }


    /*
     * Save progress
     */

    localStorage.setItem(
        "progressData",
        JSON.stringify(progressData)
    );

}
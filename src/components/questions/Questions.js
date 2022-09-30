import React from 'react';

const Questions = () => {
    return (
        <div className='container my-5'>
            <div className='my-2'>
                <h3>Answer to the questions :</h3>
            </div>
            <div className="accordion accordion-flush container mt-3" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How Does React work ?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is deferent between props and State ?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Props usually help to pass data to the component.
                            and, State usually helps to change the data of a component .</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            what is another way without data load to used useEffect ?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ol>
                                <li>Running on state change: validating input field.</li>
                                <li>Running on state change: live filtering.</li>
                                <li>Running on state change: trigger animation on new array value.</li>
                                <li>Running on props change: update paragraph list on fetched API data update.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
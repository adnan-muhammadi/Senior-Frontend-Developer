

const Clock = () => {
    function strokeClock(element, deg, strokeTotal) {
        let degRotate = 0;
        for(let index =0; index < strokeTotal; index++) {
        }
    }
    return (
        <div className="clock">
            <div className="clock__strokes">
                <div className="clock__strokes-hours"></div>
                <div className="clock__strokes-minutes"></div>
            </div>
            <div className="clock__pointers">
                <div className="clock__pointers-hours"></div>
                <div className="clock__pointers-minutes"></div>
                <div className="clock__pointers-seconds"></div>
                <div className="clock__pointers-dots"></div>
            </div>
        </div>
    )
}

export default Clock;
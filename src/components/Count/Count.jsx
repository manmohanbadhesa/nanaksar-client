import './Count.scss';
import { Link } from "react-router-dom";
import samosa from "../../assets/images/samosa.jpeg"
import { useEffect, useState } from 'react';
import axios from "axios";
import Contributions from './count-subcomponent/Contributions';
const { REACT_APP_BACKEND_URL } = process.env;


const sumAmount = (arr) => {
    // console.log("sum function", arr);

    let sum = 0; // Initialize sum variable
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].amount;
    }
    // console.log(sum);
    return sum;
}


function Count() {
    // console.log("hello");
    const [count, setCount] = useState(0);
    const [contributors, setContributors] = useState([]);
    const [lastWeekContributors, setLastWeekContributors] = useState([]);
    const [date, setDate] = useState('');
    const [deadline, setDeadline] = useState('');


    useEffect(() => {
        const getContributors = async () => {
            try {
                const response = await axios.get(
                    `${REACT_APP_BACKEND_URL}/`
                );
                // console.log("data", response.data)

                // Get contributors from now until previous Saturday
                const today = new Date();
                const previousSaturday = new Date(today);
                previousSaturday.setDate(previousSaturday.getDate() - (today.getDay() + 1) % 7);
                const currentWeekContributors = response.data.filter(contributor => new Date(contributor.updated_at) >= previousSaturday);

                // Get contributors for last week (Saturday to Saturday)
                const lastWeekSaturday = new Date(previousSaturday);
                lastWeekSaturday.setDate(lastWeekSaturday.getDate() - 7);
                const lastWeekSunday = new Date(previousSaturday);
                lastWeekSunday.setDate(lastWeekSunday.getDate() - 1);
                const lastWeekContributors = response.data.filter(contributor => {
                    const contributorDate = new Date(contributor.updated_at);
                    return contributorDate >= lastWeekSaturday && contributorDate <= lastWeekSunday;
                });

                // console.log("current",currentWeekContributors);
                // console.log("last",lastWeekContributors)
                setCount(sumAmount(response.data));
                setContributors(currentWeekContributors);
                setLastWeekContributors(lastWeekContributors)

            }
            catch (e) {
                console.log(e);
            }
        };
        getContributors();

        const setInitialAndDeadline = () => {
            const today = new Date();
            const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
            if (dayOfWeek < 6) { // If it's not Saturday
                const nextSunday = new Date(today);
                nextSunday.setDate(today.getDate() + (7 - dayOfWeek)); // Get next Sunday
                const formattedInitialDate = `${nextSunday.toLocaleString('default', { month: 'long' })} ${nextSunday.getDate()}, ${nextSunday.getFullYear()}`;
                const deadlineDate = new Date(nextSunday);
                deadlineDate.setDate(deadlineDate.getDate() - 1); // Get Saturday before next Sunday
                const formattedDeadline = `Saturday ${deadlineDate.toLocaleString('default', { month: 'long' })} ${deadlineDate.getDate()}, ${deadlineDate.getFullYear()} at 12:00 am`;
                setDate(formattedInitialDate);
                setDeadline(formattedDeadline);
            }
        };
        setInitialAndDeadline();

        // Update date every Saturday at 00:00:00
        const updateDate = () => {
            const today = new Date();
            const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
            if (dayOfWeek === 6) { // Saturday
                const nextSunday = new Date(today);
                nextSunday.setDate(today.getDate() + 1); // Get next Sunday
                const formattedDate = `${nextSunday.toLocaleString('default', { month: 'long' })} ${nextSunday.getDate()}, ${nextSunday.getFullYear()}`;
                setDate(formattedDate);
                const deadlineDate = new Date(nextSunday);
                deadlineDate.setDate(deadlineDate.getDate() - 1); // Get Saturday before next Sunday
                const formattedDeadline = `Saturday ${deadlineDate.toLocaleString('default', { month: 'long' })} ${deadlineDate.getDate()}, ${deadlineDate.getFullYear()} at 12:00 am`;
                setDeadline(formattedDeadline);
            }
        };

        const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24); // Check every day

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);

        updateDate();


    }, [date])
    // console.log("hello")
    // console.log("date", date);



    return (
        <>
            <section className='count'>
                <div className="count-main">
                    <div className="seva-header">
                        <h1 className="seva-header__title">
                            SEVA
                        </h1>
                    </div>
                    <div className="count__title">
                        <h2>Samosas</h2>
                    </div>
                    <div className="count__date">
                        {date}
                    </div>
                    <div className="count-container">
                        <div className="count-target">
                            <div className="count-target__label">
                                TARGET:
                            </div>
                            100
                        </div>
                        <div className="count-live">
                            {count}
                            <img className='count-live__samosa-image' src={samosa} />
                        </div>
                    </div>
                    <div className="deadline">
                        Deadline: <br /> {deadline}
                    </div>
                    <div className="payment-links">
                        <div className="payment-value">
                            <Link to="/paymentFive" className="payment-value__link">
                                $ 5 CAD
                            </Link>
                        </div>
                        <div className="payment-value">
                            <Link to="/paymentTen" className="payment-value__link">
                                $ 10 CAD
                            </Link>
                        </div>
                    </div>
                </div>
                <Contributions contributors={contributors} />
            </section>
        </>
    )
}

export default Count;
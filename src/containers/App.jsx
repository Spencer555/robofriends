import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import { setSearchField, fetchRobots } from '../store/robotSlice';

function App() {
    const dispatch = useDispatch();
    const robots = useSelector((state) => state.robots.items);
    const searchfield = useSelector((state) => state.robots.searchfield);
    const status = useSelector((state) => state.robots.status);

    useEffect(() => {
        dispatch(fetchRobots());
    }, [dispatch]);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    };

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    if (status === 'loading') {
        return <h1>Loading....</h1>;
    }

    if (status === 'failed') {
        return <h1>Oops! Something went wrong.</h1>;
    }

    return (
        <div className="tc">
            <h1 className="tc f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;

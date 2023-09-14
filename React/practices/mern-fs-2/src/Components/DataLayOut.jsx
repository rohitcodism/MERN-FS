import { Link } from "react-router-dom";

export const DataLayOut = () => {
        return (
            <div>
                <Link to="/data/1">Data 1</Link>
                <Link to="/data/2">Data 2</Link>
                <Link to="/data/new">New Data</Link>
            </div>
        );
}
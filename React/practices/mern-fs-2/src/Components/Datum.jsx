import { useParams } from "react-router-dom";

export const Datum = () => {

    const { id } = useParams()

    return (
            <h1>Datum {id}</h1>
    );
};
import { Routes, Route } from "react-router-dom";
import { Data } from "../Pages/Data";
import { Datum } from "../Components/Datum";
import { NewData } from "../Pages/NewData";
import { DataLayOut } from "../Components/DataLayOut";

export const DataRoutes = () => {
    <>
        <DataLayOut />
        <Routes >
            <Route index element={<Data />} />
            <Route path=":id" element={<Datum />} />
            <Route path="new" element={<NewData />} />
        </Routes>
    </>
};
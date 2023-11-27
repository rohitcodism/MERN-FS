import { Container } from "@mui/material"

export default function userProfile({params} : any)
{
    return(
        <Container className="flex flex-col justify-center items-center mt-20">
            <h1>Profile</h1>
            <hr />
            <p className="text-2xl"> User Profile Page  </p>
            <span className="p-2 rounded bg-orange-500 text-black cursor-pointer">{params.id}</span>
        </Container>
    );
}
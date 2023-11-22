import Analytics from "./@analytics/page";

export default function  Layout(props) {
    return(
        <>
            <Analytics />
            {props.children}
        </>
    );
}
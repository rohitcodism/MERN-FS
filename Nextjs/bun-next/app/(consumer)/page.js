import Link from 'next/link'

export default function Home() {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems : 'center',
                width: "100%",
                textAlign: "center",
            }}
        >
            <h3>Main Page</h3>
            <br />
            <nav
                style={{
                    width: "50%",
                }}
            >
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}
                >
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/user">User</Link>
                    </li>
                    <li>
                        <Link href="/item">Item</Link>
                    </li>
                </ul>
            </nav>
            <br />
        </div>
    )
}

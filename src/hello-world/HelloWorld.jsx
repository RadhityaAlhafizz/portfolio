export default function HelloWorld(){
    return (
        <div>
            <HeaderText/>
            <BodyText/>
        </div>
    )
}

function HeaderText(){
    const text = "My Portfolio";
    return (
        <div>
            <h1 style={{
                color: "Blue",
                backgroundColor: "Black",
                alignItems: "center",
                textAlign: "center"
            }}>{text.toUpperCase()}</h1>
        </div>
    )
}

function BodyText(){
    const text = "Selamat Datang di Portofolio Saya";
    return (
        <div>
            <p>{text.toLowerCase()}</p>
        </div>
    )
}
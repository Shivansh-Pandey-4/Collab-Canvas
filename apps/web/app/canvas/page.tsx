import ClientCanvas from "../../components/drawing-page/ClientCanvas";


export default function Canvas() {

    return (
        <div>
            <ClientCanvas roomName="guest" useLocalStorage={true} />
        </div>
    )
}
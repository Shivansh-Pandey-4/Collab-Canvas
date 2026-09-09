import ClientCanvas from "../../../components/drawing-page/ClientCanvas";

export default async function DynamicCanvas({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    return (
        <div>
            <ClientCanvas useLocalStorage={false} />
        </div>
    )
}
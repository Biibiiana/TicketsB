import service from "../services/config";


export function Prueba() {
    const getData = async () => {
        const response = await service.get("/")
        console.log(response.data);
        return response.data.json;
    };
    return (
        <>
            <div onClick={getData}>Pincha Aquí</div>
        </>
    )
}

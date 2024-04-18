import { Client } from "./interfaces";

const clients: Client[] = [
    {
    name: "João Paulo",
    address: "Rua do João Paulo"
},
{
    name: "Victor Hugo",
    address: "Rua do matias"
},
{
    name: "Vinicius",
    address: "Rua Pinto Lacerda"
},
];
    


export function GET() {
    return Response.json(clients);
}

export async function POST(request: Request) {
        const form = await request.formData();
        const name = form.get('name') as string;
        const address = form.get('address') as string;

        clients.push({
                name,
                address,
        });
    

    return Response.json({ status: "Added"});
}


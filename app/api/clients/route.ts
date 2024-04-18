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
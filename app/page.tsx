import { Client } from "./api/clients/interfaces";

interface Item {
  name: string
  address: string
}

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/clients');
  const json = await response.json()

  console.log(json)

  return (
    <main>
    {
    json.map((item: Client)  => {
        return (
          <>
            <div className='border bg-gray-300 my-3 p-2 flex justify'>
              <div className='upercase flex-1'>{item.name}</div>
              <div className='flex-1 italic'>{item.address}</div>
            </div>
          </>
        );
    })}
 </main>
  );
}

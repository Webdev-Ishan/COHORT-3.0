import axios from "axios";

export default async function Profile() {
  const response = await axios.put("/Dashboard");
  const data = response.data;

  await new Promise(r=>setTimeout(r,5000)); // website will only be opened when the dat is ready with HTML

  // this whole component is the server side component which will inetract with the backend or db and only send the html
  // to the browser when data is fetched and already injected in it

  return (
    <div className="text-white">
      {data && (
        <div>
          {data.results[0].name.first} {data.results[0].name.last}
        </div>
      )}
    </div>
  );
}

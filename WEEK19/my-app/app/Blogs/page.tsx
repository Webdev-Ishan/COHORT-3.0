import axios from 'axios'

async function getBlogs(){
const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
return data.data;
}

export default async function Home() {

const response = await getBlogs();


return(
    <div>
        Hello guys whats up
        {JSON.stringify(response)}
    </div>

);

}
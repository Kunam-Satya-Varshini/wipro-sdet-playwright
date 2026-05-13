//1. The Generic API Wrapper
//Scenario: You need a reusable function to fetch data that automatically types the response.
//Task: Write a generic function fetchData<T>(url: string): Promise<T>.
 //It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. 
 //Test it by creating an Album interface and fetching data from a mock URL.

  async function fetchData<T>(url: string): Promise<T>{
    const response =  await fetch(url);
  }
  if(!response.ok){
    throw new Error ("Failed to fetch url");
  }
  const data : <T> = response.json();
  return data ;
  
interface Album {
  userId: number;
  id: number;
  title: string;
}

async function getAlbum() {
  try {
    const album = await fetchData<Album>(
      "https://jsonplaceholder.typicode.com/albums/1"
    );

    console.log("Album Title:", album.title);
    console.log("User ID:", album.userId);
    console.log("Album ID:", album.id);

  } catch (error) {
    console.error("Error:", error);
  }
}
getAlbum();
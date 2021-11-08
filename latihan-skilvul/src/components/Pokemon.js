import { useEffect, useState } from "react";
import axios from 'axios' //menggunakan axios

function Pokemon() {
  let [nama, setNama] = useState("pokemon");
  // AMBIL DARI API
  console.log(nama);

//   let [poke, setPoke] = useState([]);
//   console.log(poke);
// data array

  //data object
  let [poke, setPoke] = useState({})
  console.log(poke);
  //setiap ada perubahan pada datamaka akan terus dijalankan
  //useeffek untuk membuat efeksamping
  useEffect(() => {
    console.log("menggunaan useeffect");
    // memanggilapi
    fetch(" https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      // jika data berupa objek kemudian data arraynya  ada di dalamnya kita menambahkan
      //[] di result
     
    //   .then((result) => setPoke([result]);   //data array
      .then((result) => setPoke(result))
    //tambahkan data kosong agar idak terjadi unfinitloop
  }, []);
  return (
    <>
      {/* mengubah isi state  haru berada di dalam funcition*/}
      <h1 onClick={() => setNama("yeyen")}>hallo</h1>
      <h2>nama{nama}</h2>
      <input type="text" onChange={(e) => setNama(e.target.value)} />
      {/* memnggil data api */}
      
      {/* // data yang bisa di map hanya data aray */}
     {/* {poke.map((item) => (
        <div> */}
           {/* <img src={item.ability.url} width={50} />  */}
           {/* <h3>{item.abilities.name}</h3>
        </div> 
      ))}  */}
{/* jika data objeck maka di panggil seperti ini */}
        <h1>{poke.name}</h1>

    </>
  );
}
export default Pokemon;

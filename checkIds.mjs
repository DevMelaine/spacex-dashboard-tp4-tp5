import axios from 'axios';
(async()=>{
  try{
    const resp = await axios.get('https://api.spacexdata.com/v4/launches');
    const first10 = resp.data.slice(0,10);
    console.log(first10.map(m=>m.id));
    console.log(first10.map(m=>typeof m.id));
  }catch(e){console.error(e);}
})();

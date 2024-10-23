import axios from "axios";

export async function fetchLeads() {
    const {data} = await axios.get('http://localhost:3000/leads');
    console.log();
    return data;
  }
  
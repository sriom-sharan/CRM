import axios from "axios";

export async function fetchCampaigns() {
    const response = await axios.get('http://localhost:3000/campaign');
    return response.data;
  }
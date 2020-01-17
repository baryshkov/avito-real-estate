export default class ApiService {
  API_BASE = 'http://134.209.138.34/';

  getAllItems = async () => {
    const response = await fetch(`${this.API_BASE}items`);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${this.API_BASE}, received an error with response status 
        ${response.status}`,
      );
    }
    return response.json();
  };

  getItem = async id => {
    const response = await fetch(`${this.API_BASE}item/${id}`);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${this.API_BASE}/items, received an error with response status 
        ${response.status}`,
      );
    }
    return response.json();
  };
}

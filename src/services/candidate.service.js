export class CandidateAPI {
  constructor(baseUrl) {
    this.url = `https://cors-anywhere.herokuapp.com/${baseUrl}`;
  }

  async fetchCandidates() {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (e) {
      throw e;
    }
  }
}

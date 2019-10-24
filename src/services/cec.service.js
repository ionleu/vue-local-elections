export class CecAPI {
  constructor(report) {
    const crosUrl = "https://cors-anywhere.herokuapp.com";
    const cecUrl = "https://pv.cec.md/app1/api/localreports";
    const cecUrlQuery = "circumscriptionId=1554&electionType=3";

    this.url = `${crosUrl}/${cecUrl}/${report}?${cecUrlQuery}`;
  }

  async get() {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (e) {
      throw e;
    }
  }
}

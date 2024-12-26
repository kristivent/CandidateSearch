// TODO: Create an interface for the Candidate objects returned by the API

export default interface Candidate {
    readonly Name: string | null;
    readonly UserName: string | null;
    readonly Location: string | null;
    readonly Avatar: string | null;
    readonly Email: string | null;
    readonly Html_url: string | null;
    readonly Company: string | null;
  }
export class Profile {
  constructor(
    public name: string,
    public info: string,
    public rank: string,
    public avatar: string,
    public activity: Object,
    public links: Array<string>
  ) {  }
}

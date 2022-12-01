import { Address } from './Address';
import { Company } from './Company';

export type PropsUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export class User {
  readonly id: number;

  readonly name: string;

  readonly username: string;

  readonly email: string;

  readonly address: Address;

  readonly phone: string;

  readonly website: string;

  readonly company: Company;

  constructor(props: PropsUser) {
    this.id = props.id;
    this.name = props.name;
    this.username = props.username;
    this.email = props.email;
    this.address = props.address;
    this.phone = props.phone;
    this.website = props.website;
    this.company = props.company;
  }
}

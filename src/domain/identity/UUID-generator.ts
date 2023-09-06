import { v4 as uuidv4 } from 'uuid';
export default class UUIDGenerator {
  static create() {
    return uuidv4();
  }
}

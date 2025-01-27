import { v4 as uuidv4 } from 'uuid';

export class UUIDGenerator {
  static generateUUID(): string {
    return uuidv4();
  }
}

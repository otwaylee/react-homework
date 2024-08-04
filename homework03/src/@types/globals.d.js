// globals.d.js
import { exact, number, string } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  photo: string,
  size: number,
});
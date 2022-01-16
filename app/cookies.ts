import type { CookieOptions } from 'remix';
import { createCookie } from 'remix';

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: 'lax',
  maxAge: 604_800,
};

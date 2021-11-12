import jsSHA from 'jssha';

const toGMTString = (raw: Date) => {
  const d = new Date(raw.getTime() + raw.getTimezoneOffset() * 60 * 1000);
  const [day, month, date, year, time, suffix] = d.toString().replace(/GMT.*/, 'GMT').split(' ');
  return [`${day},`, date, month, year, time, suffix].join(' ');
};

interface AuthorizationOptions {
  id: string;
  key: string;
}

export const createAuthorization = (options: AuthorizationOptions) => {
  const attrs = [`hmac username="${options.id}"`, 'algorithm="hmac-sha1"', 'headers="x-date"'];
  const sha = new jsSHA('SHA-1', 'TEXT');
  const timeGMT = toGMTString(new Date());
  sha.setHMACKey(options.key, 'TEXT');
  sha.update(`x-date: ${timeGMT}`);
  attrs.push(`signature="${sha.getHMAC('B64')}"`);

  return {
    Authorization: attrs.join(', '),
    'X-Date': timeGMT
  };
};

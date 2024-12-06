import { RequestHandler } from 'express';

export const transformQueryParamsMiddleware: RequestHandler<
  unknown,
  unknown,
  unknown,
  Record<string, string | number>
> = (req, res, next) => {
  const keys = Object.keys(req.query);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    let value = req.query[key];

    if (typeof value === 'string') {
      console.log(`value by key [${key}] is string. Triming...`);
      value = value.trim();
      req.query[key] = value;
    }

    if (!value || isNaN(Number(value))) {
      continue;
    }

    console.log('TransformQueryNumbersMiddleware: found number in key: ', key);

    req.query[key] = Number(value);
  }

  console.log('REQ QUERY AFTER TRANSFORM: ', req.query);

  next();
};

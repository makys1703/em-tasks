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
      value = value.trim();
      req.query[key] = value;
    }

    if (!value || isNaN(Number(value))) {
      continue;
    }

    req.query[key] = Number(value);
  }

  next();
};

export function transformQueryNumbersMiddleware(req, res, next) {
  const keys = Object.keys(req.query);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = req.query[key];

    if (!value || isNaN(Number(value))) {
      continue;
    }

    req.query[key] = Number(value);
  }

  next();
}

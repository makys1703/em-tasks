export function transformQueryNumbersMiddleware(req, res, next) {
  const keys = Object.keys(req.query);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = req.query[key];

    console.log(key, value);

    if (!value || isNaN(Number(value))) {
      continue;
    }

    console.log('found number in key: ', key);

    req.query[key] = Number(value);
  }

  console.log('REQ QUERY AFTER TRANSFORM: ', req.query);

  next();
}

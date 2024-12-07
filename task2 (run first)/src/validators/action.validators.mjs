import { checkSchema } from 'express-validator';

export const createActionValidator = checkSchema({
  shopId: {
    optional: true,
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 1
      }
    }
  },
  plu: {
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 0
      }
    }
  },
  date: {
    trim: true,
    isEmpty: {
      negated: true
    },
    isISO8601: true
  },
  action: {
    trim: true,
    isEmpty: {
      negated: true
    },
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 64
      }
    }
  }
});

export const getActionsByFiltersValidator = checkSchema({
  shopId: {
    optional: true,
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 1
      }
    }
  },
  plu: {
    optional: true,
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 0
      }
    }
  },
  dateFrom: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true
    },
    isISO8601: true
  },
  dateTo: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true
    },
    isISO8601: true
  },
  action: {
    optional: true,
    trim: true,
    isEmpty: {
      negated: true
    },
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 32
      }
    }
  },
  limit: {
    optional: true,
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 1
      }
    }
  },
  page: {
    optional: true,
    isString: {
      negated: true
    },
    isInt: {
      options: {
        min: 1
      }
    }
  }
});

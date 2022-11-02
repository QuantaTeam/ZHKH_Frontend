export function DateParseFullYear(params) {
  const date = new Date(params);
  const dateOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const ruDate = new Intl.DateTimeFormat('ru', dateOptions);

  return ruDate.format(date);
}

export function TimeParse(params) {
  const date = new Date(params);
  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const ruDate = new Intl.DateTimeFormat('ru', dateOptions);

  return ruDate.format(date);
}
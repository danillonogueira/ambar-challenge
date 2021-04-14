const convertKelvinToCelsius = (temp) => Math.floor(temp - 273.15);

export const filterCityData = (data, city) => {
  const { temp, temp_min, temp_max } = data;

  return {
    city,
    temp: convertKelvinToCelsius(temp),
    min: convertKelvinToCelsius(temp_min),
    max: convertKelvinToCelsius(temp_max)
  };
};

export const getObservationsData = (snapshot) => {
  if (!snapshot.val()) {
    return [];
  }

  return Object.entries(snapshot.val())
    .map((observation, index) => {
      return {
        ...observation[1],
        key: index + 1
      };
    });
};

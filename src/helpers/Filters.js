export const convertKelvinToCelsius = (temp) => Math.floor(temp - 273.15);

export const getObservationsData = (snapshot) => {
  return Object.entries(snapshot.val())
    .map((observation, index) => {
      return {
        ...observation[1],
        key: index + 1
      };
    });
};

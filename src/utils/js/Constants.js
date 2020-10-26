const years = () => {
  let value = [];
  for (let i = 2006; i <= 2020; i++) {
    value.push(i);
  }
  return value;
};
const Constants = {
  HEADER: {
    TITLE: "SpacEx Launch Programs",
  },
  FILTERS: {
    TITLE: "Filters",
    LAUNCH_YEAR: {
      LABEL: "Launch Year",
      ITEMS: years(),
    },
    SUCCESSFUL_LAUNCH: {
      LABEL: "Successful Launch",
      ITEMS: ["True", "False"],
    },
    SUCCESSFUL_LANDING: {
      LABEL: "Successful Landing",
      ITEMS: ["True", "False"],
    },
  },
  LAUNCH: {
    LIST: [
      {
        title: "test1",
        image: "img.png",
        properties: [
          {
            label: "Mission",
            value: "123",
            label: "Launch year",
            value: 2010,
            label: "Successfull launch",
            value: "True",
            label: "Successful landing",
            value: "yes",
          },
        ],
      },
      {
        title: "test2",
        image: "img.png",
        properties: [
          {
            label: "Mission",
            value: "123",
            label: "Launch year",
            value: 2012,
            label: "Successfull launch",
            value: "True",
            label: "Successful landing",
            value: "yes",
          },
        ],
      },
      {
        title: "test3",
        image: "img.png",
        properties: [
          {
            label: "Mission",
            value: "123",
            label: "Launch year",
            value: 2015,
            label: "Successfull launch",
            value: "True",
            label: "Successful landing",
            value: "yes",
          },
        ],
      },
    ],
  },
  FOOTER: {
    LABEL: "Developed by: ",
    DEVELOPER_NAME: "Ananth",
  },
};

export default Constants;
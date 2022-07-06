const fs = require("fs");

const tours = JSON.parse(fs.readFileSync("./data/tours-simple.json", "utf-8"));

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTourById = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "FAIL",
      message: "Invalid Id",
    });
  }

  res.status(200).json({
    status: "Success",
    data: {
      tour: tour,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile("./data/tours-simple.json", JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: "Success",
      data: {
        tour: newTour,
      },
    });
  });
};
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length)
    res.status(404).json({
      status: "Fail",
      message: "Invalid Id",
    });

  res.status(200).json({
    status: "Success!",
    data: {
      tour: "Updated Tour",
    },
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length)
    res.status(404).json({
      status: "Fail",
      message: "Invalid Id",
    });
  res.status(204).json({
    status: "Success",
    data: null,
  });
};

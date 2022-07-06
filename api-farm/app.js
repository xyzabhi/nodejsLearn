const { application } = require("express");
const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//MiddleWares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
const port = 300;
app.listen(port, () => console.log(`App running at ${port}`));

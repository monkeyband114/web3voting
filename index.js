require("dotenv").config();
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");

app.use(
  fileupload({
    extended: true,
  }),
);

app.use(express.static(__dirname));
app.use(express.json());

const path = require("path");
const ethers = require("ethers");

var port = 3000;

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = proces.env.CONTRACT_ADDRESS;

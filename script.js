// validation of first name and last name
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const address = document.getElementById("address");
const infoButton = document.getElementById("info-button");
const input = document.querySelectorAll("input");

infoButton.addEventListener("click", () => {
  input.forEach((input) => (input.value = " "));
});

const validateFirstName = () => {
  const alphabet = /^[A-Za-z]+$/;
  if (!alphabet.test(firstName.value)) {
    document.getElementById("validate-first-name").innerHTML =
      "No digits and special characters are allowed";
    return false;
  } else {
    document.getElementById("validate-first-name").innerHTML = " ";
    return true;
  }
};

const validateAddress = () => {
  if (address.value.length > 35) {
    document.getElementById("address-max-characters").innerHTML =
      "Max 35 characters allowed.";
  }
};

// Showing data from the form
let arr = [];

const addData = () => {
  if (validateFirstName() && validateAddress()) {
    getData();
    arr.push({
      firstName: document.getElementById("first-name").value,
      address: document.getElementById("address").value,
    });
    localStorage.setItem("localData", JSON.stringify(arr));
    getData();
    document.getElementById(
      "information-table"
    ).innerHTML += `<tr><td>${firstName.value}</td><td>${address.value}</td></tr>`;
  }
};

const getData = () => {
  let storage = localStorage.getItem("localData");
  if (storage != null) {
    arr = JSON.parse(storage);
  }
};

const showData = () => {
  getData();
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(
      "information-table"
    ).innerHTML += `<tr><td>${arr[i].firstName}</td><td>${arr[i].address}</td></tr>`;
  }
};

showData();

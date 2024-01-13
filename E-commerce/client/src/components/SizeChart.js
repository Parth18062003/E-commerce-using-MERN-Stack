import React from "react";

const SizeChart = ({ productType, tags }) => {
  const getMenSneakerSizes = () => {
    // Define men's sneaker size data
    return [
      { size: "6", usSize: "6.5", cms: "24.5" },
      { size: "7", usSize: "7.5", cms: "25.5" },
      { size: "8", usSize: "8.5", cms: "26.5" },
      { size: "9", usSize: "9.5", cms: "27.5" },
      { size: "10", usSize: "10.5", cms: "28.5" },
      { size: "11", usSize: "11.5", cms: "29.5" },
      { size: "12", usSize: "12.5", cms: "30.5" },
      { size: "13", usSize: "13.5", cms: "31.5." },
      { size: "14", usSize: "14.5", cms: "32.5" },
      // Add more men's sneaker sizes as needed
    ];
  };

  const getWomenSneakerSizes = () => {
    // Define women's sneaker size data
    return [
      { size: "2", usSize: "4", cms: "20.8" },
      { size: "3", usSize: "5", cms: "21.6" },
      { size: "4", usSize: "6", cms: "22.5" },
      { size: "5", usSize: "7", cms: "23.5" },
      { size: "6", usSize: "8", cms: "24" },
      { size: "7", usSize: "9", cms: "25" },
      { size: "8", usSize: "10", cms: "25.9" },
      { size: "9", usSize: "11", cms: "26.7" },
      { size: "10", usSize: "12", cms: "27.6" },
    ];
  };

  const getMenApparelSizes = () => {
    // Define men's apparel size data
    return [
      { size: "S", usSize: "S", cms: "90" },
      { size: "M", usSize: "M", cms: "95" },
      // Add more men's apparel sizes as needed
    ];
  };

  const getWomenApparelSizes = () => {
    // Define women's apparel size data
    return [
      { size: "XS", usSize: "XS", cms: "80" },
      { size: "S", usSize: "S", cms: "85" },
      // Add more women's apparel sizes as needed
    ];
  };

  let title = "";
  let sizeData = [];

  // Determine title and size data based on product type and tags
  if (productType === "footwear") {
    title = "Footwear Sizes";
    sizeData = tags.includes("womens")
      ? getWomenSneakerSizes()
      : getMenSneakerSizes();
  } else if (productType === "apparel") {
    title = "Apparel Sizes";
    sizeData = tags.includes("womens")
      ? getWomenApparelSizes()
      : getMenApparelSizes();
  } else if (productType === "accessories") {
    title = "Accessories Sizes";
    // Add logic for accessories sizes
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">UK Size</th>
            <th scope="col">US Size</th>
            <th scope="col">Cms</th>
          </tr>
        </thead>
        <tbody>
          {sizeData.map((sizeInfo, index) => (
            <tr key={index}>
              <td>{sizeInfo.size}</td>
              <td>{sizeInfo.usSize}</td>
              <td>{sizeInfo.cms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;

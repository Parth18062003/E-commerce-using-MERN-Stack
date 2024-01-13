import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate()
  const [productname, setProductname] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([{ size: "", quantity: "" }]);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [imagesLinks, setImagesLinks] = useState([]);
  const [colors, setColors] = useState([]);
  const [manufacturer, setManufacturer] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [articleCode, setArticleCode] = useState("");
  const [importedBy, setImportedBy] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState("");
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById("descriptionTextArea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [description]);

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setTags(tagsArray);
  };

  const handleColorsChange = (e) => {
    const colorsArray = e.target.value.split(",").map((color) => color.trim());
    setColors(colorsArray);
  };

  const handleImageLinkChange = (index, value) => {
    const updatedLinks = [...imagesLinks];
    updatedLinks[index] = value;
    setImagesLinks(updatedLinks);
  };

  const handleAddImageLink = () => {
    setImagesLinks([...imagesLinks, ""]); 
  };

  const handleSizeChange = (index, fieldName, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index][fieldName] = value;
    setSizes(updatedSizes);
  };

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", quantity: "" }]);
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
  };

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        productname,
        brand,
        price,
        sizes,
        description,
        imagesLinks,
        colors,
        tags,
        manufacturer,
        countryOfOrigin,
        articleCode,
        importedBy,
        weight,
        category,
      };

      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        displayErrorToast();
        console.log(data?.message);
      } else {
        displaySuccessToast();
        navigate('/view-product')
      }
    } catch (error) {
      console.log(error);
      displayErrorToast();
    }
  };

  const displaySuccessToast = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000); 
  };

  const displayErrorToast = () => {
    setShowErrorToast(true);
    setTimeout(() => setShowErrorToast(false), 5000); 
  };

  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={6} md={8} xs={12}>
              <h2 className="text-center mb-4">Add a new Product</h2>
              <Form onSubmit={createProduct}>
                <Form.Group as={Col} className="mb-3">
                  <Form.Select
                    aria-label="Select Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="footwear">Footwear</option>
                    <option value="apparel">Apparel</option>
                    <option value="accessories">Accessories</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    value={productname.toUpperCase()}
                    onChange={(e) => setProductname(e.target.value)}
                    style={{textTransform:'uppercase'}}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Brand Name"
                    value={brand.toLowerCase()}
                    onChange={(e) => setBrand(e.target.value)}
                    style={{textTransform:'capitalize'}}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    id="descriptionTextArea"
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    value={description}
                    style={{ overflow: "hidden", resize: "none" }}
                    onChange={handleDescriptionChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Country of Origin"
                    value={countryOfOrigin}
                    onChange={(e) => setCountryOfOrigin(e.target.value)}
                    style={{textTransform:'capitalize'}}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Manufacturer Name"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    style={{textTransform:'capitalize'}}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Article Code"
                    value={articleCode}
                    onChange={(e) => setArticleCode(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Imported By"
                    value={importedBy}
                    onChange={(e) => setImportedBy(e.target.value)}
                    style={{textTransform:'capitalize'}}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Tags (comma-separated)"
                    value={tags}
                    onChange={handleTagsChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Colors (comma-separated)"
                    value={colors}
                    onChange={handleColorsChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Image Links</Form.Label>
                  {imagesLinks.map((link, index) => (
                    <Form.Control
                      key={index}
                      type="text"
                      placeholder={`Link ${index + 1}`}
                      value={link}
                      onChange={(e) =>
                        handleImageLinkChange(index, e.target.value)
                      }
                      className="mb-2"
                    />
                  ))}
                  <Button variant="secondary" onClick={handleAddImageLink}>
                    Add Image Link
                  </Button>
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Sizes</Form.Label>
                  {sizes.map((size, index) => (
                    <Row key={index}>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder={`Size ${index + 1}`}
                          className="mb-2"
                          value={size.size}
                          onChange={(e) =>
                            handleSizeChange(index, "size", e.target.value)
                          }
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          type="number"
                          placeholder={`Quantity`}
                          value={size.quantity}
                          onChange={(e) =>
                            handleSizeChange(index, "quantity", e.target.value)
                          }
                        />
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveSize(index)}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <Button variant="secondary" onClick={handleAddSize}>
                    Add Size
                  </Button>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Create Product
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Layout>
      <ToastContainer position="top-end">
        <Toast show={showSuccessToast} bg="success" text="white">
          <Toast.Body>Product added successfully</Toast.Body>
        </Toast>

        <Toast show={showErrorToast} bg="danger" text="white">
          <Toast.Body style={{ color: "white" }}>
            Error adding product
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default AddProduct;

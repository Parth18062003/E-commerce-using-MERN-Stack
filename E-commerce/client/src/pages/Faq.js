import React, { useState } from "react";
import { Accordion, Row, Col, Container, Form } from "react-bootstrap";
import Layout from "../components/Layout";

const Faq = () => {
    const faqData = [
        {
          question: "What are the available payment options?",
          answer: "We accept various payment options including credit cards, debit cards, PayPal, and more. You can choose the one that is most convenient for you during the checkout process.",
        },
        {
          question: "How can I track my order?",
          answer: "Once your order is shipped, we will provide you with a tracking number. You can use this number to track your order and get updates on its delivery status.",
        },
        {
          question: "What is your return policy?",
          answer: "We have a flexible return policy. If you are not satisfied with your purchase, you can return the item within 30 days of receipt for a full refund or exchange. Please refer to our Return Policy for more details.",
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary based on your location. You can find more information during the checkout process.",
        },
        {
          question: "How do I determine my shoe size?",
          answer: "To determine your shoe size, refer to our Size Guide which provides details on how to measure your feet accurately. If you are still unsure, feel free to reach out to our customer support for assistance.",
        },
        {
          question: "Are the products genuine and authentic?",
          answer: "Yes, we only sell genuine and authentic products sourced directly from the brands or authorized dealers. Rest assured, you are getting high-quality products when you shop with us.",
        },
        {
          question: "What should I do if the item is out of stock?",
          answer: "If the item you desire is out of stock, you can subscribe to notifications for that specific product. We'll notify you via email once the item is back in stock.",
        },
        {
          question: "How do I care for my sneakers?",
          answer: "Proper sneaker care is crucial to maintain their appearance and longevity. Refer to our Sneaker Care Guide for tips on cleaning, storing, and maintaining your sneakers.",
        },
        {
          question: "Can I cancel my order?",
          answer: "You can cancel your order within 24 hours of placing it. After that, the order is likely already in the processing stage and cannot be canceled. Please contact us for assistance.",
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes, we offer gift cards which make for a perfect gift for friends and family. You can purchase a gift card and send it to the recipient via email.",
        },
        {
          question: "How can I contact customer support?",
          answer: "You can reach our customer support team through our Contact Us page or by sending an email to support@example.com. We'll get back to you as soon as possible.",
        },
        {
          question: "What is the delivery time for my order?",
          answer: "Delivery times may vary based on your location and the shipping option you choose. During the checkout process, you'll see the estimated delivery time for your order.",
        },
        {
          question: "Do you have a loyalty program?",
          answer: "Yes, we have a loyalty program where you can earn points for every purchase. These points can be redeemed for discounts on future purchases.",
        },
        {
          question: "What if I receive a damaged or incorrect item?",
          answer: "If you receive a damaged or incorrect item, please contact our customer support immediately. We'll arrange for a return and replacement of the item at no additional cost.",
        },
        {
          question: "Are there any ongoing promotions or discounts?",
          answer: "We frequently have promotions and discounts on our products. Keep an eye on our website, subscribe to our newsletter, and follow us on social media to stay updated on the latest offers.",
        },
      ];
      

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqData = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={8}>
            <h2 className="text-center">FAQ's</h2>
            <Form.Group className="mt-3 mb-5">
              <Form.Control
                type="text"
                placeholder="How may I help you?"
                value={searchTerm}
                onChange={handleSearch}
                style={{fontSize:'20px',border:'1px solid black'}}
              />
            </Form.Group>
            <Accordion alwaysOpen>
              {filteredFaqData.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="mt-4"
                >
                  <Accordion.Header>
                    <h5 className="text-muted">{item.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Faq;

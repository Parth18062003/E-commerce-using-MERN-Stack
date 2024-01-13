import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardCarousel from "../components/CardCarousel";
import axios from "axios";
import {
  LandingCards,
  LandingVideo,
  Landingimg,
} from "../components/LandingComponents";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/product/product-details`);
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <Landingimg />
      <CardCarousel loading={loading} filterProp="new arrivals" />
      <LandingVideo />
      <LandingCards
        img1="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png"
        img2="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png"
        img3="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png"
        pill1="Men's"
        pill2="Women's"
        pill3="Kid's"
        link1="/view-product/tags/mens"
        link2="/view-product/tags/womens"
        link3="/view-product/tags/kids"
      />
      <CardCarousel loading={loading} filterProp="mens" />
      <CardCarousel loading={loading} filterProp="womens" />
      <LandingCards
        img1="https://www.highsnobiety.com/static-assets/dato/1681910425-best-sneaker-stores-new-york-45.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=1199%3A800&w=1199"
        img2="https://img.buzzfeed.com/buzzfeed-static/complex/images/DSC_7452_p4rbm3/None.jpg?downsize=1040:*&output-format=auto&output-quality=auto"
        img3="https://cdn.sanity.io/images/c1chvb1i/production/983fb14f1383fbba477c6fe54de39afb7884a393-1100x735.jpg/undefeated-shibuya-in-store.jpg"
        title="Locate Us"
        pill1="Mumbai"
        pill2="Delhi"
        pill3="Bangalore"
        link1="/stores/#mumbai"
        link2="/stores/#delhi"
        link3="/stores/#bangalore"
      />
    </Layout>
  );
}

export default Home;

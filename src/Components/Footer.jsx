import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import applepay from "../assets/applepay.png";
import gpay from "../assets/gpay.png";

function Footer() {
  return (
    <>
      <Subscribe />
      <div className="bg-neutral-100 py-10 px-28">
        <div className="flex gap-24 w-full">
          <div>
            <img src={logo} alt="ShopCo logo" />
            <p className="w-60 text-sm text-neutral-400 my-5">
              We have clothes that suits your style and which you’ll be proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2">
              <img src={twitter} alt="Twitter Logo" />
              <img src={facebook} alt="Facebook Logo" />
              <img src={insta} alt="Instagram Logo" />
              <img src={github} alt="Github Logo" />
            </div>
          </div>
          <div>
            <p className="uppercase tracking-widest font-light">Company</p>
            <ul className="list-none text-neutral-400 text-sm">
              <li className="my-3">About</li>
              <li className="my-3">Features</li>
              <li className="my-3">Works</li>
              <li className="my-3">Career</li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-widest font-light">Help</p>
            <ul className="list-none text-neutral-400 text-sm">
              <li className="my-3">Customer Support</li>
              <li className="my-3">Delivery Details</li>
              <li className="my-3">Terms and Conditions</li>
              <li className="my-3">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-widest font-light">FAQ</p>
            <ul className="list-none text-neutral-400 text-sm">
              <li className="my-3">Account</li>
              <li className="my-3">Manage Deliveries</li>
              <li className="my-3">Orders</li>
              <li className="my-3">Payments</li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-widest font-light">Resources</p>
            <ul className="list-none text-neutral-400 text-sm">
              <li className="my-3">Free eBooks</li>
              <li className="my-3">Development Tutorials</li>
              <li className="my-3">How to - Blog</li>
              <li className="my-3">Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <hr className="border my-7" />

        <div className="flex gap-96">
          <p className="text-sm text-neutral-400">
            Shopco &#169; 2000-2021, All rights reserved
          </p>

          <div className="flex -mr-96">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={paypal} alt="Paypal" />
            <img src={applepay} alt="Applepay" />
            <img src={gpay} alt="GooglePay" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import { useSelector , useDispatch } from "react-redux";
import ACTION_NANONEEDLING_NOT_IN_CART from "../../../../actions/InCart/AddOns/NanoNeedling/ACTION_NANONEEDLING_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import "../../CartCard.css";

import ACTION_SELECTED_NANO_NEEDLING_DURATION_RESET from "./../../../../actions/AddOns/Nanoneedling/nanoneedlingDuration/ACTION_SELECTED_NANO_NEEDLING_DURATION_RESET";

import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
const NanoNeedlingCard = (props) => {
  const dispatch = useDispatch();

  const selectednanoneedlingDuration = useSelector(
    (state) => state.selectednanoneedlingDuration.duration
  );
  const handleRemove = () => {
    dispatch(ACTION_NANONEEDLING_NOT_IN_CART());
    dispatch(ACTION_SELECTED_NANO_NEEDLING_DURATION_RESET());
    dispatch(ACTION_DECREMENT_COUNTER());

    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStatesExceptTreatments();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <svg width="100%" height="12rem" viewBox="0 0 56.356 56.356">
          <circle cx="28" cy="28" r="22.25" fill="rgb(241, 241, 241)" />
          <g transform="translate(-6 -4)">
            <path
              className="nanoneedling_icon_path"
              stroke="#000"
              strokeDasharray="200"
              fill="#000"
              strokeWidth="0.3"
              d="M26.343 38.67c-.495-.215-1.94-1.43-3.21-2.702-2.064-2.064-2.368-2.495-2.84-4.03-.29-.946-.614-2.584-.719-3.639-.105-1.055-.29-1.918-.41-1.918-.284 0-1.314 1.444-1.314 1.841 0 .167.297.742.661 1.277.657.966.81 1.745.501 2.55-.293.764-.602.431-.453-.49.111-.683-.001-1.116-.457-1.756-.868-1.218-.783-2.196.286-3.299l.891-.92.046-2.842c.082-5.048 1.42-7.84 4.484-9.348 1.618-.797 1.808-.829 4.283-.726 2.243.092 2.778.21 3.993.874 2.955 1.617 3.732 3.61 3.947 10.127l.15 4.564h4.45l-.08 1.389-.08 1.39-2.475.131-2.475.133-.497 1.311c-.875 2.311-5.476 6.509-7.107 6.484-.371-.006-1.08-.187-1.575-.401zm2.83-.496c1.173-.62 5.026-4.702 5.487-5.812.485-1.17.28-1.472-1.001-1.479-.788-.004-1.027-.513-.265-.564.441-.029.441-.036 0-.152-.255-.066-.463-.23-.463-.366s.208-.259.463-.276c.441-.029.441-.036 0-.151-.689-.18-.56-.612.183-.612.355 0 .72-.119.81-.264.09-.146.394-.265.676-.265.471 0 .514-.2.514-2.409 0-2.056-.1-2.608-.68-3.77-1.525-3.058-3.979-4.664-7.125-4.664-3.223 0-5.69 1.626-7.302 4.812l-.764 1.51.272 3.353c.373 4.588.851 5.845 3.099 8.138 3.209 3.274 4.414 3.861 6.097 2.971zm-2.804-2.85c-.174-.175-.317-.436-.317-.582 0-.147.141-.123.317.053.386.386 2.496.423 2.728.048a.313.313 0 01.429-.106c.15.093.059.316-.217.525-.594.45-2.511.49-2.94.062zm-.516-1.18c-.505-.205-.393-.831.206-1.152.849-.454 3.453-.22 3.802.342.226.364.202.528-.105.724-.408.26-3.312.324-3.903.085zm3.328-.354c.318 0 .343-.074.107-.31-.4-.4-2.158-.479-2.84-.128-.507.262-.502.28.133.47.364.11 1.004.146 1.422.083.418-.064.948-.115 1.177-.115zm-2.015-2.942c-.322-.119-.585-.337-.585-.484 0-.172.233-.161.654.03.501.23.749.219 1.064-.043.434-.36.824-.211.562.214-.24.387-1.048.522-1.695.283zm-4.674-3.712c.165-.519.108-.554-.643-.404-.921.185-1.053.006-.366-.495.374-.274.6-.262 1.234.066.51.264 1.215.36 2.056.279.703-.068 1.279-.027 1.279.09 0 .293-1.732.596-2.4.421-.331-.086-.6.005-.687.235-.234.608-.67.43-.473-.192zm9.822.192c-.088-.23-.356-.321-.687-.235-.668.175-2.4-.128-2.4-.42 0-.118.593-.157 1.318-.087.954.091 1.505.005 1.991-.314.609-.399.728-.402 1.254-.034.603.423.498.502-.553.415-.517-.043-.591.04-.445.5.194.61-.249.773-.478.175zm-6.94-3.082c-.418-.462-.748-.537-2.028-.465-1.569.089-2.047-.17-.863-.467 1.127-.283 3.005.127 3.325.725.401.75.16.864-.435.207zm3.588.324c0-.824 2.196-1.6 3.558-1.259 1.206.303.716.559-.895.468-1.36-.077-1.618-.015-1.916.463-.35.56-.747.735-.747.328zm7.409 5.103c0-.927-.017-.941-.99-.86-.706.058-1.016.22-1.081.56-.166.877.167 1.242 1.136 1.242.895 0 .935-.04.935-.942zm3.704.016v-.926H36.9v1.852h3.175zm-18.983-9.421c2.244-3.167 6.923-4.313 10.389-2.546 1.398.713 2.25 1.518 3.422 3.235l.722 1.059-.171-1.588c-.525-4.872-2.938-7.276-7.395-7.367-3.356-.068-5.5.984-6.91 3.388-.628 1.072-1.451 4.13-1.427 5.302.01.509.023.51.326.037.173-.271.643-.955 1.044-1.52z"
            />
          </g>
        </svg>
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Nano Needling Infusion</h3>
          <p className="shopping_cart_duration">Duration: {selectednanoneedlingDuration} minutes</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">${selectednanoneedlingDuration}</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NanoNeedlingCard;

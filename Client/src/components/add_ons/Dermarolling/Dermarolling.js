import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spring, animated, Keyframes } from "react-spring/renderprops";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSquare,
  faClock,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import ACTION_DERMAROLLING_TOGGLE from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE";
import ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET from "../../../actions/AddOns/ExtraExtractions/ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET";
import ACTION_HYDRO_JELLY_TOGGLE_RESET from "../../../actions/AddOns/HydroJellyMask/ACTION_HYDRO_JELLY_TOGGLE_RESET";
import ACTION_LED_THERAPY_TOGGLE_RESET from "../../../actions/AddOns/LEDTherapy/ACTION_LED_THERAPY_TOGGLE_RESET";
import ACTION_MICROCURRENT_TOGGLE_RESET from "../../../actions/AddOns/Microcurrent/ACTION_MICROCURRENT_TOGGLE_RESET";
import ACTION_MICRODERMABRASION_TOGGLE_RESET from "../../../actions/AddOns/Microdermabrasion/ACTION_MICRODERMABRASION_TOGGLE_RESET";
import ACTION_DERMAROLLING_TOGGLE_RESET from "../../../actions/AddOns/Dermarolling/ACTION_DERMAROLLING_TOGGLE_RESET";
import ACTION_NANONEEDLING_TOGGLE_RESET from "../../../actions/AddOns/Nanoneedling/ACTION_NANONEEDLING_TOGGLE_RESET";
import ACTION_GUASHA_TOGGLE_RESET from "../../../actions/AddOns/GuaSha/ACTION_GUASHA_TOGGLE_RESET";
import ACTION_BEARD_TOGGLE_RESET from "../../../actions/AddOns/Beard/ACTION_BEARD_TOGGLE_RESET";
import ACTION_DERMAROLLING_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_IN_CART";
import ACTION_DERMAROLLING_NOT_IN_CART from "../../../actions/InCart/AddOns/Dermarolling/ACTION_DERMAROLLING_NOT_IN_CART";
import ACTION_NAVBAR_IS_VISIBLE from "../../../actions/NavbarIsVisible/ACTION_NAVBAR_IS_VISIBLE";
import ACTION_INCREMENT_COUNTER from "../../../actions/Counter/ACTION_INCREMENT_COUNTER";
import ACTION_DECREMENT_COUNTER from "../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import { toast } from "react-toastify";
import DermarollingNotification from "./DermarollingNotification";
import DermarollingRemovedNotification from "./DermarollingRemovedNotification";
import AddOnsChemPeelErrorNotification from "../AddOnsChemPeelErrorNotification";
import AddOnsMicroneedlingErrorNotification from "../AddOnsMicroneedlingErrorNotification";
import "./Dermarolling.css";
import "../../treatments/card_styling.css";

const Dermarolling = (props) => {
  const extraExtractionsToggle = useSelector(
    (state) => state.extraExtractionsToggle.toggle
  );
  const hydroJellyToggle = useSelector(
    (state) => state.hydroJellyToggle.toggle
  );
  const ledTherapyToggle = useSelector(
    (state) => state.ledTherapyToggle.toggle
  );
  const microcurrentToggle = useSelector(
    (state) => state.microcurrentToggle.toggle
  );
  const microdermabrasionToggle = useSelector(
    (state) => state.microdermabrasionToggle.toggle
  );
  const dermarollingToggle = useSelector(
    (state) => state.dermarollingToggle.toggle
  );
  const nanoneedlingToggle = useSelector(
    (state) => state.nanoneedlingToggle.toggle
  );
  const guashaToggle = useSelector((state) => state.guashaToggle.toggle);
  const beardToggle = useSelector((state) => state.beardToggle.toggle);

  // In Cart states
  const dermarollingInCart = useSelector(
    (state) => state.dermarollingInCart.in_cart
  );
  const microneedleInCart = useSelector(
    (state) => state.microneedleInCart.in_cart
  );
  const chemicalPeelInCart = useSelector(
    (state) => state.chemicalPeelInCart.in_cart
  );
  const saltCaveInCart = useSelector((state) => state.saltCaveInCart.in_cart);

  const [cartClicked, changeCartClicked] = useState(false);
  const [bookNowButtonHovered, changeBookNowButtonHovered] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!dermarollingToggle) {
      dispatch(ACTION_DERMAROLLING_TOGGLE());
      if (extraExtractionsToggle) {
        dispatch(ACTION_EXTRA_EXTRACTIONS_TOGGLE_RESET());
      }
      if (hydroJellyToggle) {
        dispatch(ACTION_HYDRO_JELLY_TOGGLE_RESET());
      }
      if (ledTherapyToggle) {
        dispatch(ACTION_LED_THERAPY_TOGGLE_RESET());
      }
      if (microcurrentToggle) {
        dispatch(ACTION_MICROCURRENT_TOGGLE_RESET());
      }
      if (microdermabrasionToggle) {
        dispatch(ACTION_MICRODERMABRASION_TOGGLE_RESET());
      }
      if (nanoneedlingToggle) {
        dispatch(ACTION_NANONEEDLING_TOGGLE_RESET());
      }
      if (guashaToggle) {
        dispatch(ACTION_GUASHA_TOGGLE_RESET());
      }
      if (beardToggle) {
        dispatch(ACTION_BEARD_TOGGLE_RESET());
      }
    } else {
      dispatch(ACTION_DERMAROLLING_TOGGLE_RESET());
    }
  };

  const cardDescriptionHandler = () => {
    if (dermarollingToggle) {
      return (
        <>
          <div className="card_description_add_on_paragraph_toggle">
            <div className="card_description_icon_wrapper_container">
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faClock}
                />
                <p className="card_description_paragraph_title">Duration</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>30 minutes</p>
              </div>
              <div className="card_description_paragraph_icon_wrapper">
                <FontAwesomeIcon
                  className="card_description_icon"
                  icon={faTag}
                />
                <p className="card_description_paragraph_title">Price</p>
              </div>
              <div className="card_description_paragraph_value">
                <p>$40</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="card_description_paragraph">
              A formula that is designed to restore proteins and moisture in the hair.
              Often the client will wear a cap and be placed under a dryer for 10-20 minutes
              to increase the speed of penetration.
        </p>
      );
    }
  };

  const PlusBounce = Keyframes.Spring({
    plusBounce: [
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 100 },
      },
      {
        marginTop: "-9px",
        color: "rgb(155, 98, 107)",
        config: { duration: 300 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-6",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "-4px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
      {
        marginTop: "0px",
        color: "rgb(155, 98, 107)",
        config: { duration: 200 },
      },
    ],
  });

  const checkMark = () => {
    return (
      <Spring from={{ x: 100 }} to={{ x: 0 }} config={{ duration: 2000 }}>
        {(styles) => (
          <svg
            width={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 1800
                  ? "2rem"
                  : props.initialScreenSize >= 1400
                  ? "1rem"
                  : props.initialScreenSize >= 1200
                  ? "1rem"
                  : "100%"
                : props.currentScreenSize >= 1800
                ? "2rem"
                : props.currentScreenSize >= 1400
                ? "1rem"
                : props.currentScreenSize >= 1200
                ? "1rem"
                : "100%"
            }
            height={
              props.currentScreenSize === ""
                ? props.initialScreenSize >= 2200
                  ? "2rem"
                  : props.initialScreenSize >= 1800
                  ? "1.3rem"
                  : props.initialScreenSize >= 1600
                  ? "1.3rem"
                  : props.initialScreenSize >= 1200
                  ? "1.1rem"
                  : props.initialScreenSize >= 360
                  ? "2rem"
                  : "1rem"
                : props.currentScreenSize >= 2200
                ? "2rem"
                : props.currentScreenSize >= 1800
                ? "1.3rem"
                : props.currentScreenSize >= 1600
                ? "1.3rem"
                : props.currentScreenSize >= 1200
                ? "1.1rem"
                : props.currentScreenSize >= 360
                ? "2rem"
                : "1rem"
            }
            style={{
              marginTop:
                props.currentScreenSize === ""
                  ? props.initialScreenSize >= 2200
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1800
                    ? "0"
                    : props.initialScreenSize >= 1600
                    ? "-0.2rem"
                    : props.initialScreenSize >= 1200
                    ? "-0.1rem"
                    : props.initialScreenSize >= 360
                    ? "-0.5rem"
                    : "0rem"
                  : props.currentScreenSize >= 2200
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1800
                  ? "0"
                  : props.currentScreenSize >= 1600
                  ? "-0.2rem"
                  : props.currentScreenSize >= 1200
                  ? "-0.1rem"
                  : props.currentScreenSize >= 360
                  ? "-0.5rem"
                  : "0rem",
              display: dermarollingInCart ? "block" : "none",
            }}
            viewBox="0 0 13.229 13.229"
          >
            <path
              d="M2.851 7.56l2.45 2.482 5.36-6.958"
              fill="none"
              stroke="#000"
              strokeDasharray="100"
              strokeDashoffset={
                cartClicked ? (dermarollingInCart ? `${styles.x}` : 0) : 0
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        )}
      </Spring>
    );
  };

  const chemPeelAddOnErrorToastId = "chem_peel_add_on_error";
  const microneedlingAddOnErrorToastId = "microneedling_add_on_error";

  const addToCart = () => {
    if (chemicalPeelInCart || saltCaveInCart) {
      if (!toast.isActive(chemPeelAddOnErrorToastId)) {
        toast.dismiss();
        toast(
          <AddOnsChemPeelErrorNotification
            currentScreenSize={props.currentScreenSize}
            initialScreenSize={props.initialScreenSize}
          />,
          {
            className: "toast_error_container",
            toastId: chemPeelAddOnErrorToastId,
          }
        );
      }
    } else {
      if (microneedleInCart) {
        if (!toast.isActive(microneedlingAddOnErrorToastId)) {
          toast.dismiss();
          toast(
            <AddOnsMicroneedlingErrorNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_error_container",
              toastId: microneedlingAddOnErrorToastId,
            }
          );
        }
      } else {
        if (dermarollingInCart) {
          toast.dismiss();
          dispatch(ACTION_DERMAROLLING_NOT_IN_CART());
          dispatch(ACTION_DECREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());

          props.resetAllCartStatesExceptTreatments();
          toast(
            <DermarollingRemovedNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />,
            {
              className: "toast_removed_container",
            }
          );
        } else {
          toast.dismiss();
          dispatch(ACTION_DERMAROLLING_IN_CART());
          dispatch(ACTION_INCREMENT_COUNTER());
          dispatch(ACTION_NAVBAR_IS_VISIBLE());
          changeCartClicked(true);
          setTimeout(() => changeCartClicked(false), 200);

          props.resetAllCartStatesExceptTreatments();
          toast(
            <DermarollingNotification
              currentScreenSize={props.currentScreenSize}
              initialScreenSize={props.initialScreenSize}
            />
          );
        }
      }
    }
  };

  const addOnBounce = () => {
    return (
      <PlusBounce state="plusBounce">
        {(styles) => (
          <span
            className="fa-layers fa-fw"
            style={
              dermarollingToggle
                ? dermarollingInCart
                  ? { position: "relative" }
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? { position: "relative" }
                  : styles
                : { position: "relative" }
            }
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon
              color={
                dermarollingToggle
                  ? dermarollingInCart
                    ? "rgb(119, 221, 119, 0.6)"
                    : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                    ? "rgb(211, 211, 211)"
                    : "rgba(0, 129, 177, 0.4)"
                  : dermarollingInCart
                  ? "rgba(119, 221, 119, 0.6)"
                  : microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(211, 211, 211)"
                  : "rgba(0, 129, 177, 0.3)"
              }
              transform={
                !props.currentScreenSize
                  ? props.initialScreenSize >= 360
                    ? "grow-20"
                    : "grow-10"
                  : props.currentScreenSize >= 360
                  ? "grow-20"
                  : "grow-10"
              }
              icon={faSquare}
            />
            {checkMark()}
            <FontAwesomeIcon
              className="small_screen_card_description_plus"
              style={{ display: dermarollingInCart ? "none" : "block" }}
              color={
                microneedleInCart | chemicalPeelInCart | saltCaveInCart
                  ? "rgb(151, 151, 151)"
                  : "rgb(0, 129, 177)"
              }
              icon={faPlus}
            />
          </span>
        )}
      </PlusBounce>
    );
  };

  const bigScreenBottomWrapperRender = () => {
    return (
      <div className="big_screen_entire_bottom_wrapper">
        <div className="big_screen_price_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faTag}
          />
          <p className="big_screen_price">$40</p>
        </div>
        <div className="big_screen_duration_wrapper">
          <FontAwesomeIcon
            className="big_screen_card_description_icon"
            icon={faClock}
          />
          <p className="big_screen_duration">30 minutes</p>
        </div>
      </div>
    );
  };

  const smallScreenBottomWrapperRender = () => {
    return (
      <div
        className="card_bottom_wrapper"
        style={{
          color: dermarollingToggle ? "rgb(0, 104, 152)" : "rgb(0, 129, 177)",
          transition: "ease all 0.5s",
        }}
      >
        <p className="card_toggler" onClick={handleToggle}>
          {dermarollingToggle ? "SEE DESCRIPTION" : "LEARN MORE"}
        </p>
        <span className="card_bottom_spacer" />
        {addOnBounce()}
      </div>
    );
  };

  const dynamicScreenSizeBottomCardRender = () => {
    if (props.currentScreenSize === "") {
      if (props.initialScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    } else {
      if (props.currentScreenSize >= 1200) {
        return bigScreenBottomWrapperRender();
      } else {
        return smallScreenBottomWrapperRender();
      }
    }
  };

  const renderAddOnButton = () => {
    if (dermarollingInCart) {
      return (
        <>
          {checkMark()}
          <p className="big_screen_in_cart">IN CART</p>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            className="big_screen_card_description_suitcase"
            icon={faPlus}
          />
          <p className="big_screen_card_add_on_button">ADD TO CART</p>
        </>
      );
    }
  };

  return (
    <InView threshold={0.2} triggerOnce={true}>
      {({ inView, ref }) => (
        <div
          className="card_container"
          ref={ref}
          style={{ display: props.dermarollingRendered }}
        >
          {inView ? (
            <Spring
              from={{ position: "relative", opacity: 0 }}
              to={{ position: "relative", opacity: 1 }}
              config={{ duration: 1000 }}
            >
              {(styleprops) => (
                <section className="card" style={styleprops}>
                  <div
                    className="card_image"
                    style={{
                      backgroundColor: dermarollingToggle
                        ? "rgba(0, 129, 177, 0.2)"
                        : "rgba(211, 211, 211, 0.4)",
                      boxShadow: dermarollingToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), -3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 3px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <Spring
                      from={{ x: 100, fill: "#fff" }}
                      to={{ x: 0, fill: "#000" }}
                      config={{ duration: 3000 }}
                    >
                      {(styles) => (
                        <>
                          <div
                            className="big_screen_book_now_wrapper"
                            onClick={() => addToCart()}
                            style={{
                              background: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "rgba(69, 171, 69, 0.6)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(201, 201, 201)"
                                  : "rgb(0, 129, 177)"
                                : dermarollingInCart
                                ? "rgba(119, 221, 119, 0.6)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(201, 201, 201)"
                                : "transparent",
                              border: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "1px solid rgb(69, 171, 69, 0.8)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "1px solid transparent"
                                  : "1px solid rgb(0, 129, 177)"
                                : dermarollingInCart
                                ? "1px solid rgb(69, 171, 69, 0.8)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "1px solid transparent"
                                : "1px solid rgb(0, 129, 177)",
                              color: bookNowButtonHovered
                                ? dermarollingInCart
                                  ? "rgb(0, 0, 0)"
                                  : microneedleInCart |
                                    chemicalPeelInCart |
                                    saltCaveInCart
                                  ? "rgb(141, 141, 141)"
                                  : "rgb(255, 255, 255)"
                                : dermarollingInCart
                                ? "rgb(0, 0, 0)"
                                : microneedleInCart |
                                  chemicalPeelInCart |
                                  saltCaveInCart
                                ? "rgb(141, 141, 141)"
                                : "rgb(0, 129, 177)",
                              cursor:
                                microneedleInCart |
                                chemicalPeelInCart |
                                saltCaveInCart
                                  ? "auto"
                                  : "pointer",
                              transition: "all 0.5s ease",
                            }}
                            onMouseEnter={() =>
                              changeBookNowButtonHovered(true)
                            }
                            onMouseLeave={() =>
                              changeBookNowButtonHovered(false)
                            }
                          >
                            {renderAddOnButton()}
                          </div>
                          <svg
                            width="100%"
                            height="15rem"
                            viewBox="0 0 56.356 56.356"
                            className="card_svg"
                          >
                            <circle
                              cx="28"
                              cy="28"
                              r={
                                props.currentScreenSize === ""
                                  ? props.initialScreenSize >= 1200
                                    ? "22.25"
                                    : "26"
                                  : props.currentScreenSize >= 1200
                                  ? "22.25"
                                  : "26"
                              }
                              stroke={
                                dermarollingToggle
                                  ? "rgb(25, 154, 202)"
                                  : "rgba(191, 191, 191)"
                              }
                              strokeWidth="0.5"
                              fill="white"
                            />
                            <g transform="translate(14 10)">
                              <animated.path
                                className="dermarolling_icon_path"
                                stroke="#000"
                                strokeDasharray="100"
                                strokeDashoffset={`${styles.x}`}
                                fill={`${styles.fill}`}
                                strokeWidth="0.3"
                                d="M4.837 55.45l-.3-.234.073-1.51c.178-3.66.358-4.655 1.101-6.087.297-.571.674-1.048 1.386-1.754 1.377-1.365 2.119-1.714 5.3-2.496l2.423-.595v-3.581l-.836-.545c-1.008-.657-2.322-1.789-3.012-2.594-.582-.68-1.506-2.062-1.9-2.842-.273-.541-.846-2.187-1.055-3.03-.072-.296-.172-.457-.282-.457-.34 0-1.466-.693-1.873-1.152-.343-.387-.455-.635-.633-1.402-.487-2.098-.6-3.27-.602-6.242-.003-3.069.116-4.082.751-6.425.672-2.48 2.375-5.837 3.116-6.142.398-.164.825.048.98.486.089.252.055.394-.202.855-1.462 2.622-1.805 3.39-2.332 5.209-.177.612-.426 1.818-.552 2.68-.388 2.655-.2 6.69.44 9.398.09.38.641 1.02.88 1.02.04 0 .107-.227.149-.503.297-1.973 1.547-4.194 3.373-5.998 1.29-1.273 2.241-1.9 5.175-3.408 3.613-1.858 5.035-2.724 6.887-4.197 1.722-1.369 2.755-2.527 3.349-3.753.633-1.309.677-2.428.146-3.756-.23-.576-.314-.672-.796-.91-.432-.212-.746-.273-1.582-.306-.912-.037-1.152-.005-1.916.247-.926.306-2.056.983-3.03 1.814-.727.618-1.004.702-1.387.418-.204-.15-.298-.328-.322-.61-.029-.343.022-.449.378-.775 1.768-1.624 4.046-2.714 5.693-2.724.515-.003.534-.013.33-.17-.323-.25-1.225-.633-1.891-.802-.938-.238-2.896-.19-3.936.098-1.907.528-4.1 1.863-6.22 3.786-.746.677-.999.846-1.268.846a.753.753 0 01-.769-.778c0-.295.128-.47.837-1.143C14.826 1.668 18.95.144 22.68 1.037c.395.095 1.18.396 1.744.67.876.425 1.174.646 2.055 1.52 1.091 1.083 1.614 1.906 2.005 3.154.196.629.198.63.993 1.006 1.028.485 2.099 1.295 2.87 2.172 1.22 1.385 2.149 3.799 2.292 5.952.06.898.09.994.412 1.342.507.548.751.94 1.036 1.663.226.573.254.82.255 2.253.002 1.72-.14 2.632-.655 4.197-.558 1.699-.838 2.058-1.787 2.295-.483.12-.494.133-.549.62-.064.568-.36.879-.837.879-.498 0-.751-.428-.751-1.268 0-1.595-1.3-4.905-2.676-6.81-1.208-1.672-3.234-3.311-5.088-4.116-.449-.194-.879-.354-.956-.355-.077 0-.49.232-.917.517-1.294.864-2.606 1.602-5.04 2.836-2.67 1.353-3.515 1.901-4.674 3.031-1.418 1.382-2.333 2.832-2.775 4.395-.2.71-.23 1.015-.177 1.77.101 1.405.668 3.134 1.482 4.52 2.278 3.876 7.005 6.394 10.858 5.782 1.712-.271 3.697-1.14 5.083-2.227 1.005-.787 1.355-.955 1.724-.826a.911.911 0 01.443.41c.125.26.125.353 0 .607-.167.34-1.224 1.208-2.16 1.773l-.631.381v3.583l2.293.567c2.68.662 3.41.927 3.628 1.313.203.36.09.796-.268 1.03-.243.158-.336.163-.727.043-.246-.075-1.627-.441-3.068-.813-1.44-.372-2.744-.757-2.896-.856-.479-.312-.581-.753-.581-2.509v-1.602l-.53.2c-.848.32-2.614.638-3.55.638-1.01 0-2.37-.238-3.394-.593l-.728-.252-.007 1.575c-.006 1.726-.107 2.192-.543 2.513-.162.119-1.361.475-2.841.844-1.574.392-2.832.77-3.262.978-.83.402-1.925 1.366-2.417 2.128-.745 1.153-.892 1.83-1.128 5.17l-.066.938h28.742l-.071-1.1c-.195-3.022-.342-3.688-1.08-4.907-.55-.908-.603-1.253-.242-1.59.59-.55 1.144-.186 1.883 1.238.735 1.416.916 2.413 1.065 5.852l.072 1.646-.3.235-.3.235H5.134zM33.75 25.515c.189-.292.646-1.714.835-2.601.076-.354.14-1.295.142-2.092.005-1.399-.006-1.47-.319-2.092-.293-.581-.443-.727-1.565-1.519-1.36-.959-1.567-1.238-1.288-1.731.232-.41.657-.533 1.107-.32l.361.171-.08-.505c-.428-2.688-1.807-4.808-3.778-5.808l-.408-.207-.121.58c-.325 1.552-1.557 3.345-3.487 5.072l-.625.559.679.34c3.652 1.824 6.113 4.81 7.547 9.154l.365 1.106c.073.22.466.153.635-.107zm13.043 29.776c-.937-.33-1.3-.817-3.06-4.113-2.343-4.383-2.823-5.17-3.857-6.328-.532-.596-1.044-1.297-1.231-1.686-.177-.367-.411-.695-.52-.73-.11-.034-.456.049-.77.184-.46.198-.765.247-1.544.245-1.774-.004-2.326-.476-4.069-3.484-.633-1.091-1.208-2.213-1.278-2.493-.166-.659-.064-1.296.313-1.95l.302-.524-.303-.547c-.519-.934-.388-1.446.512-2.007.32-.2.582-.415.582-.479.003-.242.505-.581.863-.581.406 0 1.297-.471 1.297-.685 0-.255.412-.517.847-.539.476-.024 1.312-.508 1.312-.76 0-.23.462-.492.821-.468.185.013.558-.117.914-.319 1.021-.577 1.611-.424 2.198.571l.285.483h.644c.759 0 1.42.271 1.906.782.303.317 1.842 2.86 2.578 4.26.275.522.31.7.311 1.555 0 .859-.035 1.036-.32 1.598-.193.38-.514.788-.8 1.02-1.036.838-1.06.912-.516 1.629.404.534.582.936.994 2.243.33 1.05.9 2.064 3.373 6.007.98 1.563 1.871 3.036 1.98 3.272.125.273.197.684.199 1.132.007 2.023-2.006 3.4-3.963 2.712zm1.688-1.586c.43-.221.658-.623.657-1.155 0-.409-.208-.79-1.861-3.42-2.66-4.232-3.165-5.145-3.65-6.596-.241-.725-.578-1.486-.798-1.803-.658-.949-.738-1.528-.333-2.393.187-.399.418-.67.813-.952.662-.473.974-1.027.974-1.733 0-.459-.127-.736-1.14-2.498-.996-1.733-1.593-2.573-1.733-2.435-.022.023.428.851 1.001 1.841 1.188 2.053 1.301 2.457.922 3.308-.225.506-.902 1.096-1.399 1.22-.568.142-1.079-.406-.93-.996.038-.15.252-.384.486-.53.25-.157.418-.346.418-.47 0-.295-.423-.97-.609-.97-.16 0-.498.32-.8.756-.124.179-.281.246-.594.253-.477.012-1.342.422-1.342.637 0 .273-.511.637-.814.58-.329-.063-1.218.382-1.316.657-.13.367-.39.55-.78.55-.217 0-.474.06-.572.134-.161.122-.15.172.119.563.163.236.397.443.52.461.127.018.787-.294 1.53-.724.836-.483 1.426-.756 1.634-.756.592 0 .945.632.655 1.17-.057.106-.773.573-1.592 1.04-1.445.822-1.51.847-2.198.847-1.117 0-1.358-.214-2.528-2.241-.535-.926-1.036-1.766-1.114-1.866-.125-.16-.136-.136-.092.192.052.387 2.057 3.929 2.48 4.38.56.598 1.476.725 2.341.324.76-.352 1.572-.325 2.22.073.43.264.602.469.93 1.108.224.434.7 1.098 1.065 1.486.364.386.803.897.976 1.134.4.55 1.775 2.993 3.421 6.083 1.38 2.591 1.63 2.896 2.364 2.896.201 0 .503-.07.67-.155zm-14.186-17.8c-.14-.738.82-1.253 1.327-.713.196.208.202.208.538.005.304-.183.334-.246.28-.578-.05-.305-.01-.424.217-.649.335-.333.7-.352 1.08-.055.269.21.3.212.584.045.26-.152.295-.23.26-.586-.029-.309.017-.466.188-.635.289-.287.807-.291 1.092-.008.173.172.262.193.431.103.118-.062.214-.167.214-.234 0-.066-.398-.807-.885-1.647-.85-1.465-.895-1.521-1.14-1.41-.222.1-.245.165-.185.52.059.345.027.447-.217.689-.231.23-.35.271-.622.217-.185-.037-.42-.142-.523-.234-.168-.152-.217-.152-.513 0-.294.152-.32.206-.265.549.12.737-.678 1.173-1.283.7-.256-.2-.279-.2-.579-.02-.272.164-.308.243-.281.614.023.322-.025.477-.193.628-.278.25-.8.26-1.065.023-.23-.207-.451-.234-.451-.055 0 .068.4.81.887 1.65.574.986.938 1.507 1.028 1.473.094-.036.12-.165.076-.393zm-8.443-3.098c-.49-.518-.16-1.258.562-1.258 1.012 0 1.056 1.393.048 1.48-.277.023-.432-.033-.61-.222zm.045-2.768c-.578-.451-.232-1.322.525-1.322.741 0 1.066.763.544 1.281-.324.322-.692.336-1.07.041zm3.345 0c-.571-.447-.232-1.322.513-1.322.462 0 .683.186.777.654.056.275.016.392-.208.615-.335.333-.7.351-1.082.053z"
                              />
                            </g>
                          </svg>
                        </>
                      )}
                    </Spring>
                    <div
                      className="card_border_right"
                      style={{
                        borderRight: dermarollingToggle
                          ? "1px solid rgba(25, 154, 202, 0.4)"
                          : "1px solid rgb(211, 211, 211)",
                      }}
                    />
                  </div>
                  <div
                    className="card_description"
                    style={{
                      backgroundColor: dermarollingToggle
                        ? "rgba(222, 222, 222, 0.4)"
                        : "rgba(235, 235, 235, 0.1)",
                      boxShadow: dermarollingToggle
                        ? "0px -3px 3px 0px rgba(207, 207, 196, 0.7), 3px 0px 3px 0px rgba(207, 207, 196, 0.7), 0px 4px 3px 0px rgba(207, 207, 196, 0.7)"
                        : "0px -1px 1px 0px rgba(207, 207, 196, 0.1)",
                      transition: "ease all 0.5s",
                    }}
                  >
                    <div className="card_description_inner_wrapper">
                      <h2 style={{ fontWeight: 400 }}>Conditioning Treatment</h2>
                      {cardDescriptionHandler()}
                      {dynamicScreenSizeBottomCardRender()}
                    </div>
                  </div>
                </section>
              )}
            </Spring>
          ) : null}
        </div>
      )}
    </InView>
  );
};

export default Dermarolling;

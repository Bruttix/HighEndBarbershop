import React from "react";
import "./Clarify.css";
import "../../treatments/card_styling.css";

const ClarifyNotification = (props) => {
  return (
    <div className="notification_container">
      <svg
        width={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "18%"
              : "26%"
            : props.currentScreenSize >= 1800
            ? "18%"
            : "26%"
        }
        height={
          props.currentScreenSize === ""
            ? props.initialScreenSize >= 1800
              ? "8rem"
              : props.initialScreenSize >= 375
              ? "5rem"
              : "4rem"
            : props.currentScreenSize >= 1800
            ? "8rem"
            : props.currentScreenSize >= 375
            ? "5rem"
            : "4rem"
        }
        viewBox="0 0 50.006 50.006"
      >
        <circle
          cx="25"
          cy="25"
          r="19.5"
          stroke="rgb(0, 129, 177)"
          strokeWidth="0.5"
          fill="white"
        />
        <g fill="none" transform="translate(14, 12)">
          <path
            className="clarify_icon_path"
            fill="rgba(207, 207, 196, 0.3)"
            d="M9.257 37.6l29.142.04 1.265-.197 1.112-.511 1.15-.944.805-1.297.767-1.77.077-1.69-.153-1.336-.384-1.455-.613-.943-.92-.944-.576-.432-.69-.55-.038-.355v-1.14l-.192-.864-.383-.59-.614-.826-.844-.51-.92-.433-.958.039-.767.157-.652.393-.269.079v-.786l-.191-1.062-.537-1.336-.499-.826-.575-.707-.958-.826-1.112-.511-.767-.157h-.92l-.997.196-.882.315-.614.471-.805.55-.384.512-.536-.747-.499-.983-1.073-1.376-1.15-1.1-1.113-.787-1.265-.55-1.342-.275h-1.227l-1.38.117-1.266.394-1.15.55-.997.865-.997 1.1-.614 1.062-.805 1.455-.575 1.376-.345 1.336.038 1.258.077 1.337.153 1.376.537 1.14-1.265.354-1.342.668-.959.904-.805 1.022L5 29.148l-.384 1.297.039 1.376.153 1.062.345 1.218.46 1.101.844.983.92.707.959.512z"
            stroke="#000"
            strokeWidth="0.8"
          />
          <path
            className="clarify_icon_path"
            d="M8.304 35.53c-.339-1.946-.71-5.773 1.362-10.234s5.892-8.774 10.861-11.369c4.97-2.595 10.994-3.103 14.08-1.341 3.087 1.762 3.311 5.051 1.8 10.028-1.513 4.976-4.786 11.274-5.288 15.62-.503 4.346 1.765 6.74.253 7.684-1.512.945-6.804.441-10.71-.849s-8.065-4.713-9.889-6.12-2.13-1.473-2.469-3.42z"
          />
        </g>
      </svg>
      <div className="notification_text_container">
        <h3>Razor Fade Added!</h3>
        <p>The Bold Fade Haircut selection has been added to your cart.</p>
      </div>
    </div>
  );
};

export default ClarifyNotification;

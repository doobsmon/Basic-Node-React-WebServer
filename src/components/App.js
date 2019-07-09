// React
import React from "react";

// Aphrodite
import { StyleSheet, css } from "aphrodite";

// React-Device-Detect
// This library is used to detect whether or not the user is on a mobile device
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  browserName
} from "react-device-detect";

// React Components
import NameSVG from "./navBar/NameSVG";

// App Function Component
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: "portrait",
      touchscreen: true,
      count: 1,
      strokeColor: "white"
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.setStrokeColor = this.setStrokeColor.bind(this);
  }

  componentDidMount() {
    // if (window.matchMedia("(orientation: portrait)").matches) {
    //   console.log("orientation: portrait");
    //   this.setState({ orientation: "portrait" });
    // } else {
    //   console.log("orientation: landscape");
    //   this.setState({ orientation: "landscape" });
    // }
    console.log("screen orientation: " + window.screen.orientation.type);
    this.setState({ orientation: window.screen.orientation.type });

    console.log("touchscreen: " + "ontouchstart" in window);
    if ("ontouchstart" in window) {
      this.setState({ touchscreen: true });
    } else {
      this.setState({ touchscreen: false });
    }
  }

  incrementCount(increment) {
    this.setState(prevState => {
      return { count: prevState.count + increment };
    });
  }

  setStrokeColor(colorIn) {
    this.setState({ strokeColor: colorIn });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center", float: "top" }}>
          <NameSVG />
          <br />
          <br />
          <div className={css(styles.displayInline)}>EXPERIENCE</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <div className={css(styles.displayInline)}>SKILLS-CHART</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={css(styles.displayInline)}>PORTFOLIO</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={css(styles.displayInline)}>INTERACTIVE</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className={css(styles.displayInline)}>DOWNLOAD RESUME (PDF)</div>
        </div>
      </div>
    );
  }
}

// Aphrodite Stylesheet
const styles = StyleSheet.create({
  displayInline: {
    display: "inline"
  },
  colorTrans: {
    animationName: {
      "25%": {
        transform: "scale(1.1)",
        fill: "blue",
        cx: `${50 / 1.1}%`,
        cy: `${50 / 1.1}%`
      },
      "50%": {
        transform: "scale(1.2)",
        fill: "purple",
        cx: `${50 / 1.2}%`,
        cy: `${50 / 1.2}%`
      },
      "75%": {
        transform: "scale(1.1)",
        fill: "red",
        cx: `${50 / 1.1}%`,
        cy: `${50 / 1.1}%`
      }
    },
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  },
  shake: {
    animationName: {
      "25%": {
        transform: "scale(1.1) rotate(4deg)"
      },
      "50%": {
        transform: "scale(1.1) rotate(-4deg)"
      }
    },
    animationDuration: "1s",
    animationIterationCount: "infinite"
  },
  red: {
    color: "red"
  }
});

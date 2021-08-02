{/* eslint-disable-next-line*/}
import React, { useEffect } from "react";
import config from "./config.json";
// import Quagga from "../../../barcodeapi/quagga";
import Quagga from 'quagga';

const Scanner = props => {
  const { onDetected } = props;

  useEffect(() => {
    Quagga.init(config, err => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop()
      }
    });
    Quagga.onDetected(detected);
    //detecting boxes on stream
    {/* eslint-disable-next-line*/}
    Quagga.onProcessed(result => {
       {/* eslint-disable-next-line*/}
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }
        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });
<<<<<<< HEAD
{/* eslint-disable-next-line*/}
    Quagga.onDetected(detected);
{/* eslint-disable-next-line*/}
=======

  // Quagga.onDetected(detected);
>>>>>>> ef44d984c9c55680de1c47d47ebaa3820a1cd434
  }, []);

  const detected = result => {
    onDetected(result.codeResult.code);
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};

export default Scanner;

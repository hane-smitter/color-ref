import { useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function BgColorPicker({ setChangeBg, handleChangeBg, bgDefaultValue }) {
  const colorInp = useRef(null);
  //   useEffect(() => {
  //     colorInp && colorInp.current.click();
  //   }, []);
  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "100%" }}>
        <Tooltip title="close">
          <IconButton
            onClick={() => setChangeBg(false)}
            className="contrast"
            style={{ color: "unset", margin: "auto" }}
          >
            X
          </IconButton>
        </Tooltip>
      </div>
      <div>
        <label htmlFor="choose-color" className="contrast">
          Choose background
        </label>
        <span>&nbsp;👉️</span>&nbsp;&nbsp;&nbsp;
        <input
          type="color"
          onChange={handleChangeBg}
          id="choose-color"
          defaultValue={bgDefaultValue}
          ref={colorInp}
        />
      </div>
    </div>
  );
}

export default BgColorPicker;

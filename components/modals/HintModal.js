import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function HintModal(props) {
  const { hint } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-6   text-center inline-block">
      <Button
        className="text-white w-full bg-blue-600 hover:bg-blue-400"
        variant="contained"
        size="medium"
        onClick={handleOpen}
      >
        ( ･ὢ･ ) ﾑﾑｯ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="w-full"
      >
        <Box sx={{ ...style, width: 400 }}>
          <p>{hint}</p>
        </Box>
      </Modal>
    </div>
  );
}

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddBook(props) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
    isbn: "",
    price: "",
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addBook(book);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Book
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={book.title}
            onChange={handleInputChange}
            margin="dense"
            label="Title"
            fullWidth
          ></TextField>
          {""}
          <TextField
            name="author"
            value={book.author}
            onChange={handleInputChange}
            label="Author"
            margin="dense"
            fullWidth
          ></TextField>
          {""}
          <TextField
            name="year"
            value={book.year}
            onChange={handleInputChange}
            margin="dense"
            label="Year"
            fullWidth
          ></TextField>
          {""}
          <TextField
            name="isbn"
            value={book.isbn}
            onChange={handleInputChange}
            label="Isbn"
            margin="dense"
            fullWidth
          ></TextField>
          {""}
          <TextField
            name="price"
            value={book.price}
            onChange={handleInputChange}
            label="Price"
            margin="dense"
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddBook;

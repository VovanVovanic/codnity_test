
import { Grid, FormControl, FormGroup, TextField, Button, Paper, Box, MenuItem, Menu } from "@material-ui/core";
import { type } from "@testing-library/user-event/dist/type";
import {  useFormik, useFormikContext } from "formik";
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { fetchAddBook, fetchUpdateBook } from "../../redux/books/actions";
import { IbookItem } from "../../redux/books/types";
import { useStyles } from './BookForm.styles';


export interface FormikErrorType {
  title?: string
  author?: string
  description?: string
  type?: string
  url?: string
};

interface FormTypes extends FormikErrorType {
  _id?: string
  setTitle: (t:string)=> void
}

const BookForm:React.FC<FormTypes> = ({setTitle, ...book}) => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [type, setType] = useState(book.type && book.type);
  const id = book._id ? book._id : ""
  const route = book.type ? book.type : ""
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: book.title ? book.title : "",
      author: book.author ? book.author : "",
      description: book.description ? book.description : "",
      type: book.type ? book.type : "",
      url: book.url ? book.url : ""
    },
   
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.title) {
        errors.title = "Required";
      } else if (
        values.title.length < 2
      ) {
        errors.title = "Title must be at least 2 characters";
      }
      if (!values.author) {
        errors.author = "Required";
      }
      if (!values.description) {
        errors.description = "Required";
      } else if (
        values.description.length < 20
      ) {
        errors.description = "Description must be at least 20 characters";
      }
      if (!values.url) {
        errors.url = "Required";
      }
      return errors;
    },

   
    onSubmit: (values: FormikErrorType, { resetForm }) => {
      if (id) {
        dispatch(fetchUpdateBook(id, {...values, type: type}))
      }
      dispatch(fetchAddBook({ ...values, type: type }))
      navigate(`/`)
      setTitle("Main Page")
      resetForm({values: {title: "", author: "", description: "", type: "", url: ""}});
    },
  });

  useEffect(() => {
    if (!book.type) {
      formik.resetForm({ values: { title: "", author: "", description: "", type: "", url: "" } }); 
    }
  }, [book.type])

  const types = [
    {
      value: 'Fantastic',
      label: 'Fantastic'
    },
    {
      value: 'Horrors',
      label: 'Horrors'
    },
    {
      value: 'Detective',
      label: 'Detective'
    },
  ];

  const handleChange = (event: any) => {
    setType(event.target.value);
  };

  return (
    <Grid container justify="center" style={{overflowY: "scroll"}}>
      <Grid item xs={12} sm={8} md={8}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Paper className={classes.paper}>
            <FormControl style={{ width: "100%" }}>
              <FormGroup >
              <TextField
                label="Book Name"
                size="small"
                { ...formik.getFieldProps("title")}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title ? (
                <div style={{ color: "red" }}>{formik.errors.title}</div>
              ) : null}
              <TextField
                  label="Author"
                  size="small"
                {...formik.getFieldProps("author")}
                onBlur={formik.handleBlur}
              />
              {formik.errors.author && formik.touched.author ? (
                <div style={{ color: "red" }}>{formik.errors.author}</div>
              ) : null}
              <TextField
                label="Description"
                  size="small"
                  multiline
                {...formik.getFieldProps("description")}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description ? (
                <div style={{ color: "red" }}>{formik.errors.description}</div>
              ) : null}
              <TextField
                label="Picture Url"
                size="small"
                {...formik.getFieldProps("url")}
                onBlur={formik.handleBlur}
              />
              {formik.errors.url && formik.touched.url ? (
                <div style={{ color: "red" }}>{formik.errors.url}</div>
                ) : null}
                <TextField
                  id="standard-select-currency"
                  select
                  label="Book Type"
                  value={type}
                  onChange={handleChange}
                  helperText="Please select book type"
                  SelectProps={{ autoWidth: true}}
                >
                    {types.map((option) => (
                      <MenuItem key={option.value} value={option.value} >
                        {option.label}
                      </MenuItem>
                    ))}

                </TextField>

              <Grid container justify = "center" style={{paddingTop: "30px"}}>
              <Button type={"submit"} variant={"contained"} color={"primary"}>
                Submit
                  </Button>
              </Grid>
            </FormGroup>
            </FormControl>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};
export default BookForm
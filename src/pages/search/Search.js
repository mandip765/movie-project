import React from 'react'
import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';


const Search = () => {

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movie/search/${val.search.trim()}`);
      resetForm();
    }
  })
  return (
    <div className="relative flex max-w-[200px]">
      <form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          value={formik.values.search}
          type="text"
          label="Search Movies"
          color='white'
          name='search'
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          type='submit'
          size="sm"

          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </form>
    </div>
  )
}

export default Search
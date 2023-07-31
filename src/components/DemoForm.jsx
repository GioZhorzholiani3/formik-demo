// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import { useFormik } from "formik";

//*DONE:validation with formik
// const initialValues = {
//   name: "",
//   email: "",
//   channel: "",
// };

// const validate = (values) => {
//   //values.name values.email values.channel
//   //errors.name errors.email errors.channel
//   //errors.name = 'This field is required'
//   let errors = {};

//   if (!values.name.trim()) {
//     errors.name = "Name field is required";
//   }
//   if (!values.email.trim()) {
//     errors.email = "Email field is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel.trim()) {
//     errors.channel = "Channel field is required";
//   }

//   return errors;
// };

// const onSubmit = (values) => {
//   console.log("Form data", values);
// };

// const Form = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//   });

//   // console.log("Form values", formik.values);
//   return (
//     <div className="form">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             name="channel"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.channel}
//           />
//           {formik.touched.channel && formik.errors.channel ? (
//             <div className="error">{formik.errors.channel}</div>
//           ) : null}
//         </div>

//         <Button type="submit" variant="contained" endIcon={<SendIcon />}>
//           Submit
//         </Button>
//         {/* <button>Submit</button> */}
//       </form>
//     </div>
//   );
// };

//?DONE: vaidation with yup

// import * as Yup from "yup";

// const initialValues = {
//   name: "",
//   email: "",
//   channel: "",
// };

// // const validate = (values) => {
// //   //values.name values.email values.channel
// //   //errors.name errors.email errors.channel
// //   //errors.name = 'This field is required'
// //   let errors = {};

// //   if (!values.name.trim()) {
// //     errors.name = "Name field is required";
// //   }
// //   if (!values.email.trim()) {
// //     errors.email = "Email field is required";
// //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
// //     errors.email = "Invalid email format";
// //   }

// //   if (!values.channel.trim()) {
// //     errors.channel = "Channel field is required";
// //   }

// //   return errors;
// // };

// const validationSchema = Yup.object({
//   name: Yup.string().required("This field is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format")
//     .required("This field is required"),
//   channel: Yup.string().required("This field is required"),
// });

// const onSubmit = (values) => {
//   console.log("Form data", values);
// };

// const Form = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     //& validate,
//     validationSchema,
//   });

//   // console.log("Form values", formik.values);
//   return (
//     <div className="form">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             name="channel"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.channel}
//           />
//           {formik.touched.channel && formik.errors.channel ? (
//             <div className="error">{formik.errors.channel}</div>
//           ) : null}
//         </div>

//         <Button type="submit" variant="contained" endIcon={<SendIcon />}>
//           Submit
//         </Button>
//         {/* <button>Submit</button> */}
//       </form>
//     </div>
//   );
// };

// export default Form;

//?TODO: refactor code
// import * as Yup from "yup";

// const initialValues = {
//   name: "",
//   email: "",
//   channel: "",
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required("This field is required"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format")
//     .required("This field is required"),
//   channel: Yup.string().required("This field is required"),
// });

// const onSubmit = (values) => {
//   console.log("Form data", values);
// };

// const Form = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     //& validate,
//     validationSchema,
//   });

//   // console.log("Form values", formik.values);
//   return (
//     <div className="form">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             // onChange={formik.handleChange}
//             // onBlur={formik.handleBlur}
//             // value={formik.values.name}
//             {...formik.getFieldProps("name")} //* replease above 3 lines with this line result is same
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="error">{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             // onChange={formik.handleChange}
//             // onBlur={formik.handleBlur}
//             // value={formik.values.email}
//             {...formik.getFieldProps("email")} //* replease above 3 lines with this line result is same
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className="error">{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <input
//             type="text"
//             id="channel"
//             name="channel"
//             // onChange={formik.handleChange}
//             // onBlur={formik.handleBlur}
//             // value={formik.values.channel}
//             {...formik.getFieldProps("channel")} //* replease above 3 lines with this line result is same
//           />
//           {formik.touched.channel && formik.errors.channel ? (
//             <div className="error">{formik.errors.channel}</div>
//           ) : null}
//         </div>

//         <Button type="submit" variant="contained" endIcon={<SendIcon />}>
//           Submit
//         </Button>
//         {/* <button>Submit</button> */}
//       </form>
//     </div>
//   );
// };

// export default Form;

//?TODO: use formic component
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format")
    .required("This field is required"),
  channel: Yup.string().required("This field is required"),
  // comments: Yup.string().required("This field is required"),
});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const DemoForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="form">
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {(props) => {
                // console.log("Render props", props);
                const { field, form, meta } = props;
                // console.log("Render props", props);
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" />
          </div>
          <div className="form-control">
            <label htmlFor="twitte">Facebook profile</label>
            <Field type="text" id="twitter" name="social.twitter" />
          </div>

          <div className="form-control">
            <label htmlFor="primaryPh">Primary phone number</label>
            <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
          </div>
          <div className="form-control">
            <label htmlFor="secondaryPh">Secondary phone number</label>
            <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
          </div>

          <div className="form-control">
            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                console.log("field array props", fieldArrayProps);
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;

                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field type="add-remove" name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button
                            className="add-removeBtn"
                            type="button"
                            onClick={() => remove(index)}
                          >
                            -
                          </button>
                        )}
                        <button
                          className="add-removeBtn"
                          type="button"
                          onClick={() => push("")}
                        >
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Form>
      </div>
    </Formik>
  );
};

export default DemoForm;

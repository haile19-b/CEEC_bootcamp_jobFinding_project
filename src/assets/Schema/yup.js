import * as yup from "yup"


export const SchemaOne = yup.object().shape({
    title:yup.string().min(3,"title is too less").max(15,"title is too long").required("this field is required"),
    type:yup.string().max(15,"type is too long").required("this field is required"),
    salary:yup.number("it must be numeric").required("this field is required"),
    company:yup.string().max(20,"company name is too long").required("this field is required"),
});


export const SchemaTwo = yup.object().shape({
    logo:yup.string().required("this field is required"),
    isBookMarked:yup.boolean("you only true or false option").required("this field is required"),
    location:yup.string().required("this field is required"),
    experienceLevel:yup.string().required("this field is required"),
});

export const SchemaThree = yup.object().shape({
    currency:yup.string().required("this field is required"),
    description:yup.string().required("this field is required"),
});
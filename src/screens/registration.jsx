"use client";

import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import AppLogo from "@/components/AppLogo";
import Button from "@/components/Button";
import Copyright from "@/components/Copyright";
import Input from "@/components/Form/Input";
import Layout from "@/components/Layout";
import { setUserScreen } from "@/store/user/actions";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(\+62|08)\d{8,11}$/, "Nomor telepon tidak valid")
    .required("Nomor telepon wajib diisi"),
  name: Yup.string().required("Nama wajib diisi"),
  birthDate: Yup.string().required("Tanggal lahir wajib diisi"),
  birthPlace: Yup.string().required("Tempat lahir wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
});

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      name: "",
      birthDate: "",
      birthPlace: "",
      email: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      setIsLoading(true);
      console.log("Form submitted:", values);

      // Simulate API call with timeout
      setTimeout(() => {
        setIsLoading(false);
        dispatch(setUserScreen("create-pin"));
      }, 1500);
    },
  });

  return (
    <Layout
      headerTitle="LRT X JakOne Pay"
      className="items-center px-3 pt-7"
      onBack={() => dispatch(setUserScreen("input-phone-number"))}
      headerDivider
    >
      <AppLogo />

      <form onSubmit={formik.handleSubmit} className="w-full space-y-7">
        <Input
          placeholder="Nomor telepon/handphone"
          id="phoneNumber"
          type="tel"
          {...formik.getFieldProps("phoneNumber")}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <Input
          placeholder="Nama"
          id="name"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
        />

        <Input
          placeholder="Tanggal Lahir"
          id="birthDate"
          type="date"
          min="1900-01-01"
          max={new Date().toISOString().split("T")[0]}
          {...formik.getFieldProps("birthDate")}
          error={formik.touched.birthDate && formik.errors.birthDate}
        />

        <Input
          placeholder="Tempat Lahir"
          id="birthPlace"
          {...formik.getFieldProps("birthPlace")}
          error={formik.touched.birthPlace && formik.errors.birthPlace}
        />

        <Input
          placeholder="Email"
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />

        <Button
          type="submit"
          disabled={!formik.isValid}
          className="!mt-12"
          isLoading={isLoading}
        >
          Daftar
        </Button>
      </form>

      <Copyright className="mb-8 mt-6" />
    </Layout>
  );
};

export default RegistrationScreen;

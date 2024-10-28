"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import Button from "@/components/Button";
import CardTopup from "@/components/CardTopup";
import InputCurrency from "@/components/Form/InputCurrency";
import RadioGroupPrice from "@/components/Form/RadioGroupPrice";
import HeaderTopup from "@/components/HeaderTopup";
import Layout from "@/components/Layout";
import listMenuTopup from "@/config/menu-topup.json";

const validationSchema = Yup.object().shape({
  amount: Yup.string().test(
    "min-amount",
    "Minimum amount is Rp 20.000",
    (value) => {
      const numValue = parseInt(value || "0");
      return numValue >= 20000;
    },
  ),
});

const TopupPage = ({ params }) => {
  const router = useRouter();
  const type = params?.type;
  const data = listMenuTopup.find((item) => item.name === type);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      router.push(`/topup`);
    },
  });

  const handleRadioChange = (value) => {
    formik.setFieldValue("amount", value);
  };

  return (
    <Layout
      headerTitle="Top Up LRTJPay"
      onBack={() => router.back()}
      className="!font-inter"
      headerClassName="!font-inter gap-8 !font-bold"
      backIcon="/arrow-left-black.svg"
      backIconClassName="size-4"
    >
      <HeaderTopup title={data?.screen_title} />
      <CardTopup />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <RadioGroupPrice
          value={formik.values.amount}
          onChange={handleRadioChange}
        />
        <div className="flex flex-col gap-12 px-4">
          <InputCurrency
            {...formik.getFieldProps("amount")}
            onChange={(value) => formik.setFieldValue("amount", value)}
            onBlur={() => formik.setFieldTouched("amount", true)}
            error={formik.touched.amount && formik.errors.amount}
            placeholder="0"
          />
          <Button
            type="submit"
            disabled={!formik.isValid || !formik.values.amount}
            className="mt-4"
          >
            Next
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default TopupPage;

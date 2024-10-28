"use client";
import { useRouter } from "next/navigation";

import HeaderTopup from "@/components/HeaderTopup";
import Layout from "@/components/Layout";
import MenuTopup from "@/components/MenuTopup";
import listMenuTopup from "@/config/menu-topup.json";

const TopupPage = () => {
  const router = useRouter();
  return (
    <Layout
      headerTitle="Top Up LRTJPay"
      onBack={() => router.back()}
      className="!font-inter"
      headerClassName="!font-inter gap-8 !font-bold"
      backIcon="/arrow-left-black.svg"
      backIconClassName="size-4"
    >
      <HeaderTopup title="Top Up Methods" />
      <MenuTopup datas={listMenuTopup} />
    </Layout>
  );
};

export default TopupPage;

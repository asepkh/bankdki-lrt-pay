import InputPhoneNumberOTP from "@/components/Form/InputPhoneNumberOTP";
import Layout from "@/components/Layout";

const InputPhoneNumberScreen = () => {
  return (
    <Layout headerTitle="LRT X JakOne Pay" className="items-center px-6 pt-3">
      <img
        src="/logo-lrt.png"
        alt="lrt-x-jakone-pay"
        className="mb-6 h-auto w-[185px]"
      />
      <h2 className="mb-6 text-lg">Selamat Datang</h2>
      <span className="mb-3 w-full text-xs">
        Ekspresikan perjalananmu menggunakan LRT Pay
      </span>
      <InputPhoneNumberOTP />
      <span className="mb-[228px] text-sm font-medium">
        Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{" "}
        <b className="text-[#E21A1A]">syarat & ketentuan</b> yang berlaku
      </span>
      <img src="/copyright.png" alt="copyright" className="w-[190px]" />
    </Layout>
  );
};

export default InputPhoneNumberScreen;

import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Head from "next/head";
import { useRouter } from "next/router";

const navMenuList = [
  { name: "Document", link: "/write?section=document" },
  { name: "Test", link: "/write?section=test" },
  { name: "Email", link: "/write?section=email" },
];

const Write = () => {
  return (
    <>
      <Head>
        <title>Write</title>
      </Head>
      <div>
        <HeaderNavigatorBar menuList={navMenuList} />
      </div>
    </>
  );
};

export default Write;

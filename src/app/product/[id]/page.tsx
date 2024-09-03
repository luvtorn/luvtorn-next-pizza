import React from "react";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return <div>product {id}</div>;
};

export default Page;
